from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.views import TokenObtainPairView
from knox.auth import TokenAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import generics, permissions, views
from rest_framework.exceptions import NotFound
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from people.models import User, UserPasswordResetCode
from rest_framework import viewsets
from rest_framework import status
from people.tasks import Email
from people.user_groups import (
    PRINCIPAL,
    TEACHER,
    BURSAR,
    STUDENT,
    PARENT,
    CLERK
)
from knox.models import AuthToken
from django.conf import settings
from people.permissions import (
	GeneralPermission,
	IsPrincipal,
	IsBursar,
	IsTeacher,
	IsStudent,
	IsParent,
	IsClerk,
	IsUpdateMethod,
	HasUserPermissions,
	IsGetRequest,
)

from people.serializers import (
	ResetSerializer,
	ChangePassSerializer,
	ForgotPassSerialiazer,
	LoginSerializer,
	UserSerializer,
)
import random
from string import digits, ascii_uppercase
from django.core.exceptions import ObjectDoesNotExist
from django.core.mail import BadHeaderError, send_mail



legals = digits + ascii_uppercase

def rand_string(length=350, char_set=legals):
    output = ''
    for _ in range(length): 
        output += random.choice(char_set)
    return output


def get_user_with_mail(email):
    try:
        user = User.objects.get(email=email)
        return user
    except User.DoesNotExist:
        return 'An account with this email address does not Exist'
    

def generate_reset_token(email):
    user = get_user_with_mail(email)
    if user == 'An account with this email address does not Exist.':
        print(user)
    else:
        
        UserPasswordResetCode.objects.create(
            user = user,
            reset_code = rand_string(350)
        )


def get_user(token):
    try:
        reset_token = UserPasswordResetCode.objects.get(reset_code=token)
        user = reset_token.user
        return user 
    except UserPasswordResetCode.DoesNotExist:
        return 'This token does not Exist'


def get_token(token):
    try:
        reset_token = UserPasswordResetCode.objects.get(reset_code=token)
        return reset_token
    except UserPasswordResetCode.DoesNotExist:
        return 'This token does not Exist'
    





class ForgotPassAPI(views.APIView):
    
    permission_classes = [
        permissions.AllowAny,
    ]

    serializer_class = ForgotPassSerialiazer

    def post(self, request, *args, **kwargs):
        data = request.data.copy()
        print(data)

        email = data['email']

        user = get_user_with_mail(email)
        if user == 'An account with this email address does not Exist':
            return Response({
                    "error": user
                }, status=status.HTTP_400_BAD_REQUEST)
        else:
            code = UserPasswordResetCode.objects.create(
                        user = user,
                        reset_code = rand_string(350)
                    )
            try:

                icode = code.reset_code
                message =  f'May you click  https://www.gererebusinesscollege.co.za/#/reset and copy this code: {icode} to reset your password'
                send_mail(
                    'Reset Password Gerere Bussiness College',
                    message,
                    settings.EMAIL_HOST_USER ,
                    [email],
                    fail_silently=False,
                )
                return Response({
                            "msg": 'Your request has been approved. Open your email and follow the instructions to set new password'
                        }, status=status.HTTP_200_OK)
            
            except BadHeaderError:
                print('Invalid header found.')



class ResetAPI(views.APIView):
    
    serializer_class = ResetSerializer

    def post(self, request, *args, **kwargs):

        data = request.data.copy()
        token = data['token']
        user = get_user(token)
        if user == 'This token does not Exist':
            return Response({
                    "error": user
                }, status=status.HTTP_400_BAD_REQUEST)
        else:
            token = get_token(token)
            if token.expired == True or token.uses >= 1:
                return Response({
                    "error": 'This token has been used and has expired'
                }, status=status.HTTP_400_BAD_REQUEST)
            else:
                token.expired = True
                token.uses += 1
                token.save()
                user.set_password(request.data.get("password"))
                user.save()
                return Response({
                            "msg": 'Your Password has been reset successfully. Proceed to login'
                        }, status=status.HTTP_200_OK)










class UserAPI(generics.RetrieveAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = [permissions.AllowAny,]
    serializer_class = UserSerializer

    def get_object(self):
        """
        get user object
        """
        email = self.request.query_params.get('email', None)
        if email is not None:
            user = get_user(email=email)
            return user
        return None





# Change Password API
class ChangePassAPI(generics.UpdateAPIView):

    permission_classes = [
        permissions.IsAuthenticated & IsUpdateMethod
    ]

    serializer_class = ChangePassSerializer

    def update(self, request, *args, **kwargs):
        """
        Change password of user granted
        they know their previous password.
        """

        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            if not self.get_object().check_password(serializer.data.get("password")):
                return Response(
                    {"error": "Incorrect password"},
                    status=status.HTTP_400_BAD_REQUEST)
            user = self.get_object()
            try:
                validate_password(serializer.data.get("new_password"))
            except Exception as e:
                return Response({"error": e}, status=status.HTTP_400_BAD_REQUEST)
            user.set_password(serializer.data.get("new_password"))
            user.save()
            # Email.change_password(request).delay()
            refresh = RefreshToken.for_user(user)
            return Response({
                "user": UserSerializer(
                    user,
                    context=self.get_serializer_context()).data,
                "refresh": str(refresh),
                'access': str(refresh.access_token)
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get_object(self):
        """
        get user object
        """

        return self.request.user





class LoginView(generics.GenericAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
    	serializer = self.get_serializer(data=request.data)
    	serializer.is_valid(raise_exception=True)
    	user = serializer.validated_data
    	_, token = AuthToken.objects.create(user)
    	return Response({
    			"user": UserSerializer(user, context=self.get_serializer_context()).data,
    			"token": token
    		})

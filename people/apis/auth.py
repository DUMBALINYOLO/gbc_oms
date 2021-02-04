from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import generics, permissions
from rest_framework.exceptions import NotFound
from rest_framework.response import Response
from people.models import User
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

# Get User API
class UserAPI(generics.RetrieveAPIView):

    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer

    def get_object(self):
        """
        get user object
        """
        return self.request.user




# Reset API
class ResetAPI(generics.GenericAPIView):

    serializer_class = ResetSerializer

    def post(self, request, *args, **kwargs):
        """
        confirm existence of user, generate jwt
        for recovery and respond to user accordingly.
        """

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = User.objects.filter(
            email=request.data['email'])
        if user.exists():
            # Email.reset(request).delay()
            pass
        else:
            raise NotFound('user not found')
        return Response({"detail": f"a recovery email has been sent to the account {user.first().blur_email()}"})


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


class ForgotPassAPI(generics.UpdateAPIView):

    permission_classes = [
        permissions.IsAuthenticated & IsUpdateMethod
    ]

    serializer_class = ForgotPassSerialiazer

    def update(self, request, *args, **kwargs):
        """
        Change password of user provided they
        have forgotten their password.
        """

        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = self.get_object()
            try:
                validate_password(serializer.data.get("new_password"))
            except Exception:
                return Response({
                    "error": "Invalid password"
                }, status=status.HTTP_400_BAD_REQUEST)
            user.set_password(serializer.data.get("password"))
            user.save()

            Email.change_password(request).delay()
            refresh = RefreshToken.for_user(user)
            return Response({
                "user": UserSerializer(
                    user,
                    context=self.get_serializer_context()).data,
                "refresh": str(refresh),
                'access': str(refresh.access_token)
            },
                status=status.HTTP_200_OK
            )
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST)

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

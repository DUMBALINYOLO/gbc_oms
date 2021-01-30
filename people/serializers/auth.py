from rest_framework import serializers
from django.contrib.auth import authenticate, get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer, PasswordField
from django.contrib.auth import password_validation
from rest_framework.exceptions import ValidationError



User = get_user_model()



# Rest Password Serializer
class ResetSerializer(serializers.Serializer):

    username = serializers.CharField(required=False)
    email = serializers.CharField(required=False)

    class Meta:
        model = User 
        fields = [
            'id',
            'username',
            'email',
        ]


# Change Password Serializer
class ChangePassSerializer(serializers.Serializer):

    model = User
    password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)


# Change Password Serializer
class ForgotPassSerialiazer(serializers.Serializer):

    model = User
    password = serializers.CharField(required=True)



class LoginSerializer(serializers.Serializer):
	email = serializers.CharField()
	password = serializers.CharField()


	def validate(self, data):
		user = authenticate(**data)
		if user and user.is_active:
			return user
		raise serializers.ValidationError("Incorrect Credentials")
		

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'email', 'type', 'username')
		
    

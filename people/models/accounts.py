from django.db import models
import uuid
from django.db import models
from datetime import date
from django.utils import timezone
from django.core.validators import RegexValidator
from django.contrib.auth.models import (
        BaseUserManager, 
        AbstractBaseUser,
        PermissionsMixin
    )
from phonenumber_field.modelfields import PhoneNumberField
from basedata.models import SoftDeletionModel
from basedata.constants import (
            USER_TITLE_CHOICES,
            USER_TYPE_CHOICES,
            GENDER_CHOICES,
            USER_STATUS_CHOICES,
        )




class UserManager(BaseUserManager):
    

    def create_user(self, email, is_superuser=False, password=None, is_active=True, is_staff=False, is_admin=False):
        if not email:
            raise ValueError("Enter Valid Email")
        user_obj = self.model(
                email=self.normalize_email(email)
        )
        user_obj.set_password(password)
        user_obj.staff = is_staff
        user_obj.admin = is_admin
        user_obj.active = is_active
        user_obj.save(using=self._db)
        return user_obj


    def create_superuser(self, email, password=None, **extra_fields):
        user=self.create_user(
            email,
            password = password,
            is_staff = True,
            is_admin =True,
            is_superuser=True, 
            **extra_fields
        )
        return user





class User(AbstractBaseUser, PermissionsMixin):

    base_type = 'none'

    
    email = models.EmailField(
                        unique=True, 
                        blank=True, 
                        null=True,
                        max_length=355
                    )
    active = models.BooleanField(default=True)
    staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    admin = models.BooleanField(default=False)
    type = models.CharField(max_length=341, choices = USER_TYPE_CHOICES, default=base_type)
    username = models.CharField(max_length=341, unique=True)

    def __str__(self):
        if self.username is not None:
            return self.username
        return self.email

        

    objects = UserManager()


    USERNAME_FIELD = 'email'
    REQUIRE_FIELDS = ['type', 'username']

    @property
    def token(self):
        dt = datetime.now() + timedelta(days=days)
        token = jwt.encode({
            'id': user_id,
            'exp': int(time.mktime(dt.timetuple()))
        }, settings.SECRET_KEY, algorithm='HS256')
        return token.decode('utf-8')
        

    def get_full_name(self):
        return self.email

    def get_short_name(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True 

    @property
    def is_staff(self):
        return self.staff


    @property
    def is_admin(self):
        return self.admin


    @property
    def is_active(self):
        return self.active



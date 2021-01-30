import uuid
from django.db import models
from datetime import date
from django.utils import timezone
from basedata.models import SoftDeletionModel
from basedata.constants import (
            USER_TITLE_CHOICES,
            GENDER_CHOICES,
            USER_STATUS_CHOICES,
        )
from phonenumber_field.modelfields import PhoneNumberField
from .accounts import User
from django.contrib.auth.models import BaseUserManager


class PrincipalManager(BaseUserManager):
    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(type='principal')


    def create_principal(self, email, username, password=None):
        if email is None:
            raise TypeError('Users must have an email address.')
        principal = Principal(username=username, 
                          email=self.normalize_email(email))
        principal.set_password(password)
        principal.save()
        return principal


class Principal(User):
    # base_type = 'principal'
    objects = PrincipalManager()

    def save(self, *args, **kwargs):
        if not self.pk:
            self.type = 'principal'
        super(Principal, self).save(*args, **kwargs)



    class Meta:
        proxy  = True

    @property
    def profile(self):
        return self.principalprofile
    


class PrincipalProfile(SoftDeletionModel):
    user = models.OneToOneField(
                        'people.User', 
                        on_delete=models.PROTECT,
                        null=True,
                        blank=True
                    )
    title = models.CharField(max_length=200, blank=True, null=True, choices=USER_TITLE_CHOICES)
    gender = models.CharField(
                    max_length=500, 
                    choices=GENDER_CHOICES, 
                    blank=True, 
                    null=True
                )
    id_number = models.CharField(max_length=64, blank=True, null=True)
    first_name = models.CharField(max_length =32, blank=True, null=True)
    middle_name = models.CharField(max_length =32, blank=True, null=True)
    last_name = models.CharField(max_length =32, blank=True, null=True,)
    phone_number = PhoneNumberField(blank=True, null=True)
    whatsapp_number = PhoneNumberField(blank=True, null=True)


    class Meta:
        verbose_name_plural = 'Principals Profiles'


    def __str__(self):
        return self.user.__str__()

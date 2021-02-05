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


class BursarManager(BaseUserManager):
    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(type='bursar')


    def create_bursar(self, email, username, password=None):
        if email is None:
            raise TypeError('Users must have an email address.')
        bursar = Bursar(username=username,
                          email=self.normalize_email(email))
        bursar.set_password(password)
        bursar.save()
        return bursar


class Bursar(User):
    base_type = 'bursar'
    objects = BursarManager()

    class Meta:
        proxy  = True

    @property
    def profile(self):
        return self.bursarprofile



class BursarProfile(SoftDeletionModel):
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
        verbose_name_plural = 'Bursars Profiles'


    def __str__(self):
        return self.user.__str__()

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

class StaffUser(SoftDeletionModel):
    user = models.OneToOneField(
                        'people.User', 
                        on_delete=models.PROTECT,
                        null=True,
                        blank=True
                    )
    title = models.CharField(max_length=200, choices=USER_TITLE_CHOICES)
    id_number = models.CharField(max_length=64, blank=True, null=True)
    gender = models.CharField(
    				max_length=500, 
    				choices=GENDER_CHOICES, 
    				blank=True, 
                    null=True
    			)
    first_name = models.CharField(max_length =32, blank=True, null=True)
    middle_name = models.CharField(max_length =32, blank=True, null=True)
    last_name = models.CharField(max_length =32)
    phone_number = PhoneNumberField(blank=True, null=True)
    whatsapp_number = PhoneNumberField(blank=True, null=True)


    def __str__(self):
        return self.first_name
    



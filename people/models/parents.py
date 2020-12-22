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
from basedata.utils import random_string
from .accounts import User


class Parent(User):
    title = models.CharField(max_length=200, choices=USER_TITLE_CHOICES)
    gender = models.CharField(
                    max_length=500, 
                    choices=GENDER_CHOICES, 
                    blank=True, 
                    null=True
                )
    id_number = models.CharField(max_length=64, blank=True, null=True)
    




        


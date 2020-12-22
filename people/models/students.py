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


class Student(User):
    # user = models.OneToOneField('User', on_delete=models.SET_NULL, null=True)
    
    guardian = models.ForeignKey(
    					'people.Parent', 
    					on_delete=models.PROTECT, 
    					related_name='children', 
    					null=True,
                        blank=True
    				)
    school = models.ForeignKey(
    					'setup.Institution',  
    					on_delete=models.PROTECT, 
    					related_name='students', 
    					null=True
    				)
    gender = models.CharField(
    				max_length=500, 
    				choices=GENDER_CHOICES, 
    				blank=True, 
    				null=True
    			)
    date_of_birth = models.DateField(blank=True, null=True)
    # # student_number = models.CharField(
    #                             random_string(),
    # 							max_length=255,
    # 							unique=True, 
    # 							default=None,
    # 							primary_key=True,
    # 						)


    def save(self, *args, **kwargs):
        super(Student, self).save(*args, **kwargs)


    @property
    def behaviour(self):
        return self.disciplines.all()






    @property
    def attendancerecords(self):
        return self.attendancerecords.all()

    
    


    

















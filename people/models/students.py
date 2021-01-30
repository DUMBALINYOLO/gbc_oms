import uuid
from django.db import models
from datetime import date
from django.utils import timezone
from basedata.models import SoftDeletionModel
from basedata.constants import (
            GENDER_CHOICES,
            USER_STATUS_CHOICES,
        )
from phonenumber_field.modelfields import PhoneNumberField
from .accounts import User
from django.contrib.auth.models import BaseUserManager


class StudentManager(BaseUserManager):
    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(type='student')

    def create_student(self, email, username, password=None):
        if email is None:
            raise TypeError('Users must have an email address.')
        student = Student(username=username, 
                          email=self.normalize_email(email))
        student.set_password(password)
        student.save()
        return student



class Student(User):
    # base_type = 'student'
    objects = StudentManager()


    def save(self, *args, **kwargs):
        if not self.pk:
            self.type = 'student'
        super(Student, self).save(*args, **kwargs)

    class Meta:
        proxy  = True

    @property
    def profile(self):
        return self.studentprofile

    @property
    def attendance(self):
        return self.studentprofile.attendancerecords.all()


    @property
    def application(self):
        return self.studentprofile.application
    


class StudentProfile(SoftDeletionModel):
    user = models.OneToOneField(
                        'people.User', 
                        on_delete=models.PROTECT,
                        null=True,
                        blank=True
                    )
    gender = models.CharField(
                    max_length=500, 
                    choices=GENDER_CHOICES, 
                    blank=True, 
                    null=True
                )
    guardian = models.ForeignKey(
                        'people.ParentProfile',
                        blank=True,
                        null=True,
                        on_delete=models.SET_NULL,
                        related_name='children',
                    )
    id_number = models.CharField(max_length=64, blank=True, null=True)
    first_name = models.CharField(max_length =32, blank=True, null=True)
    middle_name = models.CharField(max_length =32, blank=True, null=True)
    last_name = models.CharField(max_length =32, blank=True, null=True)
    phone_number = PhoneNumberField(blank=True, null=True)
    whatsapp_number = PhoneNumberField(blank=True, null=True)


    class Meta:
        verbose_name_plural = 'Student Profiles'


    def __str__(self):
        return self.user.__str__()









from django.db import models
from basedata.models import SoftDeletionModel
from basedata.constants import (
        CLASS_ENROLLMENT_STATUS_CHOICES
    )

class StudentEnrollment(models.Model):


    enr_klass = models.ForeignKey('klasses.StudentClass', on_delete=models.PROTECT)
    stdnt = models.ForeignKey('people.Student', on_delete=models.PROTECT)
    status = models.CharField(
                max_length=200, 
                choices=CLASS_ENROLLMENT_STATUS_CHOICES, 
                default="enroll"
            )
    enrollment_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.stdnt.__str__()} {self.enr_klass.__str__()} {self.enrollment_date}'


    class Meta:
        unique_together = [['stdnt', 'enr_klass']]


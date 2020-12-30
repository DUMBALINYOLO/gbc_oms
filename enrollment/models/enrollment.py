import uuid
from django.db import models
from basedata.models import SoftDeletionModel
from basedata.constants import ONLINE_ADMISSION_STATUS_CHOICES


class Admission(SoftDeletionModel):
    student = models.OneToOneField(
                        'people.Student',
                        on_delete=models.CASCADE,
                        related_name='application'
                )
    status = models.CharField(
                        max_length=200, 
                        choices=ONLINE_ADMISSION_STATUS_CHOICES,
                        default='pending'
                    )
    application_date = models.DateField(auto_now_add=True)
    application_number  = models.CharField(max_length=255, null=True, default=None)
    klass = models.ForeignKey(
                            'klasses.StudentClass',
                            related_name='applicants',
                            on_delete=models.SET_NULL,
                            null = True
                        ) 


    def save(self, *args, **kwargs):
        if not self.application_number:
            self.application_number = str(uuid.uuid4()).replace("-", '').upper()[:15]
        super(Admission, self).save(*args, **kwargs)





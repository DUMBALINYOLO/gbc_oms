from django.db import models
from basedata.models import SoftDeletionModel
from basedata.constants import INSTITUTION_STATUS_CHOICES, INSTITUTION_TYPE_CHOICES


class Institution(SoftDeletionModel):

	name = models.CharField(max_length=68)
	type = models.CharField(max_length=68, choices=INSTITUTION_TYPE_CHOICES)
	status = models.CharField(max_length=68, choices=INSTITUTION_STATUS_CHOICES)
	address = models.TextField(max_length=68)
	mission = models.TextField(blank=True, null=True)
	vision = models.TextField(blank=True, null=True)
	telephone = models.CharField(max_length=50, blank=True)
	mobilephone = models.CharField(max_length=50, blank=True)
	school_email = models.EmailField(blank=True, null=True)
	school_logo = models.ImageField(blank=True, null=True, upload_to='school_info')
	website = models.URLField()


	def __str__(self):
		return self.name






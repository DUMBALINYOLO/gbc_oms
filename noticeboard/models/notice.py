from django.db import models
from basedata.models import SoftDeletionModel
from basedata.constants import (
				SCHOOL_NOTICE_TYPE_CHOICES, 
				SCHOOL_NOTICE_BOARD_STATUS_CHOICES
			)


class Notice(SoftDeletionModel):

	'''
		filter ongoing and expired

	'''
	title = models.CharField(max_length=68)
	type = models.CharField(max_length=200, choices=SCHOOL_NOTICE_TYPE_CHOICES)
	status = models.CharField(max_length=200, choices=SCHOOL_NOTICE_BOARD_STATUS_CHOICES)
	date_created = models.DateField(auto_now_add=True)
	expiry_date = models.DateField(auto_now_add=True)
	content = models.TextField()




	def __str__(self):
		return self.title



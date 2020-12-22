from django.db import models
from basedata.models import SoftDeletionModel



class SchoolHeadOffice(SoftDeletionModel):

	name = models.CharField(max_length=68)
	location = models.CharField(max_length=68)
	# email =
	# password = 
	# country 


	def __str__(self):
		return self.name


	def schools(self):
		return self.schools.all()


	def colleges(self):
		return self.schools.filter(type='college')





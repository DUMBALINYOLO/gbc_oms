from django.db import models
from decimal import Decimal as D
from basedata.models import SoftDeletionModel


class Stream(SoftDeletionModel):

	grade = models.CharField(max_length=68)

	def __str__(self):
		return self.grade

	@property
	def classes(self):
		return self.classes.all()


	@property
	def classes_count(self):
		return self.classes.count()
	
	@property
	def student_population(self):
		return sum([klaus.population for klaus in self.classes])
	











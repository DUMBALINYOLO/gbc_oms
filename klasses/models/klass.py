from django.db import models
from decimal import Decimal as D
from basedata.models import SoftDeletionModel
from basedata.constants import STUDENT_CLASS_STATUS_CHOICES, YEAR_CHOICES


class StudentClass(SoftDeletionModel):

	name = models.CharField(max_length=68)
	institution = models.ForeignKey(
							'setup.Institution',
							on_delete=models.SET_NULL,
							null=True,
							related_name='klasses'
						)
	stream = models.ForeignKey(
					'klasses.Stream', 
					related_name='classes',
					on_delete=models.SET_NULL, 
					null=True
				)
	max_population = models.IntegerField(default=0)
	population = models.IntegerField(default=0)
	class_teacher = models.ForeignKey('people.StaffUser', on_delete=models.SET_NULL, null=True)
	year = models.CharField(max_length=68)
	creation_date  =   models.DateTimeField(auto_now=False, auto_now_add=True)
	subjects = models.ManyToManyField(
	        'curriculum.Subject', 
	    # related_name="courses",
	        through='curriculum.KlassStudiedSubject'
	    )
	students = models.ManyToManyField(
	    'people.Student', 
	    # related_name="courses",
	    through='StudentEnrollment',)
	status = models.CharField(
		max_length=68, choices=STUDENT_CLASS_STATUS_CHOICES)
	# year = models.CharField(max_length=68, choices=YEAR_CHOICES)




	def __str__(self):
		return self.name

	def increment_student_number(self, amount):
		self.population += D(amount)
		self.save()
		return self.population


	def decrement_student_number(self, amount):
		self.population -= D(amount)
		self.save()
		return self.population

    
    # @property
    # def is_full(self):
    # 	pass

    # @property
    # def has_place(self):
    # 	pass

    # @property
    # def has_place(self):
    # 	pass
    	

    	
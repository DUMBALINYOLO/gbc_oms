from django.db import models
from django.db.models import Avg
from django.conf import settings
from basedata.models import SoftDeletionModel
from basedata.constants import GENERAL_GRADING_TYPE_CHOICES



class GeneralGrade(SoftDeletionModel):

	name = models.CharField(max_length=70)
	klass = models.ForeignKey(
							'klasses.StudentClass',
							blank=True,
							null=True,
							on_delete=models.SET_NULL,
							related_name='ongoing_grades'
						)
	total_marks = models.IntegerField(default=0)
	date = models.DateField()
	type = models.CharField(max_length=70, choices=GENERAL_GRADING_TYPE_CHOICES)


	def __str__(self):
		return f'NAME: {self.name} {self.klass}'


	def save(self, *args, **kwargs):
		super(CourseGrade, self).save(*args, **kwargs)
		if self.grade_records.count() <= 0:
			for student in self.klass.students.all():
				self.grade_records.create(student=student, score=0.0) 
				# separate sql query i guess for each entry created.



class Record(SoftDeletionModel):
	grade = models.ForeignKey(
							'GeneralGrade',
							on_delete=models.SET_NULL,
							blank=True,
							null=True,
							related_name='records'
						)
	student = models.ForeignKey(
							'people.Student',
							on_delete=models.SET_NULL,
							blank=True,
							null=True,
							related_name='grades'
						)
	score = models.FloatField(default=0.0)


	def __str__(self):
		return f'STUDENT: {self.student.__str__()}, MARK: {self.score}'


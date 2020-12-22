import uuid
from django.db import models
from basedata.models import SoftDeletionModel
from basedata.constants import STUDY_MODE_CHOICES


class Curriculum(SoftDeletionModel):

	name = models.CharField(max_length=68)
	code = models.CharField(max_length=68, blank=True, null=True)

	def save(self, *args, **kwargs):
		if not self.code:
			self.code = str(uuid.uuid4()).replace("-", '').upper()[:10]
		super(Curriculum, self).save(*args, **kwargs)

	def __str__(self):
		return self.name

	@property
	def subjects(self):
		return self.subjects.all()

	@property
	def subjects_number(self):
		return self.subjects.count()

		








# class SubjectAllocation(models.Model):
# 	"""
# 	A model to allocate subjects to respective teacher t the school
# 	"""
# 	teacher_name = models.ForeignKey(Teacher, on_delete=models.CASCADE)
# 	subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='allocated_subjects')
# 	academic_year = models.ForeignKey(AcademicYear, on_delete=models.CASCADE)
# 	term = models.CharField(max_length=10, choices=ACADEMIC_TERM, blank=True, null=True)
# 	class_room = models.ForeignKey(ClassRoom, on_delete=models.CASCADE, related_name='subjects')

# 	def __str__(self):
# 		return str(self.teacher_name)

# 	def subjects_data(self):
# 		for data in self.subjects.all():
# 			return data















			












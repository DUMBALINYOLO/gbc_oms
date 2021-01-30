from django.db.models.signals import post_save
from .models import (
			GeneralGrade,
			Record,
			# GradeRecord,
			# CourseGrade

	)


def create_student_grades(sender, instance, created, **kwargs):
	if created:
		if instance.grade_records.count() <= 0:
			for student in instance.klass.students.all():
				instance.grade_records.create(student=student, score=0.0)



post_save(create_student_grades, sender=GeneralGrade)


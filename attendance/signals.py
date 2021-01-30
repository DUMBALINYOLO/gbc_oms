from django.db.models.signals import post_save
from .models import (
			Attendance,

	)


def create_student_attendance_records(sender, instance, created, **kwargs):
	if created:
		if instance.records.count() <= 0:
			for student in instance.klass.students.all():
				instance.records.create(student=student, status='present') 



post_save(create_student_attendance_records, sender=Attendance)


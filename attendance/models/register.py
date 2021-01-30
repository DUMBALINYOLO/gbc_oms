from django.db import models
from basedata.models import SoftDeletionModel
from basedata.constants import ATTENDANCE_STATUS_CHOICES
from django.conf import settings



class Attendance(SoftDeletionModel):
	date = models.DateField(auto_now_add=True)
	klass = models.ForeignKey(
						'klasses.StudentClass', 
						models.SET_NULL, 
						null=True,
						blank=True,
						related_name='attendances'
					)
	recorded_by = models.ForeignKey(
                            "people.TeacherProfile", 
                            on_delete=models.SET_NULL, 
                            related_name='registerrecords', 
                            null=True
                        )
	complete=models.BooleanField(default=False, blank=True)

	
	def save(self, *args, **kwargs):
		super(Attendance, self).save(*args, **kwargs)
		if self.records.count() <= 0:
			for student in self.klass.students.all():
				self.records.create(student=student, status='present') 
		# separate sql query i guess for each entry created.

	def __str__(self):
		return f"{self.date}"




class AttendanceRecord(SoftDeletionModel):
	attendance = models.ForeignKey(
				'Attendance', 
				on_delete=models.SET_NULL, 
				null=True, 
				blank=True,
				related_name='records'
			)
	student = models.ForeignKey(
						'people.StudentProfile', 
						on_delete=models.SET_NULL,
						blank=True,
						null=True,
						related_name='attendancerecords'

					)
	status = models.CharField(max_length=100, choices=ATTENDANCE_STATUS_CHOICES)


	def __str__(self):
		return f"(STUDENT: {self.student}, STATUS: {self.status})"


	@property
	def date(self):
		return self.attendance.date

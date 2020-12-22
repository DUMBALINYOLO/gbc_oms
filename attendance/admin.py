from django.contrib import admin
from attendance.models import Attendance, AttendanceRecord

# Register your models here.
admin.site.register(Attendance)
admin.site.register(AttendanceRecord)
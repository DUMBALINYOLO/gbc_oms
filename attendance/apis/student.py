from rest_framework import viewsets
from rest_framework.response import Response
from attendance.models import AttendanceRecord
from attendance.serializers import (
			StudentAttendanceRecordListSerializer
	)


class StudentAttendanceViewSet(viewsets.ModelViewSet):
	


	def get_serializer_class(self, *args, **kwargs):
		if self.action == 'retrieve':
			return TeacherAttendanceDetailSerializer
		return TeacherAttendanceListSerializer

	def get_queryset(self, *args, **kwargs):
		student = self.request.user
		queryset = student.attendance
		return queryset


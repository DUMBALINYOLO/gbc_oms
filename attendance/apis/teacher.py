from rest_framework import viewsets
from rest_framework.response import Response
from attendance.models import  Attendance, AttendanceRecord
from attendance.serializers import (
			TeacherAttendanceCreateSerializer,
			TeacherAttendanceUpdateSerializer,
			TeacherAttendanceListSerializer,
			TeacherAttendanceDetailSerializer
	)


class TeacherAttendanceViewSet(viewsets.ModelViewSet):

	def get_serializer_class(self, *args, **kwargs):

		if self.action == 'create':
			return TeacherAttendanceCreateSerializer
		elif self.action in ['put', 'patch', 'update']:
			return TeacherAttendanceUpdateSerializer
		elif self.action == 'retrieve':
			return TeacherAttendanceDetailSerializer
		return TeacherAttendanceListSerializer


	def perform_create(self, serializer):
		serializer.save(recorded_by=self.request.user)


	def get_queryset(self, *args, **kwargs):
		teacher = self.request.user
		queryset =teacher.registerrecords.all().order_by('-id')

		return queryset











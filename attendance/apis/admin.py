from rest_framework import viewsets
from rest_framework.response import Response
from attendance.models import  Attendance, AttendanceRecord
from attendance.serializers import (
			AdminAttendanceCreateSerializer,
			AdminAttendanceUpdateSerializer,
			AdminAttendanceListSerializer,
			AdminAttendanceDetailSerializer
	)


class AdminAttendanceViewSet(viewsets.ModelViewSet):
	

	queryset = Attendance.objects.all().order_by('-id')


	def get_serializer_class(self, *args, **kwargs):

		if self.action == 'create':
			return AdminAttendanceCreateSerializer
		elif self.action in ['put', 'patch', 'update']:
			return AdminAttendanceUpdateSerializer
		elif self.action == 'retrieve':
			return AdminAttendanceDetailSerializer
		return AdminAttendanceListSerializer






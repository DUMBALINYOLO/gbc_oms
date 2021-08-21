from rest_framework import viewsets, generics, permissions
from knox.auth import  TokenAuthentication
from rest_framework.response import Response
from attendance.models import  Attendance, AttendanceRecord
from attendance.serializers import (
			TeacherAttendanceCreateSerializer,
			TeacherAttendanceUpdateSerializer,
			TeacherAttendanceListSerializer,
			TeacherAttendanceDetailSerializer
	)


class TeacherAttendanceViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.IsAuthenticated, ]
	queryset = Attendance.objects.all()

	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['put', 'create', 'patch', 'update']:
			return TeacherAttendanceCreateSerializer
		return TeacherAttendanceListSerializer



	# def get_queryset(self, *args, **kwargs):
	# 	teacher = self.request.user
	# 	queryset =teacher.registerrecords.all().order_by('-id')
	#
	# 	return queryset

from rest_framework import viewsets, generics, permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.response import Response
from attendance.models import  Attendance, AttendanceRecord
from attendance.serializers import (
			TeacherAttendanceCreateSerializer,
			TeacherAttendanceUpdateSerializer,
			TeacherAttendanceListSerializer,
			TeacherAttendanceDetailSerializer
	)


class TeacherAttendanceViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,SessionAuthentication, BasicAuthentication)
	permission_classes = [permissions.IsAuthenticatedOrReadOnly,]

	def get_serializer_class(self, *args, **kwargs):

		if self.action == 'create':
			return TeacherAttendanceCreateSerializer
		elif self.action in ['put', 'patch', 'update']:
			return TeacherAttendanceUpdateSerializer
		elif self.action == 'retrieve':
			return TeacherAttendanceDetailSerializer
		return TeacherAttendanceListSerializer



	def get_queryset(self, *args, **kwargs):
		teacher = self.request.user
		queryset =teacher.registerrecords.all().order_by('-id')

		return queryset

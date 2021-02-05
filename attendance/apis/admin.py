from rest_framework import viewsets, generics, permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from attendance.models import  Attendance, AttendanceRecord
from attendance.serializers import (
			AdminAttendanceCreateSerializer,
			AdminAttendanceUpdateSerializer,
			AdminAttendanceListSerializer,
			AdminAttendanceDetailSerializer,
			AttendanceRecordUpdateSerializer,
			AttendanceRecordListSerializer,
	)


def get_attendance(attendance_id):
	attendance = get_object_or_404(Attendance, id=attendance_id)
	return attendance




class AdminAttendanceViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,SessionAuthentication, BasicAuthentication)
	permission_classes = [permissions.IsAuthenticatedOrReadOnly,]

	queryset = Attendance.objects.all().order_by('-id')


	def get_serializer_class(self, *args, **kwargs):

		if self.action == 'create':
			return AdminAttendanceCreateSerializer
		elif self.action in ['put', 'patch', 'update']:
			return AdminAttendanceUpdateSerializer
		elif self.action == 'retrieve':
			return AdminAttendanceDetailSerializer
		return AdminAttendanceListSerializer


class AdminAttendanceRecordViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,SessionAuthentication, BasicAuthentication)
	permission_classes = [permissions.IsAuthenticatedOrReadOnly,]


	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'patch', 'update', 'put']:
			return AttendanceRecordUpdateSerializer
		return  AttendanceRecordListSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = AttendanceRecord.objects.all().order_by('-id')
		attendnce_id = self.request.query_params.get('id', None)
		if attendnce_id is not None:
			attendance = get_attendance(attendance_id=attendnce_id)
			queryset = attendance.records.all()
		return queryset

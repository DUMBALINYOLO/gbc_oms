from rest_framework import viewsets, generics, permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from attendance.models import AttendanceRecord
from attendance.serializers import (
			StudentAttendanceRecordListSerializer
	)





class StudentAttendanceViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]
	serializer_class = StudentAttendanceRecordListSerializer

	def get_queryset(self, *args, **kwargs):
		student = self.request.user
		queryset = student.attendance
		return queryset

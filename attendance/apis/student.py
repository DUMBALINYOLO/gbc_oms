from rest_framework import viewsets, generics, permissions
from knox.auth import TokenAuthentication
from rest_framework.response import Response
from django.db.models import Q as ComplexQueryLookUp
from django.shortcuts import get_object_or_404
from attendance.models import AttendanceRecord
from attendance.serializers import (
			StudentAttendanceRecordListSerializer
	)
from people.models import Student, StudentProfile



def get_student(email):
	user = get_object_or_404(Student, email=email)
	student = get_object_or_404(StudentProfile, user=user)
	return student


class StudentAttendanceViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.IsAuthenticated,]
	serializer_class = StudentAttendanceRecordListSerializer

	def get_queryset(self, *args, **kwargs):
		email = self.request.query_params.get('email', None)
		queryset = []
		if email is not None:
			student = get_student(email=email)
			queryset = student.attendancerecords.select_related(
														'attendance',
														'student'
													)
		return queryset

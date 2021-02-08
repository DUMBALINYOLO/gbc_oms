from rest_framework import viewsets, generics, permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from grading.models import Record
from django.db.models import Q as ComplexQueryFilter
from grading.serializers import StudentRecordListDetailSerializer
from django.shortcuts import get_object_or_404
from people.models import Student, StudentProfile

def get_student(email):
	user = get_object_or_404(Student, email=email)
	student = get_object_or_404(StudentProfile, user=user)
	return student


class StudentTestViewSet(viewsets.ModelViewSet):
	serializer_class = StudentRecordListDetailSerializer
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]


	def get_queryset(self, *args, **kwargs):
		email = self.request.query_params.get('email', None)
		queryset = []
		if email is not None:
			student = get_student(email=email)
			queryset = student.grades.filter(
							~ComplexQueryFilter(
									grade__type__in =['excercise', 'asignment']
								)
						).prefetch_related(
								'grade',
								'student'
							).order_by('-id')

		return queryset


class StudentExcerciseViewSet(viewsets.ModelViewSet):
	serializer_class = StudentRecordListDetailSerializer
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]


	def get_queryset(self, *args, **kwargs):
		email = self.request.query_params.get('email', None)
		queryset = []
		if email is not None:
			student = get_student(email=email)
			queryset = student.grades.filter(
							~ComplexQueryFilter(
									grade__type__in =['test', 'asignment']
								)
						).prefetch_related(
								'grade',
								'student'
							).order_by('-id')

		return queryset



class StudentAsignmentViewSet(viewsets.ModelViewSet):
	serializer_class = StudentRecordListDetailSerializer
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]


	def get_queryset(self, *args, **kwargs):
		email = self.request.query_params.get('email', None)
		queryset = []
		if email is not None:
			student = get_student(email=email)
			queryset = student.grades.filter(
							~ComplexQueryFilter(
									grade__type__in =['test', 'excercise']
								)
						).prefetch_related(
								'grade',
								'student'
							).order_by('-id')

		return queryset

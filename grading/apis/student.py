from rest_framework import viewsets, generics, permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from grading.models import Record
from django.db.models import Q as ComplexQueryFilter
from grading.serializers import StudentRecordListDetailSerializer


class StudentTestViewSet(viewsets.ModelViewSet):
	serializer_class = StudentRecordListDetailSerializer
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]


	def get_queryset(self, *args, **kwargs):
		user = self.requst.user
		student = user.student
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
		user = self.request.user
		student = user.student
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
		user = self.requst.user
		student = user.student
		queryset = student.grades.filter(
						~ComplexQueryFilter(
								grade__type__in =['test', 'excercise']
							)
					).prefetch_related(
							'grade',
							'student'
						).order_by('-id')

		return queryset

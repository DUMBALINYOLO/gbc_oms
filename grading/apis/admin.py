from django.shortcuts import get_object_or_404
from rest_framework import viewsets, generics, permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from grading.models import (
		GeneralGrade,
		Record
	)
from django.db.models import Q as ComplexQueryFilter
from grading.serializers import (
						AdminGeneralGradeCreateSerializer,
						AdminGeneralGradeUpdateSerializer,
						AdminGeneralListDetailSerializer,
						RecordCreateUpdateSerializer,
						RecordListDetailSerializer,
					)




class AdminGeneralGradeTestViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]


	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['put', 'patch', 'update']:
			return AdminGeneralGradeUpdateSerializer
		elif self.action == 'create':
			return AdminGeneralGradeCreateSerializer
		return AdminGeneralListDetailSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = GeneralGrade.objects.filter(
								~ComplexQueryFilter(
										type__in =['excercise', 'asignment']
									)
							).prefetch_related(
									'klass',
									'subject',
									'recorded_by'
								).order_by('-id')


		return queryset



	# def perform_create(self, serializer, *args, **kwargs):
	# 	user = self.request.user
	# 	return serializer.save(type='test', recorded_by=user.staffuser)


class AdminGeneralGradeExcerciseViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]


	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['put', 'patch', 'update']:
			return AdminGeneralGradeUpdateSerializer
		elif self.action == 'create':
			return AdminGeneralGradeCreateSerializer
		return AdminGeneralListDetailSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = GeneralGrade.objects.filter(
								~ComplexQueryFilter(
										type__in =['test', 'asignment']
									)
							).prefetch_related(
									'klass',
									'subject',
									'recorded_by'
								).order_by('-id')

		return queryset



	# def perform_create(self, serializer, *args, **kwargs):
	# 	user = self.request.user
	# 	return serializer.save(type='excercise', recorded_by=user.staffuser)


class AdminGeneralGradeAssignmentViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]


	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['put', 'patch', 'update']:
			return AdminGeneralGradeUpdateSerializer
		elif self.action == 'create':
			return AdminGeneralGradeCreateSerializer
		return AdminGeneralListDetailSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = GeneralGrade.objects.filter(
								~ComplexQueryFilter(
										type__in =['test', 'excercise']
									)
							).prefetch_related(
									'klass',
									'subject',
									'recorded_by'
								).order_by('-id')


		return queryset


def get_grade(grade_id):
	grade = get_object_or_404(GeneralGrade, id=grade_id)
	return grade


class AsignmentRecordsViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]


	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'patch', 'update', 'put']:
			return RecordCreateUpdateSerializer
		return  RecordListDetailSerializer



	def get_queryset(self, *args, **kwargs):
		queryset = Record.objects.filter(
								grade__type='asignment'
							).prefetch_related(
								'student'
							).order_by('-id')
		grade_id = self.request.query_params.get('id', None)
		if grade_id is not None:
			grade = get_grade(grade_id=grade_id)
			queryset = grade.records.filter(
								grade__type='asignment'
							).prefetch_related(
								'student'
							).order_by('-id')
		return queryset


class TestRecordViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]


	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'patch', 'update', 'put']:
			return RecordCreateUpdateSerializer
		return  RecordListDetailSerializer



	def get_queryset(self, *args, **kwargs):
		queryset = Record.objects.filter(
								grade__type='test'
							).prefetch_related(
								'student'
							).order_by('-id')
		grade_id = self.request.query_params.get('id', None)
		if grade_id is not None:
			grade = get_grade(grade_id=grade_id)
			queryset = grade.records.filter(
								grade__type='test'
							).prefetch_related(
								'student'
							).order_by('-id')
		return queryset


class ExcerciseRecordViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]


	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'patch', 'update', 'put']:
			return RecordCreateUpdateSerializer
		return  RecordListDetailSerializer



	def get_queryset(self, *args, **kwargs):
		queryset = Record.objects.filter(
								grade__type='excercise'
							).prefetch_related(
								'student'
							).order_by('-id')
		grade_id = self.request.query_params.get('id', None)
		if grade_id is not None:
			grade = get_grade(grade_id=grade_id)
			queryset = grade.records.filter(
								grade__type='excercise'
							).prefetch_related(
								'student'
							).order_by('-id')
		return queryset

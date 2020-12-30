from rest_framework import viewsets 
from grading.models import GeneralGrade
from django.db.models import Q as ComplexQueryFilter
from grading.serializers import (
						AdminGeneralGradeCreateSerializer,
						AdminGeneralGradeUpdateSerializer,
						AdminGeneralListDetailSerializer
					)



class AdminGeneralGradeTestViewSet(viewsets.ModelViewSet):


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



	def perform_create(self, serializer, *args, **kwargs):
		user = self.request.user
		return serializer.save(type='test', recorded_by=user.staffuser)


class AdminGeneralGradeExcerciseViewSet(viewsets.ModelViewSet):


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



	def perform_create(self, serializer, *args, **kwargs):
		user = self.request.user
		return serializer.save(type='excercise', recorded_by=user.staffuser)


class AdminGeneralGradeAssignmentViewSet(viewsets.ModelViewSet):


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



	def perform_create(self, serializer, *args, **kwargs):
		user = self.request.user
		return serializer.save(type='asignment', recorded_by=user.staffuser)




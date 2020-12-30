from rest_framework import viewsets
from django.db.models import Q as ComplexQuery
from django.utils import timezone
from event.models import (
			Event
	)
from event.serializers import (
			AdminEventCreateUpdateSerializer,
			AdminEventListDetailSerializer
	)




class UpcomingEventViewSet(viewsets.ModelViewSet):


	def get_serializer_class(self):
		if self.action in ['create', 'put']:
			return AdminEventCreateUpdateSerializer
		return AdminEventListDetailSerializer

	def get_queryset(self, *args, **kwargs):

		queryset = Event.objects.prefetch_related(
											'owner'
										).filter(
										ComplexQuery(completion_time__gt=timezone.now())
									)

		return queryset



class CompletedEventViewSet(viewsets.ModelViewSet):	

	def get_serializer_class(self):
		if self.action in ['create', 'put']:
			return AdminEventCreateUpdateSerializer
		return AdminEventListDetailSerializer

	def get_queryset(self, *args, **kwargs):

		queryset = Event.objects.prefetch_related(
											'owner'
										).filter(
										ComplexQuery(completion_time__lt=timezone.now())
									)

		return queryset






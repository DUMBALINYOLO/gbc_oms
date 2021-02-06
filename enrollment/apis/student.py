from rest_framework import viewsets, generics, permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from enrollment.models import Admission
from django.db.models import Q as CompleLookUp
from enrollment.serializers import (
							StudentAdmissionCreateUpdateSerializer,
							StudentAdmissionListDetailSerializer
						)


class StudentAdmissionViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]

	def get_serializer_class(self, *args, **kwargs):

		if self.action in ['create', 'put', 'patch', 'update']:
			return StudentAdmissionCreateUpdateSerializer
		return StudentAdmissionListDetailSerializer



	def get_queryset(self, *args, **kwargs):

		student = self.request.user
		queryset = student.application

		return queryset


	def perform_create(self, serializer, *args, **kwargs):
		return serializer.create(student=self.request.user, status='pending')

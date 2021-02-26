from rest_framework import viewsets, generics, permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from enrollment.models import Admission
from django.db.models import Q as CompleLookUp
from enrollment.serializers import (
							AdminAdmissionCreateUpdateSerializer,
							AdminAdmissionListDetailSerializer
						)



class ApplicationsViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]
	queryset = Admission.objects.all()

	def get_serializer_class(self, *args, **kwargs):

		if self.action in ['create', 'put', 'patch', 'update']:
			return AdminAdmissionCreateUpdateSerializer
		return AdminAdmissionListDetailSerializer





class PendingAdminApplicationViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]

	def get_serializer_class(self, *args, **kwargs):

		if self.action in ['create', 'put', 'patch', 'update']:
			return AdminAdmissionCreateUpdateSerializer
		return AdminAdmissionListDetailSerializer



	def get_queryset(self, *args, **kwargs):
		querset = []
		pending_applications = Admission.objects.filter(
										~CompleLookUp(status__in=['approved', 'declined', 'meeting'])
									).prefetch_related(
												'student',
												'klass'
											).order_by('id')
		for appliation in pending_applications:
			querset.append(appliation)

		return querset


class RejectedAdminAdmissionViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]

	def get_serializer_class(self, *args, **kwargs):

		if self.action in ['create', 'put', 'patch', 'update']:
			return AdminAdmissionCreateUpdateSerializer
		return AdminAdmissionListDetailSerializer



	def get_queryset(self, *args, **kwargs):
		querset = []
		rejected_applications = Admission.objects.filter(
										~CompleLookUp(status__in=['approved', 'pending', 'meeting'])
									).prefetch_related(
												'student',
												'klass'
											).order_by('id')
		for appliation in rejected_applications:
			querset.append(appliation)

		return querset



class CallForAdminAdmissionViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]

	def get_serializer_class(self, *args, **kwargs):

		if self.action in ['create', 'put', 'patch', 'update']:
			return AdminAdmissionCreateUpdateSerializer
		return AdminAdmissionListDetailSerializer



	def get_queryset(self, *args, **kwargs):
		querset = []
		meeting_applications = Admission.objects.filter(
										~CompleLookUp(status__in=['approved', 'pending', 'declined'])
									).prefetch_related(
												'student',
												'klass'
											).order_by('id')
		for appliation in meeting_applications:
			querset.append(appliation)

		return querset


class AcceptedAdminAdmissionViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]

	def get_serializer_class(self, *args, **kwargs):

		if self.action in ['create', 'put', 'patch', 'update']:
			return AdminAdmissionCreateUpdateSerializer
		return AdminAdmissionListDetailSerializer



	def get_queryset(self, *args, **kwargs):
		querset = []
		accepted_applications = Admission.objects.filter(
										~CompleLookUp(status__in=['meeting', 'pending', 'declined'])
									).prefetch_related(
												'student',
												'klass'
											).order_by('id')
		for appliation in accepted_applications:
			querset.append(appliation)

		return querset

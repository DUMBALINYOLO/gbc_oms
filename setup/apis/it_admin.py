from rest_framework import viewsets
from setup.models import (
		Institution,
		SchoolHeadOffice
	)
from setup.serializers import (
				ItInstitutionsListSerializer,
				ItInstitutionsDetailSerializer,
				ItInstitutionsCreateUpdateSerializer,
				ItSchoolHeadOfficeCreateUpdateSerializer,
				ItSchoolHeadOfficeListSerializer,
				ItSchoolHeadOfficeCreateUpdateSerializer,
				ItSchoolHeadOfficeDetailSerializer,
			)


class SchoolsItInterfaceViewSet(viewsets.ModelViewSet):

	queryset = Institution.objects.all()


	def get_serializer_class(self):
		if self.action in ['create', 'put']:
			return ItInstitutionsCreateUpdateSerializer
		elif self.action == 'retrieve':
			return ItInstitutionsDetailSerializer
		return ItInstitutionsListSerializer


class HeadOfficeItInterfaceViewSet(viewsets.ModelViewSet):

	queryset = SchoolHeadOffice.objects.all()


	def get_serializer_class(self):
		if self.action in ['create', 'put']:
			return ItSchoolHeadOfficeCreateUpdateSerializer
		elif self.action == 'retrieve':
			return ItSchoolHeadOfficeDetailSerializer
		return ItSchoolHeadOfficeListSerializer







		











from rest_framework import viewsets
from setup.models import (
		Institution,
	)
from setup.serializers import (
				InstitutionCreateUpdateSerializer,
				InstitutionListDetailSerializer,
			)


class InstitutionViewSet(viewsets.ModelViewSet):

	queryset = Institution.objects.all()


	def get_serializer_class(self):
		if self.action in ['create', 'put']:
			return InstitutionCreateUpdateSerializer
		return InstitutionListDetailSerializer










		











from rest_framework import viewsets, generics, permissions
from knox.auth import TokenAuthentication
from setup.models import (
		Institution,
	)
from setup.serializers import (
				InstitutionCreateUpdateSerializer,
				InstitutionListDetailSerializer,
			)


class InstitutionViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.IsAuthenticated,]

	queryset = Institution.objects.all()


	def get_serializer_class(self):
		if self.action in ['create', 'put']:
			return InstitutionCreateUpdateSerializer
		return InstitutionListDetailSerializer

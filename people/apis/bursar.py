from rest_framework import viewsets, generics, permissions
from people.models import (
					Student,
					Bursar,
					Parent
				)
from people.serializers import (
						BursarListDetailSerializer,
						BursarParentListDetailSerializer,
						BursarStudentListDetailSerializer
					)





class BursarStudentViewSet(viewsets.ModelViewSet):

	queryset = Student.objects.all()
	serializer_class = BursarStudentListDetailSerializer



class BursarParentViewSet(viewsets.ModelViewSet):

	queryset = Parent.objects.all()
	serializer_class = BursarParentListDetailSerializer



class BursarViewSet(viewsets.ModelViewSet):

	serializer_class = BursarListDetailSerializer


	def get_queryset(self, *args, **kwargs):
		user = self.request.user
		return user.profile





























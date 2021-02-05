from rest_framework import viewsets, generics, permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
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
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.IsAuthenticatedOrReadOnly,]
	queryset = Student.objects.all()
	serializer_class = BursarStudentListDetailSerializer



class BursarParentViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.IsAuthenticatedOrReadOnly,]
	queryset = Parent.objects.all()
	serializer_class = BursarParentListDetailSerializer



class BursarViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.IsAuthenticatedOrReadOnly,]
	serializer_class = BursarListDetailSerializer


	def get_queryset(self, *args, **kwargs):
		user = self.request.user
		return user.profile

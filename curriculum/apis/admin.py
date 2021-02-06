from rest_framework import viewsets, generics, permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from curriculum.models import (
			Curriculum,
			Subject,
			KlassStudiedSubject,
			StudentStudySubject,
	)
from curriculum.serializers import (
					CurriculumCreateUpdateSerializer,
					CurriculumListSerializer,
					SubjectCreateUpdateSerializer,
					SubjectListDetailSerializer,
					KlassStudiedSubjectCreateUpdateSerializer,
					KlassStudiedSubjectListSerializer,
					StudentStudySubjectCreateUpdateSerializer,
					StudentStudySubjectListDetailSerializer,
				)


class CurriculumViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]

	queryset = Curriculum.objects.all()


	def get_serializer_class(self, *args, **kwargs):

		if self.action in ['create', 'put', 'patch', 'update']:
			return CurriculumCreateUpdateSerializer
		return CurriculumListSerializer



class SubjectViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]



	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'put', 'patch', 'update']:
			SubjectCreateUpdateSerializer
		return SubjectListDetailSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = Subject.objects.all()
		user = self.request.user
		print(user)
		return queryset

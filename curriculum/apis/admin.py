from rest_framework import viewsets, generics, permissions
from knox.auth import TokenAuthentication
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
	permission_classes = [permissions.IsAuthenticated,]

	queryset = Curriculum.objects.all()


	def get_serializer_class(self, *args, **kwargs):

		if self.action in ['create', 'put', 'patch', 'update']:
			return CurriculumCreateUpdateSerializer
		return CurriculumListSerializer



class SubjectViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.IsAuthenticated, ]



	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'put', 'patch', 'update']:
			SubjectCreateUpdateSerializer
		return SubjectListDetailSerializer


	# def create(self, request, *args, **kwargs):
	# 	print(request.data)



	def get_queryset(self, *args, **kwargs):
		queryset = Subject.objects.all().order_by('-id')
		return queryset

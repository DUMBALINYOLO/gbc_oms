from rest_framework import viewsets 
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

	queryset = Curriculum.objects.all()


	def get_serializer_class(self, *args, **kwargs):

		if self.action in ['create', 'put', 'patch', 'update']:
			return CurriculumCreateUpdateSerializer
		return CurriculumListSerializer



class SubjectViewSet(viewsets.ModelViewSet):

	queryset = Subject.objects.all()


	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'put', 'patch', 'update']:
			SubjectCreateUpdateSerializer
		return SubjectListDetailSerializer

























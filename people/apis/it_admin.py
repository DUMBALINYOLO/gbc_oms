from rest_framework import viewsets
from people.models import Student
from people.serializers import (
						ItStudentDetailSerializer,
						ItStudentListSerializer
					)


class StudentITViewViewSet(viewsets.ModelViewSet):

	queryset = Student.objects.all()
	lookup_field='id'


	def get_serializer_class(self, *args, **kwargs):
		
		if self.action == 'list':
			return ItStudentListSerializer
		return ItStudentDetailSerializer
		
			
			
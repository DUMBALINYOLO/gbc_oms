from rest_framework import viewsets
from people.models import Student, User, StaffUser
from people.serializers import (
						ItStudentDetailSerializer,
						ItStudentListSerializer,
						StaffUserListDetailSerializer
					)


class StudentITViewViewSet(viewsets.ModelViewSet):

	queryset = Student.objects.all()
	lookup_field='id'


	def get_serializer_class(self, *args, **kwargs):
		
		if self.action == 'list':
			return ItStudentListSerializer
		return ItStudentDetailSerializer



class StaffUserViewSet(viewsets.ModelViewSet):

	queryset = StaffUser.objects.all()
	serializer_class = StaffUserListDetailSerializer

	
			
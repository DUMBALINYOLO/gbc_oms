from rest_framework import viewsets, generics, permissions, status
from rest_framework.response import Response
from knox.auth import TokenAuthentication
from enrollment.models import Admission
from django.db.models import Q as CompleLookUp
from enrollment.serializers import (
							StudentAdmissionCreateUpdateSerializer,
							StudentAdmissionListDetailSerializer
						)
from django.shortcuts import get_object_or_404
from people.models import Student, StudentProfile


def get_student(email):
	user = get_object_or_404(Student, email=email)
	student = get_object_or_404(StudentProfile, user=user)
	return student

class StudentAdmissionViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.IsAuthenticated,]

	def get_serializer_class(self, *args, **kwargs):

		if self.action in ['create', 'put', 'patch', 'update']:
			return StudentAdmissionCreateUpdateSerializer
		return StudentAdmissionListDetailSerializer


	def create(self, request, *args, **kwargs):
		draft_request_data = request.data.copy()
		draft_request_data["klass"] = draft_request_data.get('klass')
		student = get_student(email=draft_request_data.get('student'))
		draft_request_data["student"] = student.pk
		serializer = self.get_serializer(data=draft_request_data)
		serializer.is_valid(raise_exception=True)
		self.perform_create(serializer)
		headers = self.get_success_headers(serializer.data)
		return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

	# def get_object(self):
    #     movie_id = self.kwargs['pk']
    #     return self.get_queryset().filter(id=movie_id)


	def get_queryset(self, *args, **kwargs):
		queryset = Admission.objects.select_related(
											'student',
											'klass',
										)
		email = self.request.query_params.get('email', None)
		if email is not None:
			student = get_student(email=email)
			if student.application is None:
				queryset = {}
			queryset = student.application
		return queryset

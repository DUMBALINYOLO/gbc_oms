from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from klasses.models import (
				StudentClass,
				Stream,
				StudentEnrollment,
			)
from klasses.serializers import (
				AdminStreamSerializer,
				AdminStudentClassCreateUpdateSerializer,
				AdminStudentClassListDetailSerializer,
				KlassStudiedSubjectCreateUpdateSerializer,
				KlassStudiedSubjectListSerializer,
				StudentEnrollmentListDetailSerializer,
				StudentEnrollmentCreateUpdateSerializer
			)
from curriculum.models import (
			KlassStudiedSubject,
			StudentStudySubject,

	)



class StreamViewSet(viewsets.ModelViewSet):
	queryset = Stream.objects.all()
	serializer_class = AdminStreamSerializer



class StudentClassViewSet(viewsets.ModelViewSet):
	queryset = StudentClass.objects.all()


	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'put', 'patch', 'update']:
			return AdminStudentClassCreateUpdateSerializer
		return AdminStudentClassListDetailSerializer



def get_class(class_id):
	klassi = get_object_or_404(StudentClass, id=class_id)
	return klassi


class ClassStudiedSubjectsViewSet(viewsets.ModelViewSet):

	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'put', 'patch', 'update']:
			return KlassStudiedSubjectCreateUpdateSerializer
		return KlassStudiedSubjectListSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = KlassStudiedSubject.objects.all().order_by('-id')
		class_id = self.request.query_params.get('id', None)
		if class_id is not None:
			klassi = get_class(class_id=class_id)
			queryset = klassi.klassstudiedsubject_set.all().order_by('-id')
		return queryset


class ClassStudentsViewSet(viewsets.ModelViewSet):

	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'put', 'patch', 'update']:
			return StudentEnrollmentCreateUpdateSerializer
		return StudentEnrollmentListDetailSerializer


	def get_queryset(self, *args, **kwargs):
		queryset = StudentEnrollment.objects.all().order_by('-id').prefetch_related(
																	'enr_klass',
																	'stdnt',
																)

		class_id = self.request.query_params.get('id', None)
		if class_id is not None:
			klassi = get_class(class_id=class_id)
			queryset = klassi.studentenrollment_set.all().order_by('-id').prefetch_related(
																	'enr_klass',
																	'stdnt',
																)


		return queryset


class StudentEnrollmentViewSet(viewsets.ModelViewSet):
	queryset = StudentEnrollment.objects.all().order_by('-id').prefetch_related(
																	'enr_klass',
																	'stdnt',
																)

	def get_serializer_class(self, *args, **kwargs):
		if self.action in ['create', 'put', 'patch', 'update']:
			return StudentEnrollmentCreateUpdateSerializer
		return StudentEnrollmentListDetailSerializer



	
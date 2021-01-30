from rest_framework import viewsets, generics, permissions
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from people.models import (
					Student,
					StudentProfile,
					TeacherProfile,
					Teacher,
					Bursar,
					BursarProfile,
					Principal,
					PrincipalProfile,
					Parent,
					ParentProfile
				)
from attendance.models import AttendanceRecord
from grading.models import Record
from people.serializers import (
						AdminPrincipalCreateUpdateSerializer,
						AdminTeacherSerializer,
						AdminBursarCreateSerializer,
						AdminPrincipalListDetailSerializer,
						AdminTeacherListDetailSerializer,
						AdminBursarListDetailSerializer,
						AdminParentListDetailSerializer,
						AdminStudentListDetailSerializer,
						AdminStudentProfileListDetailSerializer,
						AdminParentProfileListDetailSerializer,
						AdminBursarProfileListDetailSerializer,
						AdminTeacherProfileListDetailSerializer,
						AdminPrincipalProfileListDetailSerializer,
						AttendanceSerializer,
						AdminStudentGradingRecordsListDetailSerializer,

					)


class CreateBursarAPI(generics.GenericAPIView):

	serializer_class = AdminBursarCreateSerializer

	def post(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		user = serializer.save()
		return Response({
				"user": AdminBursarCreateSerializer(user, context=self.get_serializer_context()).data
			})



class CreatePrincipalAPI(generics.GenericAPIView):

	serializer_class = AdminPrincipalCreateUpdateSerializer

	def post(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		user = serializer.save()
		return Response({
				"user": AdminBursarCreateSerializer(user, context=self.get_serializer_context()).data
			})




class CreateTeacherAPI(generics.GenericAPIView):

	serializer_class = AdminTeacherSerializer

	def post(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		user = serializer.save()
		return Response({
				"user": AdminTeacherSerializer(user, context=self.get_serializer_context()).data
			})


class AdminStudentViewSet(viewsets.ModelViewSet):

	queryset = Student.objects.all()
	serializer_class = AdminStudentListDetailSerializer


class AdminPrincipalViewSet(viewsets.ModelViewSet):

	queryset = Principal.objects.all()
	serializer_class = AdminPrincipalListDetailSerializer


class AdminParentViewSet(viewsets.ModelViewSet):

	queryset = Parent.objects.all()
	serializer_class = AdminParentListDetailSerializer


class AdminTeacherViewSet(viewsets.ModelViewSet):

	queryset = Teacher.objects.all()
	serializer_class = AdminTeacherListDetailSerializer


class AdminBursarViewSet(viewsets.ModelViewSet):

	queryset = Bursar.objects.all()
	serializer_class = AdminBursarListDetailSerializer



class BursarProfileViewSet(viewsets.ModelViewSet):

	queryset = BursarProfile.objects.all()
	serializer_class = AdminBursarProfileListDetailSerializer


class PrincipalProfileViewSet(viewsets.ModelViewSet):

	queryset = PrincipalProfile.objects.all()
	serializer_class = AdminPrincipalProfileListDetailSerializer


class TeacherProfileViewSet(viewsets.ModelViewSet):

	queryset = TeacherProfile.objects.all()
	serializer_class = AdminTeacherProfileListDetailSerializer


class ParentProfileViewSet(viewsets.ModelViewSet):

	queryset = ParentProfile.objects.all()
	serializer_class = AdminParentProfileListDetailSerializer


class StudentProfileViewSet(viewsets.ModelViewSet):

	queryset = StudentProfile.objects.all()
	serializer_class = AdminStudentProfileListDetailSerializer


def get_student(student_number):
	student = get_object_or_404(Student, id=student_number)
	student_profile = get_object_or_404(StudentProfile, user=student)
	return student_profile

class StudentAttendanceRecordsViewSet(viewsets.ModelViewSet):
	serializer_class = AttendanceSerializer

	def get_queryset(self, *args, **kwargs):
		queryset = AttendanceRecord.objects.all().order_by('-id')
		student_id = self.request.query_params.get('id', None)
		if student_id is not None:
			student = get_student(student_number=student_id)
			queryset = student.attendancerecords.all().order_by('-id')
		return queryset
	

# class StudentBehaviorRecordsViewSet(viewsets.ModelViewSet):
# 	pass

class StudentGeneralGradeTestViewSet(viewsets.ModelViewSet):
	serializer_class = AdminStudentGradingRecordsListDetailSerializer

	def get_queryset(self, *args, **kwargs):
		queryset = Record.objects.filter(
									grade__type='test'
									).order_by('-id')
		student_id = self.request.query_params.get('id', None)
		if student_id is not None:
			student = get_student(student_number=student_id)
			queryset = student.grades.filter(
									grade__type='test'
									).order_by('-id')
		return queryset

class StudentGeneralGradeExcerciseViewSet(viewsets.ModelViewSet):
	serializer_class = AdminStudentGradingRecordsListDetailSerializer

	def get_queryset(self, *args, **kwargs):
		queryset = Record.objects.filter(
									grade__type='excercise'
									).order_by('-id')
		student_id = self.request.query_params.get('id', None)
		if student_id is not None:
			student = get_student(student_number=student_id)
			queryset = student.grades.filter(
									grade__type='excercise'
									).order_by('-id')
		return queryset


class StudentGeneralGradeAssignmentViewSet(viewsets.ModelViewSet):
	serializer_class = AdminStudentGradingRecordsListDetailSerializer

	def get_queryset(self, *args, **kwargs):
		queryset = Record.objects.filter(
									grade__type='asignment'
									).order_by('-id')
		student_id = self.request.query_params.get('id', None)
		if student_id is not None:
			student = get_student(student_number=student_id)
			queryset = student.grades.filter(
									grade__type='asignment'
									).order_by('-id')
		return queryset
	

# class StudentCoursePerformanceRecordsViewSet(viewsets.ModelViewSet):
# 	pass
from rest_framework import viewsets, generics, permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
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


User = get_user_model()


def get_user(user_id):
	user = get_object_or_404(User, id=user_id)
	return user


class CreateBursarAPI(generics.GenericAPIView):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]

	serializer_class = AdminBursarCreateSerializer

	def post(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		user = serializer.save()
		return Response({
				"user": AdminBursarCreateSerializer(user, context=self.get_serializer_context()).data
			})



class CreatePrincipalAPI(generics.GenericAPIView):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]
	serializer_class = AdminPrincipalCreateUpdateSerializer

	def post(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		user = serializer.save()
		return Response({
				"user": AdminBursarCreateSerializer(user, context=self.get_serializer_context()).data
			})




class CreateTeacherAPI(generics.GenericAPIView):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]
	serializer_class = AdminTeacherSerializer

	def post(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		user = serializer.save()
		return Response({
				"user": AdminTeacherSerializer(user, context=self.get_serializer_context()).data
			})


class AdminStudentViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]

	queryset = Student.objects.all()
	serializer_class = AdminStudentListDetailSerializer


class AdminPrincipalViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]
	serializer_class = AdminPrincipalListDetailSerializer

	def get_queryset(self):
		queryset = Principal.objects.all()
		user = self.request.user
		API_key = self.request.META.get('HTTP_AUTHORIZATION')
		print(user)
		print(API_key)
		return queryset


class AdminParentViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]
	queryset = Parent.objects.all()
	serializer_class = AdminParentListDetailSerializer





class AdminTeacherViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]
	queryset = Teacher.objects.all()
	serializer_class = AdminTeacherListDetailSerializer




class AdminBursarViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]
	queryset = Bursar.objects.all()
	serializer_class = AdminBursarListDetailSerializer



class BursarProfileViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]
	queryset = BursarProfile.objects.all()
	serializer_class = AdminBursarProfileListDetailSerializer

	def get_object(self):
		queryset = self.filter_queryset(self.get_queryset())
		user_id = self.request.query_params.get('id', None)
		if user_id is not None:
			bursar = get_user(user_id=user_id)
			bursar_profile = bursar.profile
		return bursar_profile


class PrincipalProfileViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]
	queryset = PrincipalProfile.objects.all()
	serializer_class = AdminPrincipalProfileListDetailSerializer


	def get_object(self):
		queryset = self.filter_queryset(self.get_queryset())
		user_id = self.request.query_params.get('id', None)
		if user_id is not None:
			principal = get_user(user_id=user_id)
			principal_profile = principal.profile
		return principal_profile


class TeacherProfileViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]
	queryset = TeacherProfile.objects.all()
	serializer_class = AdminTeacherProfileListDetailSerializer


	# def get_object(self):
	# 	queryset = self.filter_queryset(self.get_queryset())
	# 	user_id = self.request.query_params.get('id', None)
	# 	if user_id is not None:
	# 		teacher = get_user(user_id=user_id)
	# 		teacher_profile = teacher.profile
	# 	return teacher_profile


class ParentProfileViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication)
	permission_classes = [permissions.AllowAny,]
	queryset = ParentProfile.objects.all()
	serializer_class = AdminParentProfileListDetailSerializer

	def get_object(self):
		queryset = self.filter_queryset(self.get_queryset())
		user_id = self.request.query_params.get('id', None)
		if user_id is not None:
			parent = get_user(user_id=user_id)
			parent_profile = parent.profile
		return parent_profile


class StudentProfileViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]
	queryset = StudentProfile.objects.all()
	serializer_class = AdminStudentProfileListDetailSerializer


	def get_object(self):
		queryset = self.filter_queryset(self.get_queryset())
		user_id = self.request.query_params.get('id', None)
		if user_id is not None:
			student = get_user(user_id=user_id)
			student_profile = student.profile
		return student_profile


def get_student(student_number):
	student = get_object_or_404(Student, id=student_number)
	student_profile = get_object_or_404(StudentProfile, user=student)
	return student_profile

class StudentAttendanceRecordsViewSet(viewsets.ModelViewSet):
	serializer_class = AttendanceSerializer
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]
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
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]
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
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.AllowAny,]
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
	authentication_classes = (TokenAuthentication,permissions.AllowAny,)
	permission_classes = [permissions.AllowAny,]
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

from rest_framework import viewsets, generics, permissions
from knox.auth import TokenAuthentication
from django.shortcuts import get_object_or_404
from rest_framework.decorators import action
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
	permission_classes = [permissions.IsAuthenticated,]

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
	permission_classes = [permissions.IsAuthenticated,]
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
	permission_classes = [permissions.IsAuthenticated,]
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
	permission_classes = [permissions.IsAuthenticated,]

	queryset = Student.objects.all()
	serializer_class = AdminStudentListDetailSerializer

	@action(detail=True, methods=['get', 'list'])
	def profile(self, request, pk=None):
	    student = self.get_object()
	    profile = student.profile
	    serialized_profile = AdminStudentProfileListDetailSerializer(profile)

	    return Response(serialized_profile.data)


	@action(detail=True, methods=['get', 'post', 'list'])
	def edit_profile(self, request, *args, **kwargs):
		student = self.get_object()
		profile = student.profile
		draft_request_data = request.data.copy()
		gender = draft_request_data.get('gender')
		date_of_birth = draft_request_data.get('date_of_birth')
		first_name = draft_request_data.get('first_name')
		middle_name = draft_request_data.get('middle_name')
		last_name = draft_request_data.get('last_name')
		phone_number = draft_request_data.get('phone_number')
		whatsapp_number = draft_request_data.get('whatsapp_number')
		if gender != '':
			profile.gender = gender
		if date_of_birth != '':
			profile.date_of_birth = date_of_birth
		if first_name != '':
			profile.first_name = first_name
		if middle_name != '':
			profile.middle_name = middle_name
		if last_name != '':
			profile.last_name = last_name
		if phone_number != '':
			profile.phone_number = phone_number
		if whatsapp_number != '':
			profile.whatsapp_number = whatsapp_number
		profile.save()
		serialized_profile = AdminStudentProfileListDetailSerializer(profile)
		return Response(serialized_profile.data)



class AdminPrincipalViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.IsAuthenticated,]
	serializer_class = AdminPrincipalListDetailSerializer

	def get_queryset(self):
		queryset = Principal.objects.all()
		user = self.request.user
		API_key = self.request.META.get('HTTP_AUTHORIZATION')
		return queryset

	@action(detail=True, methods=['get', 'list'])
	def profile(self, request, pk=None):
	    principal = self.get_object()
	    profile = principal.profile
	    serialized_profile = AdminPrincipalProfileListDetailSerializer(profile)

	    return Response(serialized_profile.data)


	@action(detail=True, methods=['get', 'post', 'list'])
	def edit_profile(self, request, *args, **kwargs):
		principal = self.get_object()
		profile = principal.profile
		draft_request_data = request.data.copy()
		gender = draft_request_data.get('gender')
		title = draft_request_data.get('title')
		id_number = draft_request_data.get('id_number')
		first_name = draft_request_data.get('first_name')
		middle_name = draft_request_data.get('middle_name')
		last_name = draft_request_data.get('last_name')
		phone_number = draft_request_data.get('phone_number')
		whatsapp_number = draft_request_data.get('whatsapp_number')
		if gender != '':
			profile.gender = gender
		if title != '':
			profile.title = title
		if id_number != '':
			profile.id_number = id_number
		if first_name != '':
			profile.first_name = first_name
		if middle_name != '':
			profile.middle_name = middle_name
		if last_name != '':
			profile.last_name = last_name
		if phone_number != '':
			profile.phone_number = phone_number
		if whatsapp_number != '':
			profile.whatsapp_number = whatsapp_number
		profile.save()
		serialized_profile = AdminPrincipalProfileListDetailSerializer(profile)
		return Response(serialized_profile.data)


class AdminParentViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.IsAuthenticated,]
	queryset = Parent.objects.all()
	serializer_class = AdminParentListDetailSerializer

	@action(detail=True, methods=['get', 'list'])
	def profile(self, request, pk=None):
	    parent = self.get_object()
	    profile = parent.profile
	    serialized_profile = AdminParentProfileListDetailSerializer(profile)

	    return Response(serialized_profile.data)


	@action(detail=True, methods=['get', 'post', 'list'])
	def edit_profile(self, request, *args, **kwargs):
		parent = self.get_object()
		profile = parent.profile
		draft_request_data = request.data.copy()
		gender = draft_request_data.get('gender')
		title = draft_request_data.get('title')
		id_number = draft_request_data.get('id_number')
		first_name = draft_request_data.get('first_name')
		middle_name = draft_request_data.get('middle_name')
		last_name = draft_request_data.get('last_name')
		phone_number = draft_request_data.get('phone_number')
		whatsapp_number = draft_request_data.get('whatsapp_number')
		if gender != '':
			profile.gender = gender
		if title != '':
			profile.title = title
		if id_number != '':
			profile.id_number = id_number
		if first_name != '':
			profile.first_name = first_name
		if middle_name != '':
			profile.middle_name = middle_name
		if last_name != '':
			profile.last_name = last_name
		if phone_number != '':
			profile.phone_number = phone_number
		if whatsapp_number != '':
			profile.whatsapp_number = whatsapp_number
		profile.save()
		serialized_profile = AdminParentProfileListDetailSerializer(profile)
		return Response(serialized_profile.data)



class AdminTeacherViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.IsAuthenticated,]
	queryset = Teacher.objects.all()
	serializer_class = AdminTeacherListDetailSerializer

	@action(detail=True, methods=['get', 'list'])
	def profile(self, request, pk=None):
	    teacher = self.get_object()
	    profile = teacher.profile
	    serialized_profile = AdminTeacherProfileListDetailSerializer(profile)

	    return Response(serialized_profile.data)


	@action(detail=True, methods=['get', 'post', 'list'])
	def edit_profile(self, request, *args, **kwargs):
		teacher = self.get_object()
		profile = teacher.profile
		draft_request_data = request.data.copy()
		gender = draft_request_data.get('gender')
		title = draft_request_data.get('title')
		id_number = draft_request_data.get('id_number')
		first_name = draft_request_data.get('first_name')
		middle_name = draft_request_data.get('middle_name')
		last_name = draft_request_data.get('last_name')
		phone_number = draft_request_data.get('phone_number')
		whatsapp_number = draft_request_data.get('whatsapp_number')
		if gender != '':
			profile.gender = gender
		if title != '':
			profile.title = title
		if id_number != '':
			profile.id_number = id_number
		if first_name != '':
			profile.first_name = first_name
		if middle_name != '':
			profile.middle_name = middle_name
		if last_name != '':
			profile.last_name = last_name
		if phone_number != '':
			profile.phone_number = phone_number
		if whatsapp_number != '':
			profile.whatsapp_number = whatsapp_number
		profile.save()
		serialized_profile = AdminTeacherProfileListDetailSerializer(profile)
		return Response(serialized_profile.data)


class AdminBursarViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.IsAuthenticated,]
	queryset = Bursar.objects.all()
	serializer_class = AdminBursarListDetailSerializer

	@action(detail=True, methods=['get', 'list'])
	def profile(self, request, pk=None):
	    bursar = self.get_object()
	    profile = bursar.profile
	    serialized_profile = AdminBursarProfileListDetailSerializer(profile)

	    return Response(serialized_profile.data)


	@action(detail=True, methods=['get', 'post', 'list'])
	def edit_profile(self, request, *args, **kwargs):
		bursar = self.get_object()
		profile = bursar.profile
		draft_request_data = request.data.copy()
		gender = draft_request_data.get('gender')
		title = draft_request_data.get('title')
		id_number = draft_request_data.get('id_number')
		first_name = draft_request_data.get('first_name')
		middle_name = draft_request_data.get('middle_name')
		last_name = draft_request_data.get('last_name')
		phone_number = draft_request_data.get('phone_number')
		whatsapp_number = draft_request_data.get('whatsapp_number')
		if gender != '':
			profile.gender = gender
		if title != '':
			profile.title = title
		if id_number != '':
			profile.id_number = id_number
		if first_name != '':
			profile.first_name = first_name
		if middle_name != '':
			profile.middle_name = middle_name
		if last_name != '':
			profile.last_name = last_name
		if phone_number != '':
			profile.phone_number = phone_number
		if whatsapp_number != '':
			profile.whatsapp_number = whatsapp_number
		profile.save()
		serialized_profile = AdminBursarProfileListDetailSerializer(profile)
		return Response(serialized_profile.data)

class BursarProfileViewSet(viewsets.ModelViewSet):
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.IsAuthenticated,]
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
	permission_classes = [permissions.IsAuthenticated,]
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
	permission_classes = [permissions.IsAuthenticated,]
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
	permission_classes = [permissions.IsAuthenticated,]
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
	permission_classes = [permissions.IsAuthenticated,]
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
	permission_classes = [permissions.IsAuthenticated,]


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
	permission_classes = [permissions.IsAuthenticated,]
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
	permission_classes = [permissions.IsAuthenticated, ]
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
	authentication_classes = (TokenAuthentication,)
	permission_classes = [permissions.IsAuthenticated,]
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

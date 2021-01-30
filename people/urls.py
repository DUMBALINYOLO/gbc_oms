from rest_framework.routers import DefaultRouter
from people.apis import (
				CreateStudentAPI,
				CreateBursarAPI,
				CreatePrincipalAPI,
				CreateTeacherAPI,
				AdminStudentViewSet,
				AdminPrincipalViewSet,
				AdminParentViewSet,
				AdminTeacherViewSet,
				AdminBursarViewSet,
				BursarStudentViewSet,
				BursarParentViewSet,
				StudentProfileViewSet,
				ParentProfileViewSet,
				TeacherProfileViewSet,
				PrincipalProfileViewSet,
				BursarProfileViewSet,
				StudentAttendanceRecordsViewSet,
				StudentGeneralGradeTestViewSet,
				StudentGeneralGradeExcerciseViewSet,
				StudentGeneralGradeAssignmentViewSet,
				# LoginAPI,
				# UserAPI,
				UserAPI,
				ResetAPI,
				ChangePassAPI,
				ForgotPassAPI,
				LoginView
			)
from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

router = DefaultRouter()


router.register('admin-students', AdminStudentViewSet, basename='admin-students')
router.register('admin-principals', AdminPrincipalViewSet, basename='admin-principals')
router.register('admin-teachers', AdminTeacherViewSet, basename='admin-teachers')
router.register('admin-bursars', AdminBursarViewSet, basename='admin-bursars')
router.register('admin-parents', AdminParentViewSet, basename='admin-parents')
router.register('bursar-parents', BursarParentViewSet, basename='bursar-parents')
router.register('bursar-students', BursarStudentViewSet, basename='bursar-students')
router.register('bursar-profiles', BursarProfileViewSet, basename='bursar-profiles')
router.register('principal-profiles', PrincipalProfileViewSet, basename='principal-profiles')
router.register('teacher-profiles', TeacherProfileViewSet, basename='teacher-profiles')
router.register('parent-profiles', ParentProfileViewSet, basename='parent-profiles')
router.register('student-profiles', StudentProfileViewSet, basename='student-profiles')
router.register('attendance-records', StudentAttendanceRecordsViewSet, basename='attendance-records')
router.register('test-records', StudentGeneralGradeTestViewSet, basename='test-records')
router.register('excercise-records', StudentGeneralGradeExcerciseViewSet, basename='excercise-records')
router.register('assignment-records', StudentGeneralGradeAssignmentViewSet, basename='assignment-records')

urlpatterns = [
	path('create-student/', CreateStudentAPI.as_view()),
	path('create-bursar/', CreateBursarAPI.as_view()),
	path('create-principal/', CreatePrincipalAPI.as_view()),
	path('create-teacher/', CreateTeacherAPI.as_view()),
	path('login/', LoginView.as_view()),
	path('user/', UserAPI.as_view()),
	path('reset-password/', ResetAPI.as_view()),
	path('change-password/', ChangePassAPI.as_view()),
	path('forgot-password/', ForgotPassAPI.as_view()),
	path('refresh/', TokenRefreshView.as_view(), name='refresh'),
] + router.urls








from rest_framework.routers import DefaultRouter
from .apis import (
		AdminAttendanceViewSet,
		StudentAttendanceViewSet,
		TeacherAttendanceViewSet,
		AdminAttendanceRecordViewSet
	)

router = DefaultRouter()

router.register(r'admin-attendances', AdminAttendanceViewSet, basename='admin-attendances')
router.register(r'teacher-attendances', TeacherAttendanceViewSet, basename='teacher-attendances')
router.register(r'student-attendances', StudentAttendanceViewSet, basename='student-attendances')
router.register(r'student-attendance-records', AdminAttendanceRecordViewSet, basename='student-attendance-records')


urlpatterns = router.urls





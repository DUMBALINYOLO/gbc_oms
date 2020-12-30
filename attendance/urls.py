from rest_framework.routers import DefaultRouter
from .apis import (
		AdminAttendanceViewSet,
		StudentAttendanceViewSet,
		TeacherAttendanceViewSet
	)

router = DefaultRouter()

router.register(r'admin-attendances', AdminAttendanceViewSet, basename='admin-attendances')
router.register(r'teacher-attendances', TeacherAttendanceViewSet, basename='teacher-attendances')
router.register(r'student-attendances', StudentAttendanceViewSet, basename='student-attendances')


urlpatterns = router.urls



from rest_framework.routers import DefaultRouter
from .apis import (
		StreamViewSet,
		StudentClassViewSet,
		ClassStudiedSubjectsViewSet,
		ClassStudentsViewSet,
		StudentEnrollmentViewSet,
		UnEnrolledStudentViewSet,
	)

router = DefaultRouter()

router.register(r'classes', StudentClassViewSet, basename='classes')
router.register(r'class-streams', StreamViewSet, basename='class-streams')
router.register(r'class-subjects', ClassStudiedSubjectsViewSet, basename='class-subjects')
router.register(r'class-students', ClassStudentsViewSet, basename='class-students')
router.register(r'enrollments', StudentEnrollmentViewSet, basename='enrollments')
router.register(r'unenrolled-students', UnEnrolledStudentViewSet, basename='unenrolled-students')


urlpatterns = router.urls

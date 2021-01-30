from rest_framework.routers import DefaultRouter
from .apis import (
		StreamViewSet,
		StudentClassViewSet,
		ClassStudiedSubjectsViewSet,
		ClassStudentsViewSet,
		StudentEnrollmentViewSet,
	)

router = DefaultRouter()

router.register(r'classes', StudentClassViewSet, basename='classes')
router.register(r'class-streams', StreamViewSet, basename='class-streams')
router.register(r'class-subjects', ClassStudiedSubjectsViewSet, basename='class-subjects')
router.register(r'class-students', ClassStudentsViewSet, basename='class-students')
router.register(r'enrollments', StudentEnrollmentViewSet, basename='enrollments')



urlpatterns = router.urls
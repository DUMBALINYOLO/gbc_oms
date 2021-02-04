from rest_framework.routers import DefaultRouter
from django.urls import path
from .apis import (
			CurriculumViewSet,
			SubjectViewSet,
			CourseCountAPIView,
	)


router = DefaultRouter()

router.register(r'subjects', SubjectViewSet, basename='subjects')
router.register(r'curriculums', CurriculumViewSet, basename='curriculums')

urlpatterns = [
	path('course-counts/', CourseCountAPIView.as_view(), name='course-counts'),

]+router.urls

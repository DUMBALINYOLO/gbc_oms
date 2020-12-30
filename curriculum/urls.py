from rest_framework.routers import DefaultRouter
from .apis import (
			CurriculumViewSet,
			SubjectViewSet
	)


router = DefaultRouter()

router.register(r'subjects', SubjectViewSet, basename='subjects')
router.register(r'curriculums', CurriculumViewSet, basename='curriculums')

urlpatterns = router.urls

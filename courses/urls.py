from rest_framework.routers import DefaultRouter
from courses.apis import (
		CourseItViewViewSet,
		ItTopicViewViewSet,
		ItSubtopicViewViewSet,
		ItStudyNoteViewViewSet,
		ItImageViewViewSet,
		ItVideoViewViewSet,
		ItNotesViewViewSet
	)


router = DefaultRouter()

router.register('courses-it-view', CourseItViewViewSet, basename='courses-it-view')
router.register('topics-it-view', ItTopicViewViewSet, basename='topics-it-view')
router.register('subtopics-it-view', ItSubtopicViewViewSet, basename='subtopics-it-view')
router.register('notes-it-view', ItStudyNoteViewViewSet, basename='notes-it-view')
router.register('innernotes-it-view', ItNotesViewViewSet, basename='innernotes-it-view')
router.register('images-it-view', ItImageViewViewSet, basename='images-it-view')
router.register('videos-it-view', ItVideoViewViewSet, basename='videos-it-view')

urlpatterns = router.urls


from rest_framework.routers import DefaultRouter
from courses.apis import (
		AdminUpcomingCourseViewSet,
		AdminOngoingCourseViewSet,
		AdminFinishedCourseViewSet,
		AdminInactiveCourseViewSet,
		AdminTopicViewSet,
		AdminReviewViewSet,
		AdminTopicViewSet,
		AdminSubTopicViewSet,
		AdminTopicObjectivesViewSet,
		AdminTopicGuidelineViewSet,
		AdminSubTopicViewSet,
		AdminStudyNoteViewSet,
		AdminImageViewSet,
		AdminNoteViewSet,
		AdminFileViewSet,
		AdminVideoViewSet,
		AdminReferenceViewSet,
		AdminAuthorViewSet,
		AdminPublisherCityViewSet,
		AdminPublisherViewSet,
		StudentCourseEnrollementViewSet,

	)


router = DefaultRouter()

router.register('admin-upcoming-courses', AdminUpcomingCourseViewSet, basename='admin-upcoming-courses')
router.register('admin-ongoing-courses', AdminOngoingCourseViewSet, basename='admin-ongoing-courses')
router.register('admin-finished-courses', AdminFinishedCourseViewSet, basename='admin-finished-courses')
router.register('admin-inactive-courses', AdminInactiveCourseViewSet, basename='admin-inactive-courses')
router.register('admin-topics', AdminTopicViewSet, basename='admin-topics')
router.register('admin-reviews', AdminReviewViewSet, basename='admin-reviews')
router.register('admin-subtopics',AdminSubTopicViewSet, basename='admin-subtopics')
router.register('admin-topic-objectives', AdminTopicObjectivesViewSet, basename='admin-topic-objectives')
router.register('admin-topic-guidelines', AdminTopicGuidelineViewSet, basename='admin-topic-guidelines')
router.register('admin-study-notes', AdminStudyNoteViewSet, basename='admin-study-notes')
router.register('admin-study-notes-images', AdminImageViewSet, basename='admin-study-notes-images')
router.register('admin-study-notes-notes', AdminNoteViewSet, basename='admin-study-notes-notes')
router.register('admin-study-notes-files', AdminFileViewSet, basename='admin-study-notes-files')
router.register('admin-study-notes-videos', AdminVideoViewSet, basename='admin-study-notes-videos')
router.register('admin-study-notes-references', AdminReferenceViewSet, basename='admin-study-notes-references')
router.register('admin-authors', AdminAuthorViewSet, basename='admin-authors')
router.register('admin-publisher-cities', AdminPublisherCityViewSet, basename='admin-publisher-cities')
router.register('admin-publishers', AdminPublisherViewSet, basename='admin-publishers')
router.register('student-course-enrollments', StudentCourseEnrollementViewSet, basename='student-course-enrollments')

urlpatterns = router.urls

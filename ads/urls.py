from rest_framework.routers import DefaultRouter
from .views import (
    UpcomingCourseOfferedViewSet,
    OngoingCourseOfferedViewSet,
    CourseExitProfileViewSet,
    CourseTopicViewSet,
    CourseObjectiveViewSet,
)


router = DefaultRouter()

router.register('upcoming-offered-courses',  UpcomingCourseOfferedViewSet, basename='upcoming-offered-courses')
router.register('ongoing-offered-courses',  OngoingCourseOfferedViewSet, basename='ongoing-offered-courses')
router.register('exit-profiles',  CourseExitProfileViewSet, basename='exit-profiles')
router.register('course-topics',  CourseTopicViewSet, basename='course-topics')
router.register('course-objectives',  CourseObjectiveViewSet, basename='course-objectives')


urlpatterns = router.urls

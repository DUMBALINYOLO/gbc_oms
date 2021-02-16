from rest_framework.routers import DefaultRouter
from .views import AdminCourseOfferedViewSet


router = DefaultRouter()

router.register('course-adverts', AdminCourseOfferedViewSet, basename='course-adverts')

urlpatterns = router.urls

from rest_framework.routers import DefaultRouter
from .apis import NewsLetterViewSet

router = DefaultRouter()

router.register('newsletters', NewsLetterViewSet, basename='newsletters')

urlpatterns = router.urls

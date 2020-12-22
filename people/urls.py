from rest_framework.routers import DefaultRouter
from people.apis import (
				StudentITViewViewSet,
			)

router = DefaultRouter()

router.register('students-it-view', StudentITViewViewSet, basename='students-it-view')

urlpatterns = router.urls


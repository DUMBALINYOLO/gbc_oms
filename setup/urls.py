from rest_framework import routers
from django.urls import path
from setup.apis import (
				InstitutionViewSet

			)



router = routers.DefaultRouter()

router.register(r'school-profile', InstitutionViewSet, basename='schools-profile')



urlpatterns = router.urls


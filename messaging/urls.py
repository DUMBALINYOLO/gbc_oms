from rest_framework.routers import DefaultRouter
from messaging.apis import (
            EnquiryViewSet,
        )


router = DefaultRouter()

router.register(r'enquiries', EnquiryViewSet, basename='enquiries')

urlpatterns = router.urls

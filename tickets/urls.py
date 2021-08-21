from rest_framework.routers import DefaultRouter
from .apis import (
    OpenTicketViewSet,
    CloseTicketViewSet,
    ReOpenedTicketViewSet,
    CustomerClosedTicketViewSet,
    CustomerOpenTicketViewSet,
    CustomerReOpenedTicketViewSet,
    AssignedClosedTicketViewSet,
    AssignedOpenTicketViewSet,
    AssignedReOpenedTicketViewSet,
    CommentViewSet
)


router = DefaultRouter()


router.register(r'comments', OpenTicketViewSet, basename='comments')
router.register(r'open-tickets', OpenTicketViewSet, basename='open-tickets')
router.register(r'customer-open-tickets', CustomerOpenTicketViewSet, basename='customer-open-tickets')
router.register(r'assigned-open-tickets', AssignedOpenTicketViewSet, basename='assigned-open-tickets')
router.register(r'closed-tickets', CloseTicketViewSet, basename='closed-tickets')
router.register(r'customer-closed-tickets', CustomerClosedTicketViewSet, basename='customer-closed-tickets')
router.register(r'assigned-closed-tickets', AssignedClosedTicketViewSet, basename='assigned-closed-tickets')
router.register(r'reopened-tickets', ReOpenedTicketViewSet, basename='reopened-tickets')
router.register(r'customer-reopened-tickets', CustomerReOpenedTicketViewSet, basename='customer-reopened-tickets')
router.register(r'assigned-reopened-tickets', AssignedReOpenedTicketViewSet, basename='assigned-reopened-tickets')



urlpatterns = router.urls

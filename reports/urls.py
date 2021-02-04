from django.urls import path
from .views import StatsCounterAPIView

urlpatterns = [
    path('stats-counters', StatsCounterAPIView.as_view(), name='course-counts'),
]

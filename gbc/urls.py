
from django.contrib import admin
from django.urls import path, re_path, include
from django.conf import settings
from django.conf.urls.static import static
from .views import index


urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'api/accounting/', include('accounts.urls')),
    re_path(r'api/attendance/', include('attendance.urls')),
    re_path(r'api/curriculum/', include('curriculum.urls')),
    re_path(r'api/admissions/', include('enrollment.urls')),
    re_path(r'api/events/', include('event.urls')),
    re_path(r'api/fees/', include('fees.urls')),
    re_path(r'api/grading/', include('grading.urls')),
    re_path(r'api/school/', include('setup.urls')),
    re_path(r'api/basedata/', include('basedata.urls')),
    re_path(r'api/people/', include('people.urls')),
    re_path(r'api/classes/', include('klasses.urls')),
    re_path(r'api/courses/', include('courses.urls')),
    re_path(r'api/reports/', include('reports.urls')),
    re_path(r'api/adverts/', include('adverts.urls')),
    path('', index),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

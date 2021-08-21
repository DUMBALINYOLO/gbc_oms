from django.contrib import admin
from .models import CourseOffered, CourseTopic, CourseExitProfile, CourseObjective

# Register your models here.
admin.site.register(CourseOffered)
admin.site.register(CourseTopic)
admin.site.register(CourseExitProfile)
admin.site.register(CourseObjective)
from django.contrib import admin

from .models import (
				Curriculum,
				Subject, 
				KlassStudiedSubject, 
				StudentStudySubject,
				AddCourseToSubject
			)



# Register your models here.

admin.site.register(Curriculum)
admin.site.register(Subject)
admin.site.register(KlassStudiedSubject)
admin.site.register(StudentStudySubject)
admin.site.register(AddCourseToSubject)
from django.contrib import admin
from .models import (
			CourseGrade, 
			GradeRecord,
			GeneralGrade,
			Record,
			
		)

# Register your models here.
admin.site.register(CourseGrade)
admin.site.register(GradeRecord)
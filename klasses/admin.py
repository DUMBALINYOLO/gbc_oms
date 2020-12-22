from django.contrib import admin
from klasses.models import (
					StudentClass, 
					Stream,
					StudentEnrollment,
				)

# Register your models here.
admin.site.register(Stream)
admin.site.register(StudentEnrollment)
admin.site.register(StudentClass)

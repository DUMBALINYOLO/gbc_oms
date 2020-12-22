from django.contrib import admin
from klasses.models import (
					StudentClass, 
					Stream,
				)

# Register your models here.
admin.site.register(Stream)
admin.site.register(StudentClass)

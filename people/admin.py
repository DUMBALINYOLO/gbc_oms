from django.contrib import admin
from people.models import (
					Student, 
					StaffUser,
					Parent,
				)

# Register your models here.

admin.site.register(Student)
admin.site.register(StaffUser)

admin.site.register(Parent)

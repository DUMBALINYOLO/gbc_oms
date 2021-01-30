from django.contrib import admin
from .models import (
			Student,
			StudentProfile,
			Parent,
			ParentProfile,
			Teacher,
			TeacherProfile,
			Principal,
			PrincipalProfile,
			Bursar, 
			BursarProfile,
			User,

	)


# Register your models here.

admin.site.register(Student)
admin.site.register(StudentProfile)
admin.site.register(Parent)
admin.site.register(ParentProfile)
admin.site.register(Principal)
admin.site.register(PrincipalProfile)
admin.site.register(BursarProfile)
admin.site.register(Bursar)
admin.site.register(Teacher)
admin.site.register(TeacherProfile)
admin.site.register(User)

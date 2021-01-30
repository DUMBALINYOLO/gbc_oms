from django.db.models.signals import post_save
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

	)



def create_student_profile(sender, instance, created, **kwargs):
	if created:
			StudentProfile.objects.create(user=instance)

def create_bursar_profile(sender, instance, created, **kwargs):
	if created:
			BursarProfile.objects.create(user=instance)

def create_parent_profile(sender, instance, created, **kwargs):
	if created:
			ParentProfile.objects.create(user=instance)


def create_teacher_profile(sender, instance, created, **kwargs):
	if created:
			TeacherProfile.objects.create(user=instance)


def create_principal_profile(sender, instance, created, **kwargs):
	if created:
			PrincipalProfile.objects.create(user=instance)


post_save.connect(create_student_profile, sender=Student)
post_save.connect(create_parent_profile, sender=Parent)
post_save.connect(create_teacher_profile, sender=Teacher)
post_save.connect(create_principal_profile, sender=Principal)
post_save.connect(create_bursar_profile, sender=Bursar)



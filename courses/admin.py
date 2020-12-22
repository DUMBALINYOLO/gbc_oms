from django.contrib import admin
from courses.models import (
						Text, 
						File, 
						Image, 
						Video, 
						StudyNote, 
						Course, 
						TopicObjective, 
						TopicGuideLine,
						SubTopic,
						Topic,
						AddTextToNote,
						AddImageToNote,
						AddFileToNote,
						AddVideoToNote,
						AddBibliography,
						StudentCourseEnrollment,
						AddCourseToSchool,
						Author,
						PublisherCity,
						Publisher,
						ReferrenceSource


					)

# Register your models here.
# admin.register.site(ItemBase)
admin.site.register(Text)
admin.site.register(File)
admin.site.register(Image)
admin.site.register(Video)
admin.site.register(StudyNote)

admin.site.register(TopicObjective)
admin.site.register(TopicGuideLine)
admin.site.register(Topic)
admin.site.register(Course)
admin.site.register(SubTopic)
admin.site.register(AddBibliography)
admin.site.register(AddTextToNote)
admin.site.register(AddImageToNote)
admin.site.register(AddFileToNote)
admin.site.register(AddVideoToNote)
admin.site.register(StudentCourseEnrollment)
admin.site.register(AddCourseToSchool)
















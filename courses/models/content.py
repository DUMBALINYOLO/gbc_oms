from django.db import models
from basedata.models import SoftDeletionModel
from basedata.constants import (
			STUDY_NOTES_STATUS_CHOICES,
			STUDY_NOTES_APPROVAL_STATUS_CHOICES
		)



class ItemBase(SoftDeletionModel):
	title = models.CharField(max_length=250)
	created = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)
	note_id = models.IntegerField(blank=True, null=True)



	class Meta:
		abstract = True

	def __str__(self):
		return self.title

class Text(ItemBase):
    content = models.TextField()



class File(ItemBase):
    file = models.FileField(upload_to='files/%Y/%m/%d/')




class Image(ItemBase):
    file = models.ImageField(upload_to='photos/%Y/%m/%d/')

class Video(ItemBase):
    url = models.URLField()



class StudyNote(SoftDeletionModel):
	title = models.CharField(max_length=300)
	status = models.CharField(max_length=300, choices=STUDY_NOTES_STATUS_CHOICES)
	approval_status = models.CharField(max_length=300, choices=STUDY_NOTES_APPROVAL_STATUS_CHOICES)
	note = models.TextField()
	references = models.ManyToManyField(
	                'courses.ReferrenceSource',
	                blank=True,
	            )
	videos = models.ManyToManyField(
	                'Video',
	                blank=True,
	            )
	files = models.ManyToManyField(
	                'File',
	                blank=True,
	            )
	notes = models.ManyToManyField(
	                'Text',
	                blank=True,
	            )
	images = models.ManyToManyField(
	                'Image',
	                blank=True,
	            )
	subtopic_id = models.IntegerField(blank=True, null=True)



	def __str__(self):
		return self.title

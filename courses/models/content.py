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



    class Meta:
        abstract = True

    def __str__(self):
        return self.title

class Text(ItemBase):
    content = models.TextField()

    


class File(ItemBase):
    file = models.FileField(upload_to='files/%Y/%m/%d/')
    



class Image(ItemBase):
    file = models.FileField(upload_to='photos/%Y/%m/%d/')
    
class Video(ItemBase):
    url = models.URLField()
    


class StudyNote(SoftDeletionModel):
    title = models.CharField(max_length=300)
    topic = models.ForeignKey(
    					'courses.SubTopic',
    					null=True,
    					on_delete=models.SET_NULL,
    					related_name='notes'
    				)
    status = models.CharField(max_length=300, choices=STUDY_NOTES_STATUS_CHOICES)
    approval_status = models.CharField(max_length=300, choices=STUDY_NOTES_APPROVAL_STATUS_CHOICES)
    note = models.TextField()
    references = models.ManyToManyField(
                        'courses.ReferrenceSource',
                        through='AddBibliography'
                    )
    videos = models.ManyToManyField(
                        'Video',
                        through='AddVideoToNote'
                    )
    files = models.ManyToManyField(
                        'File',
                        through='AddFileToNote'
                    )
    notes = models.ManyToManyField(
                        'Text',
                        through='AddTextToNote'
                    )
    images = models.ManyToManyField(
                        'Image',
                        through='AddImageToNote'
                    )



    def __str__(self):
        return self.title


    # @property
    # def videos(self):
    #     return self.videos.all()

    # @property
    # def notes(self):
    #     return self.notes.all()

    # @property
    # def files(self):
    #     return self.files.all()

    # @property
    # def images(self):
    #     return self.images.all()


    # @property
    # def references(self):
    #     return self.references.all()



class AddTextToNote(SoftDeletionModel):
    note = models.ForeignKey(
                    'StudyNote',
                    blank=True,
                    null=True,
                    on_delete=models.SET_NULL

                )
    text = models.ForeignKey(
                    'Text',
                    blank=True,
                    null=True,
                    on_delete=models.SET_NULL

                )
    timestamp = models.DateTimeField(auto_now_add=True)


    class Meta:
        unique_together = [['note', 'text']]


    def __str__(self):

        return f'{self.text.__str__()} {self.note.__str__()}'


class AddImageToNote(SoftDeletionModel):
    note = models.ForeignKey(
                    'StudyNote',
                    blank=True,
                    null=True,
                    on_delete=models.SET_NULL

                )
    image = models.ForeignKey(
                    'Image',
                    blank=True,
                    null=True,
                    on_delete=models.SET_NULL

                )
    timestamp = models.DateTimeField(auto_now_add=True)


    class Meta:
        unique_together = [['note', 'image']]


    def __str__(self):

        return f'{self.image.__str__()} {self.note.__str__()}'



class AddFileToNote(SoftDeletionModel):
    note = models.ForeignKey(
                    'StudyNote',
                    blank=True,
                    null=True,
                    on_delete=models.SET_NULL

                )
    file = models.ForeignKey(
                    'File',
                    blank=True,
                    null=True,
                    on_delete=models.SET_NULL

                )
    timestamp = models.DateTimeField(auto_now_add=True)


    class Meta:
        unique_together = [['note', 'file']]


    def __str__(self):

        return f'{self.file.__str__()} {self.note.__str__()}'



class AddVideoToNote(SoftDeletionModel):
    note = models.ForeignKey(
                    'StudyNote',
                    blank=True,
                    null=True,
                    on_delete=models.SET_NULL

                )
    video = models.ForeignKey(
                    'Video',
                    blank=True,
                    null=True,
                    on_delete=models.SET_NULL

                )
    timestamp = models.DateTimeField(auto_now_add=True)


    class Meta:
        unique_together = [['note', 'video']]


    def __str__(self):

        return f'{self.video.__str__()} {self.note.__str__()}'


class AddBibliography(SoftDeletionModel):
    note = models.ForeignKey(
                    'StudyNote',
                    blank=True,
                    null=True,
                    on_delete=models.SET_NULL

                )
    reference = models.ForeignKey(
                    'courses.ReferrenceSource',
                    blank=True,
                    null=True,
                    on_delete=models.SET_NULL

                )
    timestamp = models.DateTimeField(auto_now_add=True)


    class Meta:
        unique_together = [['note', 'reference']]


    def __str__(self):

        return f'{self.reference.__str__()} {self.note.__str__()}'






import uuid
from django.db import models
from django.db.models import Avg
from django.conf import settings
from basedata.models import SoftDeletionModel

from basedata.constants import (
                    BOOLEAN_CHOICES,
                    LANGUAGE_CHOICES,
                    COURSES_FORMAT_CHOICES,
                    NUMBER_OF_SECTIONS_CHOICES,
                    COURSE_HIDDEN_CHOICES,
                    COURSE_LAYOUT_CHOICES,
                    NUMBER_OF_ANNOUNCEMENTS_CHOICES,
                    FILES_UPLOAD_CHOICES,
                    COURSE_GROUPS_CHOICES,
                    COURSE_VISIBILITY_CHOICES,
                    COURSE_RATING_CHOICES,
                    COURSES_STATUS_CHOICES,
                    CLASS_STREAM_CHOICES,

                )

# import numpy as np



class Course(SoftDeletionModel):
    owners = models.ManyToManyField(
                    'setup.Institution', 
                    related_name='owned_courses',
                    through= 'courses.AddCourseToSchool'

                )
    students = models.ManyToManyField(
                        'people.Student',
                        through = 'courses.StudentCourseEnrollment',
                        related_name='taken_courses'

                    )
    stream  = models.CharField(
                    choices=CLASS_STREAM_CHOICES,
                    max_length=289
                ) 
    full_name = models.CharField(max_length=500)
    short_name = models.CharField(max_length=100)
    course_visibility= models.CharField(max_length=500, choices=COURSE_VISIBILITY_CHOICES)
    status = models.CharField(max_length=300, choices=COURSES_STATUS_CHOICES)
    overview = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    course_number = models.CharField(max_length=200, unique=True, blank=True, null=True)
    description = models.TextField()
    # topics_format = models.CharField(max_length=200, choices=COURSES_FORMAT_CHOICES)
    # number_of_sections = models.CharField(max_length=200, choices=NUMBER_OF_SECTIONS_CHOICES)
    # hidden_sections = models.CharField(max_length=200, choices=COURSE_HIDDEN_CHOICES)
    # course_layout = models.CharField(max_length=200, choices=COURSE_LAYOUT_CHOICES)
    # force_language  = models.CharField(max_length=200, choices=LANGUAGE_CHOICES)
    # number_of_announcements = models.CharField(max_length=200, choices=NUMBER_OF_ANNOUNCEMENTS_CHOICES)
    # show_gradebook_to_students = models.CharField(max_length=200, choices=BOOLEAN_CHOICES)
    # show_activity_reports = models.CharField(max_length=200, choices=BOOLEAN_CHOICES)
    # maximum_upload_size = models.CharField(max_length=200, choices=FILES_UPLOAD_CHOICES)
    # enable_completion_tracking = models.CharField(max_length=200, choices=BOOLEAN_CHOICES)
    # group_mode = models.CharField(max_length=200, choices=COURSE_GROUPS_CHOICES)
    # force_group_mode = models.BooleanField(default=False)
    # default_grouping = models.BooleanField(default=False)
    # your_word_for_administrator = models.CharField(max_length=200, blank=True, null=True)
    # your_word_for_teacher = models.CharField(max_length=200, blank=True, null=True)
    # your_word_for_parent = models.CharField(max_length=200, blank=True, null=True)
    # your_word_for_student = models.CharField(max_length=200, blank=True, null=True)
    # your_word_for_course_designer = models.CharField(max_length=200, blank=True, null=True)
    # your_word_for_manager = models.CharField(max_length=200, blank=True, null=True)
    # your_word_for_course_creator = models.CharField(max_length=200, blank=True, null=True)
    # your_word_for_guest = models.CharField(max_length=200, blank=True, null=True)
    # your_word_for_non_editing_teacher = models.CharField(max_length=200, blank=True, null=True)
    # your_word_for_authenticated_user = models.CharField(max_length=200, blank=True, null=True)




    # tags


    def save(self, *args, **kwargs):
        if not self.course_number:
            self.course_number = str(uuid.uuid4()).replace("-", '').upper()[:15]
        super(Course, self).save(*args, **kwargs)


    class Meta:
        ordering = ('-created',)

    def __str__(self):
        return self.full_name



    def average_rating(self):
        # all_ratings = map(lambda x: x.rating, self.reviews.all())
        # return np.mean(all_ratings)
        return self.reviews.aggregate(Avg('rating'))['rating__avg']

    @property
    def reviews(self):
        return self.all()

    @property
    def topics(self):
        return self.all()


    @property
    def images(self):
        images = []
        topics = self.topics.all()
        for topic in topics:
            for suptopic in topic.subtopics.all():
                for note in suptopic.notes.all():
                    for image in note.images.all():
                        images.append(image)
        return images

    @property
    def videos(self):
        videos = []
        topics = self.topics.all()
        for topic in topics:
            for suptopic in topic.subtopics.all():
                for note in suptopic.notes.all():
                    for video in note.videos.all():
                        videos.append(video)
        return videos


    @property
    def notes(self):
        notes = []
        topics = self.topics.all()
        for topic in topics:
            for suptopic in topic.subtopics.all():
                for note in suptopic.notes.all():
                    for note in note.notes.all():
                        notes.append(note)
        return notes

    @property
    def files(self):
        files = []
        topics = self.topics.all()
        for topic in topics:
            for suptopic in topic.subtopics.all():
                for note in suptopic.notes.all():
                    for file in note.files.all():
                        files.append(file)
        return files

    @property
    def references(self):
        bibliography = []
        topics = self.topics.all()
        for topic in topics:
            for suptopic in topic.subtopics.all():
                for note in suptopic.notes.all():
                    for refr in note.references.all():
                        bibliography.append(refr)
        return bibliography




class TopicObjective(SoftDeletionModel):
    name = models.CharField(max_length=300)
    description = models.TextField(blank=False)


    def __str__(self):
        return self.name


class AddTopicObjective(SoftDeletionModel):
    objective = models.ForeignKey(
                        'TopicObjective',
                        on_delete=models.SET_NULL,
                        blank =True,
                        null = True,

                    )
    topic = models.ForeignKey(
                        'Topic',
                        on_delete=models.SET_NULL,
                        blank =True,
                        null = True,
                        
                    )
    timestamp = models.DateTimeField(max_length=78)

    class Meta:
        unique_together = [['objective', 'topic']]

    def __str__(self):
        return f'{self.objective} {self.topic}'


class TopicGuideLine(SoftDeletionModel):
    name = models.CharField(max_length=300)
    description = models.TextField(blank=False)


    def __str__(self):
        return self.name



class AddTopicGuideline(SoftDeletionModel):
    guideline = models.ForeignKey(
                        'TopicGuideLine',
                        on_delete=models.SET_NULL,
                        blank =True,
                        null = True,

                    )
    topic = models.ForeignKey(
                        'Topic',
                        on_delete=models.SET_NULL,
                        blank =True,
                        null = True,
                        
                    )
    timestamp = models.DateTimeField(max_length=78)


    class Meta:
        unique_together = [['guideline', 'topic']]

    def __str__(self):
        return f'{self.objective} {self.topic}'




class Topic(SoftDeletionModel):
    title = models.CharField(max_length=300)
    course = models.ForeignKey(
                        'Course', 
                        on_delete=models.SET_NULL, 
                        related_name='topics',
                        null=True
                    )
    content_overview= models.TextField(blank=False)
    assessment_overview= models.TextField(blank=False)
    objectives = models.ManyToManyField(
                            'TopicObjective',
                            through = 'AddTopicObjective'
                            
                        )
    guidelines = models.ManyToManyField(
                            'TopicGuideLine',
                            through='AddTopicGuideline'
                        )


    def __str__(self):
        return self.title

    @property
    def subtopics(self):
        return self.subtopics.all()

    @property
    def subtopics_count(self):
        return self.subtopics.count()
    


#nested
class SubTopic(SoftDeletionModel):

    title = models.CharField(max_length=300)
    topic = models.ForeignKey(
                        'Topic', 
                        on_delete=models.SET_NULL, 
                        related_name='subtopics',
                        null=True
                    )

    def __str__(self):
        return self.title


    @property
    def notes(self):
        return self.notes.prefetch_related(
                                    'images',
                                    'videos',
                                    'files',
                                    'notes',
                                    'references',
                                )


    # @property
    # def assignments(self):
    #     return self.assignments.prefetch_related(
    #                                 '',
    #                                 '',
    #                             )

    # @property
    # def practices(self):
    #     return self.practices.prefetch_related(
    #                                 '',
    #                                 '',
    #                             )

    # @property
    # def tests(self):
    #     return self.tests.prefetch_related(
    #                                 '',
    #                                 '',
    #                             )

class Review(SoftDeletionModel):
    
    course = models.ForeignKey('Course',on_delete=models.SET_NULL, null=True, related_name='reviews')
    pub_date = models.DateTimeField(auto_now_add=True)
    reviewer = models.ForeignKey('people.Student',on_delete=models.SET_NULL, null=True, related_name='reviews')
    comment = models.CharField(max_length=200)
    rating = models.IntegerField(choices=COURSE_RATING_CHOICES)


    def __str__(self):
        return self.reviewer.__str__()












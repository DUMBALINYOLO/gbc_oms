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
    students = models.ManyToManyField(
                        'people.StudentProfile',
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





class Review(SoftDeletionModel):

    course = models.ForeignKey('Course',on_delete=models.SET_NULL, null=True, related_name='reviews')
    pub_date = models.DateTimeField(auto_now_add=True)
    reviewer = models.ForeignKey('people.StudentProfile',on_delete=models.SET_NULL, null=True, related_name='reviews')
    comment = models.CharField(max_length=200)
    rating = models.IntegerField(choices=COURSE_RATING_CHOICES)


    def __str__(self):
        return self.reviewer.__str__()

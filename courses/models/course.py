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
                        related_name='taken_courses', blank=True
                    )
    topics = models.ManyToManyField(
                        'courses.Topic',
                         blank=True
                    )
    reviews = models.ManyToManyField(
                        'courses.Review',
                         blank=True
                    )
    image = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True, null=True)
    full_name = models.CharField(max_length=500)
    short_name = models.CharField(max_length=100)
    status = models.CharField(max_length=300, choices=COURSES_STATUS_CHOICES)
    created = models.DateTimeField(auto_now_add=True)
    start_date = models.DateField()
    end_date = models.DateField()
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
    topic_id = models.IntegerField(blank=True, null=True)



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
    topic_id = models.IntegerField(blank=True, null=True)


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
    content_overview= models.TextField(blank=False)
    assessment_overview= models.TextField(blank=False)
    subtopics = models.ManyToManyField(
                        'courses.SubTopic',
                         blank=True
                    )
    objectives = models.ManyToManyField(
                            'TopicObjective',
                            blank=True,
                        )
    guidelines = models.ManyToManyField(
                            'TopicGuideLine',
                            blank=True,
                        )
    course_id = models.IntegerField(blank=True, null=True)


    def __str__(self):
        return self.title


#nested
class SubTopic(SoftDeletionModel):

    title = models.CharField(max_length=300)
    topic_id = models.IntegerField(blank=True, null=True)
    notes = models.ManyToManyField(
                        'courses.StudyNote',
                         blank=True
                    )

    def __str__(self):
        return self.title





class Review(SoftDeletionModel):
    pub_date = models.DateTimeField(auto_now_add=True)
    reviewer = models.ForeignKey('people.StudentProfile',on_delete=models.SET_NULL, null=True, related_name='reviews')
    comment = models.CharField(max_length=200)
    rating = models.IntegerField(choices=COURSE_RATING_CHOICES)
    course_id = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.reviewer.__str__()

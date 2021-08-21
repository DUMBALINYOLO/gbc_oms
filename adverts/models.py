from django.db import models

# Create your models here.
class CourseOffered(models.Model):
    STATUS = [
        ('ongoing', 'ONGOING'),
        ('upcoming', 'UPCOMING'),
        ('finished', 'FINISHED')
    ]


    name = models.CharField(max_length=300)
    status = models.CharField(
                        max_length=40,
                        choices=STATUS,
                        blank=True,
                        null=True
                    )
    description = models.TextField(blank=True, null=True)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    price = models.DecimalField(
                        default=0.0,
                        decimal_places=2,
                        max_digits=16,
                        blank=True
                    )
    topics = models.ManyToManyField(
                            'CourseTopic',
                            blank=True
                        )
    exit_profiles = models.ManyToManyField(
                            'CourseExitProfile',
                            blank=True
                        )
    objectives = models.ManyToManyField(
                            'CourseObjective',
                            blank=True
                        )
    image = models.ImageField(
                        upload_to='courses/',
                        null=True,
                        blank=True
                    )



    def __str__(self):
        return self.name



class CourseTopic(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField(blank=True, null=True)
    longevity = models.IntegerField(default=0)
    course_id = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.name


class CourseExitProfile(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField(blank=True, null=True)
    course_id = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.name



class CourseObjective(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField(blank=True, null=True)
    course_id = models.IntegerField(blank=True, null=True)


    def __str__(self):
        return self.name

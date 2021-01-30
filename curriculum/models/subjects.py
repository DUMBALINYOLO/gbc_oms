import uuid
from django.db import models
from basedata.models import SoftDeletionModel
from basedata.constants import (
                    STUDY_MODE_CHOICES,
                    COURSE_TO_SUBJECT_STATUS_CHOICES,
                )



class Subject(SoftDeletionModel):
    name = models.CharField(max_length=68)
    curriculum = models.ForeignKey(
    					'curriculum.Curriculum',
    					on_delete=models.SET_NULL,
    					null=True,
    					related_name='subjects',
    				)
    subject_code = models.CharField(max_length=90, blank=True, null=True)


    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.subject_code:
            self.subject_code = str(uuid.uuid4()).replace("-", '').upper()[:20]
        super(Subject, self).save(*args, **kwargs)



class KlassStudiedSubject(SoftDeletionModel):


    subject = models.ForeignKey('Subject', on_delete=models.PROTECT)
    klass = models.ForeignKey('klasses.StudentClass', on_delete=models.PROTECT)
    subject_teacher = models.ForeignKey(
                            'people.TeacherProfile', 
                            on_delete=models.SET_NULL,
                            related_name="taught_subjects",
                            blank=True,
                            null=True,
                        )
    courses = models.ManyToManyField(
                            'courses.Course', 
                            related_name="subject",
                            through='AddCourseToSubject',
                        )
    status = models.CharField(max_length=200, choices=STUDY_MODE_CHOICES)

    class Meta:
        unique_together = [['klass', 'subject']]
        verbose_name_plural = 'KlassStudiedSubjects'

    

    def __str__(self):
        return f'{self.subject.__str__()} {self.klass.__str__()}'


class StudentStudySubject(SoftDeletionModel):

    subject = models.ForeignKey('Subject', on_delete=models.PROTECT)
    student = models.ForeignKey('people.StudentProfile', on_delete=models.PROTECT)
    status = models.CharField(max_length=200, choices=STUDY_MODE_CHOICES)

    class Meta:
        unique_together = [['student', 'subject']]
        verbose_name_plural = 'StudentStudySubjects'

    

    def __str__(self):
        return f'{self.subject.__str__()} {self.student.__str__()}'





class AddCourseToSubject(SoftDeletionModel):
    course = models.ForeignKey('courses.Course', on_delete=models.PROTECT)
    subject = models.ForeignKey('KlassStudiedSubject', on_delete=models.PROTECT)
    date = models.DateField(auto_now_add=True)
    status = models.CharField(max_length=200, choices=COURSE_TO_SUBJECT_STATUS_CHOICES)
    
    class Meta:
        unique_together = [['course', 'subject']]
        verbose_name_plural = 'AddCourseToSubject'

    

    def __str__(self):
        return f'{self.course.__str__()} {self.subject.__str__()}'

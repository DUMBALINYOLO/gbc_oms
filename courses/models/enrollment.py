from django.db import models
from basedata.models import SoftDeletionModel
from basedata.constants import (
                    COURSE_ENROLLMENT_STATUS_CHOICES,
                    COURSE_SCHOOL_VISIBILITY_STATUS_CHOICES,
                )


class StudentCourseEnrollment(SoftDeletionModel):
    status = models.CharField(max_length=200, choices=COURSE_ENROLLMENT_STATUS_CHOICES)
    student = models.ForeignKey(
                    'people.StudentProfile', 
                    on_delete=models.PROTECT,
                    related_name="enrollments"
                )
    course = models.ForeignKey('courses.Course', on_delete=models.PROTECT)
    date_enrolled = models.DateField(auto_now_add=True)
    final_grade = models.CharField(max_length=340, blank=True, null=True)



    class Meta:
        unique_together = [['student', 'course']]
        verbose_name_plural = 'StudentCourseEnrollment'


    def __str__(self):
        return self.student.__str__()



class AddCourseToSchool(SoftDeletionModel):
    visibility_status = models.CharField(max_length=200, choices=COURSE_SCHOOL_VISIBILITY_STATUS_CHOICES)
    student = models.ForeignKey(
                    'setup.Institution', 
                    on_delete=models.PROTECT,
                    related_name="enrollments"
                )
    course = models.ForeignKey('courses.Course', on_delete=models.PROTECT)
    date_enrolled = models.DateField(auto_now_add=True)
    final_grade = models.CharField(max_length=340, blank=True, null=True)



    class Meta:
        unique_together = [['student', 'course']]
        verbose_name_plural = 'AddCourseToSchools'


    def __str__(self):
        return self.student.__str__()







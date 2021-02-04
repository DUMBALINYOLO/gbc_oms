from rest_framework import viewsets, generics, status, views
from rest_framework.response import Response
from courses.models import Course

class CourseCountAPIView(views.APIView):



    def get(self, request, format=None):
        course_count = Course.objects.count()
        courses ={
            "data": course_count
        }
        return Response(courses, status=status.HTTP_200_OK)

from rest_framework import viewsets, generics, status, views
from rest_framework import viewsets, generics, permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.response import Response
from courses.models import Course, Topic
from people.models import Student
from django.contrib.auth import get_user_model

User = get_user_model()

class StatsCounterAPIView(views.APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = [permissions.AllowAny,]


    def get(self, request, format=None):
        courses = Course.objects.count()
        students = Student.objects.count()
        staffusers = User.objects.filter(
                                type__in = ['principal', 'teacher','clerk', 'bursar']
                            ).count()
        topics = Topic.objects.count()

        statscounter ={
            "courses": courses,
            "students": students,
            "staffusers": staffusers,
            "topics": topics,
        }
        return Response(statscounter, status=status.HTTP_200_OK)

from rest_framework import viewsets, generics, permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from .serializers import CourseOfferedSerializer
from .models import CourseOffered

class AdminCourseOfferedViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication, )
    permission_classes = [permissions.AllowAny,]
    queryset = CourseOffered.objects.all().order_by('-id')
    serializer_class = CourseOfferedSerializer

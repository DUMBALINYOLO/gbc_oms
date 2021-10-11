from rest_framework import viewsets, generics, permissions, status
from rest_framework.response import Response
from django.utils import timezone
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from .serializers import (
    CourseOfferedCreateUpdateSerializer,
    CourseOfferedListDetailSerializer,
    CourseTopicCreateUpdateSerializer,
    CourseTopicListDetailSerializer,
    CourseExitProfileCreateUpdateSerializer,
    CourseExitProfileListDetailSerializer,
    CourseObjectiveCreateUpdateSerializer,
    CourseObjectiveListDetailSerializer,

)
from .models import (
            Offered,
            AdObjective,
            AdExitProfile,
            AdTopic,
        )
from django.db.models import Q as ComplexQueryFilter
from django.shortcuts import get_object_or_404
from rest_framework.parsers import FormParser, MultiPartParser, JSONParser



def get_course(course_id):
    course = get_object_or_404(Offered, id=course_id)
    return course



class UpcomingCourseOfferedViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny,]
    # parser_classes = [MultiPartParser,FormParser, JSONParser]
    

    def get_serializer_class(self,*args, **kwargs):
        if self.action in ['create', 'patch', 'put']:
            return CourseOfferedCreateUpdateSerializer
        return CourseOfferedListDetailSerializer


    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        data["status"] = 'upcoming'
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


    def get_queryset(self, *args, **kwargs):
        queryset = Offered.objects.prefetch_related(
                                                    'topics',
                                                    'objectives',
                                                    'exit_profiles'
                                                ).filter(
                                ~ComplexQueryFilter(status__in =[
                                    'ongoing',
                                    'finished'
                                ])
                            )

        return queryset


class OngoingCourseOfferedViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny,]
    # parser_classes = [MultiPartParser,FormParser, JSONParser]



    def get_serializer_class(self,*args, **kwargs):
        if self.action in ['create', 'patch', 'put']:
            return CourseOfferedCreateUpdateSerializer
        return CourseOfferedListDetailSerializer


    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        print(data)
        data["status"] = 'ongoing'
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


    def get_queryset(self, *args, **kwargs):
        queryset = Offered.objects.prefetch_related(
                                                    'topics',
                                                    'objectives',
                                                    'exit_profiles'
                                                ).filter(
                                        ~ComplexQueryFilter(status__in =[
                                            'upcoming',
                                            'finished'
                                        ])

                                    )

        return queryset



class CourseTopicViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny,]


    def get_serializer_class(self, *args, **kwargs):
        if self.action in ['create', 'patch', 'put']:
            return CourseTopicCreateUpdateSerializer
        return CourseTopicListDetailSerializer


    def get_queryset(self, *args, **kwargs):
        queryset = AdTopic.objects.all()
        course_id = self.request.query_params.get('id', None)
        if course_id is not None:
            course = get_course(course_id)
            queryset = course.topics.all().order_by('-id')
        return queryset




class CourseObjectiveViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny,]


    def get_serializer_class(self, *args, **kwargs):
        if self.action in ['create', 'patch', 'put']:
            return CourseObjectiveCreateUpdateSerializer
        return CourseObjectiveListDetailSerializer


    def get_queryset(self, *args, **kwargs):
        queryset = AdObjective.objects.all().order_by('-id')
        course_id = self.request.query_params.get('id', None)
        if course_id is not None:
            course = get_course(course_id)
            queryset = course.objectives.all().order_by('-id')
        return queryset



class CourseExitProfileViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny,]


    def get_serializer_class(self, *args, **kwargs):
        if self.action in ['create', 'patch', 'put']:
            return CourseExitProfileCreateUpdateSerializer
        return CourseExitProfileListDetailSerializer


    def get_queryset(self, *args, **kwargs):
        queryset = AdExitProfile.objects.all().order_by('-id')
        course_id = self.request.query_params.get('id', None)
        if course_id is not None:
            course = get_course(course_id)
            queryset = course.exit_profiles.all().order_by('-id')
        return queryset

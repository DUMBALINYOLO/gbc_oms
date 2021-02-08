from rest_framework import viewsets, generics, permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.db.models import Q as ComplexQueryLookUp
from people.models import Student, StudentProfile
from courses.serializers import CourseListDetailSerializer
from courses.models import Course


def get_student(email):
    user = get_object_or_404(Student, email=email)
    student = get_object_or_404(StudentProfile, user=user)
    return user



class StudentUpcomingCourseViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)#SessionAuthentication, BasicAuthentication)
    permission_classes = [permissions.AllowAny,]
    serializer_class = CourseListDetailSerializer


    def get_queryset(self, *args, **kwargs):
        queryset = Course.objects.prefetch_related(
                                        'amastudents',
                                        'topics',
                                        'reviews',
                                    ).filter(
                                        ~ComplexQueryLookUp(status__in=['ongoing', 'finished', 'inactive'])
                                    ).order_by('-id')
        email = self.request.query_params.get('email', None)
        if email is not None:
            student = get_student(email=email)
            queryset = student.taken_courses.prefetch_related(
                                            'amastudents',
                                            'topics',
                                            'reviews',
                                        ).filter(
                                            ~ComplexQueryLookUp(status__in=['ongoing', 'finished', 'inactive'])
                                        ).order_by('-id')
        return queryset


class StudentOngoingCourseViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)#SessionAuthentication, BasicAuthentication)
    permission_classes = [permissions.AllowAny,]
    serializer_class = CourseListDetailSerializer


    def get_queryset(self, *args, **kwargs):
        queryset = Course.objects.prefetch_related(
                                        'amastudents',
                                        'topics',
                                        'reviews',
                                    ).filter(
                                        ~ComplexQueryLookUp(status__in=['upcoming', 'finished', 'inactive'])
                                    ).order_by('-id')
        email = self.request.query_params.get('email', None)
        if email is not None:
            student = get_student(email=email)
            queryset = student.taken_courses.prefetch_related(
                                            'amastudents',
                                            'topics',
                                            'reviews',
                                        ).filter(
                                            ~ComplexQueryLookUp(status__in=['upcoming', 'finished', 'inactive'])
                                        ).order_by('-id')
        return queryset

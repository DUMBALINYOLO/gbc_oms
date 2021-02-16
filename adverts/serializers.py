from rest_framework import serializers
from .models import CourseOffered


class CourseOfferedSerializer(serializers.ModelSerializer):

    class Meta:
        model = CourseOffered
        fields = ['id', 'name', 'content']

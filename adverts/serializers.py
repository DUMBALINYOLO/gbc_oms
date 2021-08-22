from rest_framework import serializers
from  django.shortcuts import get_object_or_404
from .models import (
                CourseOffered,
                CourseTopic,
                CourseExitProfile,
                CourseObjective,
            )
import base64, uuid
from django.core.files.base import ContentFile
from drf_extra_fields.fields import Base64ImageField


# class Base64ImageField(serializers.ImageField):
    
#     def to_internal_value(self, data):
#         if isinstance(data, str) and data.startswith('data:image'):
#             # base64 encoded image - decode
#             format, imgstr = data.split(';base64,') # format ~= data:image/X,
#             ext = format.split('/')[-1] # guess file extension
#             id = uuid.uuid4()
#             data = ContentFile(base64.b64decode(imgstr), name = id.urn[9:] + '.' + ext)
#         return super(Base64ImageField, self).to_internal_value(data)





def get_course(course_id):
    course = get_object_or_404(CourseOffered, id=course_id)
    return course


class CourseOfferedCreateUpdateSerializer(serializers.ModelSerializer):
    image = Base64ImageField(required=True)

    class Meta:
        model = CourseOffered
        fields = [
            'name', 
            'description',
            'status',
            'start_date',
            'end_date',
            'price',
            'image'
        ]


class CourseOfferedListDetailSerializer(serializers.ModelSerializer):
    image = serializers.ImageField()
    
    class Meta:
        model = CourseOffered
        fields = [
            'id',
            'name', 
            'description',
            'status',
            'start_date',
            'end_date',
            'price',
            'image'
        ]


class CourseTopicCreateUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = CourseTopic
        fields = [
            'name',
            'description',
            'longevity',
            'course_id'
        ]


    def create(self, validated_data):
        course_id = validated_data['course_id']
        topic = CourseTopic(
                    description = validated_data['description'],
                    name = validated_data['name'],
                    longevity = validated_data['longevity'],
                    course_id= validated_data['course_id'],
                )
        topic.save()
        current_course = get_course(course_id)
        current_course.topics.add(topic)
        return topic


class CourseTopicListDetailSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = CourseTopic
        fields = [
            'id',
            'name',
            'description',
            'longevity',
        ]





class CourseExitProfileCreateUpdateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = CourseExitProfile
        fields = [
            'name',
            'description',
            'course_id'
        ]


    def create(self, validated_data):
        course_id = validated_data['course_id']
        profile = CourseExitProfile(
                    description = validated_data['description'],
                    name = validated_data['name'],
                    course_id= validated_data['course_id'],
                )
        profile.save()
        current_course = get_course(course_id)
        current_course.exit_profiles.add(profile)
        return profile


class CourseExitProfileListDetailSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = CourseExitProfile
        fields = [
            'id',
            'name',
            'description',
        ]





class CourseObjectiveCreateUpdateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = CourseObjective
        fields = [
            'name',
            'description',
            'course_id'
        ]


    def create(self, validated_data):
        course_id = validated_data['course_id']
        objective = CourseObjective(
                    description = validated_data['description'],
                    name = validated_data['name'],
                    course_id= validated_data['course_id'],
                )
        objective.save()
        current_course = get_course(course_id)
        current_course.objectives.add(objective)
        return objective



class CourseObjectiveListDetailSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = CourseObjective
        fields = [
            'id',
            'name',
            'description',
        ]
from rest_framework import serializers
from courses.models import Course


class CourseListDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Course
        fields = [
            'id',
			'full_name',
			'short_name',
			'status',
			'start_date',
			'end_date',
        ]

from rest_framework import serializers
from attendance.models import  Attendance, AttendanceRecord
# from drf_writable_nested.serializers import WritableNestedModelSerializer
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from people.models import TeacherProfile

User = get_user_model()

class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


def get_user(email):
    user = get_object_or_404(User, email=email)
    user_profile = get_object_or_404(TeacherProfile, user=user)
    return user_profile

class AttendanceRecordUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = AttendanceRecord
		fields = [
			'id',
			'status',
			'student'
		]


class AttendanceRecordListSerializer(serializers.ModelSerializer):
	student = StringSerializer()

	class Meta:
		model = AttendanceRecord
		fields = [
			'id',
			'status',
			'student'
		]


class TeacherAttendanceCreateSerializer(serializers.ModelSerializer):

    class Meta:
    	model = Attendance
    	fields = [
            'id',
    		'date',
    		'klass',
    		'recorded_by',

    	]

    # def create(self, validated_data):
    #     # print(validated_data.errors)
    #     user_email = validated_data['recorded_by']
    #     user = get_user(email=user_email)
    #     user_s = TeacherProfileSerializer(user)
    #
    #     attendance = Attendance(
    #     			klass = validated_data['klass'],
    #     		)
    #     attendance.save()
    #     return attendance


class TeacherAttendanceUpdateSerializer(serializers.ModelSerializer):
	records = AttendanceRecordUpdateSerializer(many=True)

	class Meta:
		model = Attendance
		fields = [
			'date',
			'klass',
			'recorded_by',
			'records',
		]



class TeacherAttendanceListSerializer(serializers.ModelSerializer):
	klass = StringSerializer()
	recorded_by = StringSerializer()

	class Meta:
		model = Attendance
		fields = [
			'id',
			'date',
			'klass',
			'recorded_by',

		]


class TeacherAttendanceDetailSerializer(serializers.ModelSerializer):
	klass = StringSerializer()
	recorded_by = StringSerializer()
	records = AttendanceRecordListSerializer(many=True)

	class Meta:
		model = Attendance
		fields = [
			'id',
			'date',
			'klass',
			'recorded_by',
			'records',
		]

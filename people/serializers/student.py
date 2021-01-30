from rest_framework import serializers
from people.models import (
					Student,
					StudentProfile,
				)
from attendance.models import AttendanceRecord
from django.contrib.auth import authenticate


class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class StudentProfileListDetailSerializer(serializers.ModelSerializer):
	guardian = StringSerializer()
	gender = serializers.SerializerMethodField()

	class Meta:
		model = StudentProfile
		fields = [
			'id',
			'first_name',
			'middle_name',
			'last_name',
			'guardian',
			'gender',
			'guardian',
			'date_of_birth',
			'phone_number',
			'whatsapp_number',
		]

	def get_gender(self, obj):
		return obj.get_gender_display()




class AttendanceSerializer(serializers.ModelSerializer):
	attendance = StringSerializer()

	class Meta:
		model = AttendanceRecord
		fields = [
				'id',
				'attendance',
				'status',
			]


class StudentCreateSerializer(serializers.ModelSerializer):

	class Meta:
		model = Student
		fields = ['id', 'email', 'username', 'password']
		extra_kwargs = {'password':{"write_only": True}}


	def create(self, validated_data):
		student = Student.objects.create_student(
				validated_data['email'],
				validated_data['username'],
				validated_data['password'],

			)
		return student



class StudentListDetailSerializer(serializers.ModelSerializer):
	attendance = AttendanceSerializer(many=True)
	profile = StudentProfileListDetailSerializer()


	class Meta:
		model = Student
		fields = [
				'id',
				'username',
				'email',
				'profile',
				'attendance',
			]
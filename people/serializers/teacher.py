from rest_framework import serializers
from people.models import (
					Student,
					StudentProfile,
					TeacherProfile,
					Teacher,
					Bursar,
					BursarProfile,
					Principal,
					PrincipalProfile,
					Parent,
					ParentProfile
				)

from attendance.models import AttendanceRecord
from django.contrib.auth import authenticate


class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value




class TeacherProfileCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = TeacherProfile
		fields = [
			'title',
			'id',
			'first_name',
			'middle_name',
			'last_name',
			'gender',
			'date_of_birth',
			'phone_number',
			'whatsapp_number',

		]



class TeacherStudentProfileListDetailSerializer(serializers.ModelSerializer):
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




class TeacherProfileListDetailSerializer(serializers.ModelSerializer):
	gender = serializers.SerializerMethodField()
	title  = serializers.SerializerMethodField()

	class Meta:
		model = TeacherProfile
		fields = [
			'title',
			'id',
			'first_name',
			'middle_name',
			'last_name',
			'gender',
			'date_of_birth',
			'phone_number',
			'whatsapp_number',

		]

	def get_gender(self, obj):
		return obj.get_gender_display()

	def get_title(self, obj):
		return obj.get_title_display()




class TeacherListDetailSerializer(serializers.ModelSerializer):
	profile = TeacherProfileListDetailSerializer()

	class Meta:
		model = Teacher
		fields = [
			'id',
			'username',
			'email',
			'profile',
		]





class AttendanceSerializer(serializers.ModelSerializer):
	attendance = StringSerializer()

	class Meta:
		model = AttendanceRecord
		fields = [
				'id',
				'attendance',
				'status',
			]


class TeacherStudentListDetailSerializer(serializers.ModelSerializer):
	attendance = AttendanceSerializer(many=True)
	profile = TeacherStudentProfileListDetailSerializer()


	class Meta:
		model = Student
		fields = [
				'id',
				'username',
				'email',
				'profile',
				'attendance',
			]

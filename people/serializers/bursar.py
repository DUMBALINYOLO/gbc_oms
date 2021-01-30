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




class BursarProfileCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = BursarProfile
		fields = [
			'title',
			'id',
			'first_name',
			'middle_name',
			'last_name',
			'school',
			'gender',
			'school',
			'date_of_birth',
			'phone_number',
			'whatsapp_number',

		]



class BursarStudentProfileListDetailSerializer(serializers.ModelSerializer):
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


class BursarParentProfileListDetailSerializer(serializers.ModelSerializer):
	gender = serializers.SerializerMethodField()
	title  = serializers.SerializerMethodField()

	class Meta:
		model = ParentProfile
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


class BursarProfileListDetailSerializer(serializers.ModelSerializer):
	gender = serializers.SerializerMethodField()
	title  = serializers.SerializerMethodField()

	class Meta:
		model = BursarProfile
		fields = [
			'title',
			'id',
			'first_name',
			'middle_name',
			'last_name',
			'school',
			'gender',
			'school',
			'date_of_birth',
			'phone_number',
			'whatsapp_number',

		]

	def get_gender(self, obj):
		return obj.get_gender_display()

	def get_title(self, obj):
		return obj.get_title_display()





class BursarListDetailSerializer(serializers.ModelSerializer):
	profile = BursarProfileListDetailSerializer()

	class Meta:
		model = Bursar
		fields = [
			'id',
			'username',
			'email',
			'profile',
		]



class BursarParentListDetailSerializer(serializers.ModelSerializer):
	profile = BursarParentProfileListDetailSerializer()

	class Meta:
		model = Principal
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


class BursarStudentListDetailSerializer(serializers.ModelSerializer):
	attendance = AttendanceSerializer(many=True)
	profile = BursarStudentProfileListDetailSerializer()


	class Meta:
		model = Student
		fields = [
				'id',
				'username',
				'email',
				'profile',
				'attendance',
			]


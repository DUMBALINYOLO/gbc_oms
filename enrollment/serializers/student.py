from rest_framework import serializers
from django.shortcuts import get_object_or_404
from enrollment.models import Admission
from people.models import Student, StudentProfile



def get_student(email):
	user = get_object_or_404(Student, email=email)
	student = get_object_or_404(StudentProfile, user=user)
	return student

class StringSerializer(serializers.StringRelatedField):

	def to_internal_value(self, value):
		return self.value


class StudentAdmissionCreateUpdateSerializer(serializers.ModelSerializer):
	# student = serializers.PrimaryKeyRelatedField(queryset=StudentProfile.objects.all())

	class Meta:
		model = Admission
		fields = [
			'id',
			'student',
			'klass',
		]


	# def create(self, validated_data):
	# 	student = get_student(email=validated_data['student'])
	# 	admission = Admission(
	# 					student = student,
	# 					klass = validated_data['klass'],
	# 			)
	# 	admission.save()
	# 	return admission


class StudentAdmissionListDetailSerializer(serializers.ModelSerializer):
	student = StringSerializer()
	klass = StringSerializer()

	class Meta:
		model = Admission
		fields = [
			'id',
			'application_number',
			'student',
			'status',
			'klass',
			'application_date',
		]

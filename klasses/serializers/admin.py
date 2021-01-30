from rest_framework import serializers
from klasses.models import (
				StudentClass,
				Stream,
				StudentEnrollment,
			)

from curriculum.models import (
			KlassStudiedSubject,
		)



class StringSerializer(serializers.StringRelatedField):

	def to_internal_value(self, value):
		return self.value


class AdminStreamSerializer(serializers.ModelSerializer):

	class Meta:
		model = Stream
		fields = [
			'id',
			'grade',
		]


class AdminStudentClassCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = StudentClass
		fields = [
			'id',
			'name',
			'stream',
			'max_population',
			'population',
			'class_teacher',
			'year',
			'creation_date',
			'status',
		]




class AdminStudentClassListDetailSerializer(serializers.ModelSerializer):
	# subjects = KlassStudiedSubjectListSerializer(many=True)

	class Meta:
		model = StudentClass
		fields = [
			'id',
			'name',
			'stream',
			'max_population',
			'population',
			'class_teacher',
			'year',
			# 'subjects',
			'creation_date',
			'status',
		]



class KlassStudiedSubjectCreateUpdateSerializer(serializers.ModelSerializer):


	class Meta:
		model = KlassStudiedSubject
		fields = [
			'id',
			'klass',
			'subject',
			'subject_teacher',
			'status',
		]



class KlassStudiedSubjectListSerializer(serializers.ModelSerializer):
	klass = StringSerializer()
	subject = StringSerializer()
	subject_teacher = StringSerializer()
	status = serializers.SerializerMethodField()

	class Meta:
		model = KlassStudiedSubject
		fields = [
			'id',
			'subject',
			'klass',
			'subject_teacher',
			'status',
		]



	def get_status(self, obj):
		return obj.get_status_display()


class StudentEnrollmentCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = StudentEnrollment
		fields = [
			'id',
			'stdnt',
			'status',
			'enr_klass',
		]


class StudentEnrollmentListDetailSerializer(serializers.ModelSerializer):
	stdnt = StringSerializer()
	enr_klass = StringSerializer()
	status = serializers.SerializerMethodField()


	class Meta:
		model = StudentEnrollment
		fields = [
			'id',
			'stdnt',
			'status',
			'enrollment_date',
			'enr_klass',
		]

	
	def get_status(self, obj):
		return obj.get_status_display()


from rest_framework import serializers
from curriculum.models import (
			Curriculum,
			Subject,
			KlassStudiedSubject,
			StudentStudySubject,
			AddCourseToSubject,
	)


class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class CurriculumCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = Curriculum
		fields = [
			'id',
			'name'
		]



class CurriculumListSerializer(serializers.ModelSerializer):

	class Meta:
		model = Curriculum
		fields = [
			'id',
			'name',
			'code',
		]


class SubjectCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = Subject
		fields = [
			'id',
			'name',
			'curriculum',

		]


class SubjectListDetailSerializer(serializers.ModelSerializer):
	curriculum = StringSerializer()

	class Meta:
		model = Subject
		fields = [
			'id',
			'name',
			'curriculum',
			'subject_code',
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



class StudentStudySubjectCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = StudentStudySubject
		fields = [
			'id',
			'student',
			'subject',
			'status',
		]



class StudentStudySubjectListDetailSerializer(serializers.ModelSerializer):
	student = StringSerializer()
	subject =StringSerializer()


	class Meta:
		model = StudentStudySubject
		fields = [
			'id',
			'student',
			'subject',
			'status',
		]


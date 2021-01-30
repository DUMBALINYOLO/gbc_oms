from rest_framework import serializers
from grading.models import (
		GeneralGrade,
		Record
	)
from drf_writable_nested.serializers import WritableNestedModelSerializer


class StringSerializer(serializers.StringRelatedField):

	def to_internal_value(self, value):
		return self.value


class RecordCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = Record
		fields = [
			'id',
			'student',
			'score',
		]

class RecordListDetailSerializer(serializers.ModelSerializer):
	student = StringSerializer()

	class Meta:
		model = Record
		fields = [
			'id',
			'name',
			'student',
			'score',
			'totalmarks',
		]



class AdminGeneralGradeCreateSerializer(serializers.ModelSerializer):

	class Meta:
		model = GeneralGrade
		fields = [
			'name',
			'klass',
			'total_marks',
			'date',
			'type',
			'subject',
			'recorded_by'
		]


class AdminGeneralGradeUpdateSerializer(WritableNestedModelSerializer):
	records = RecordCreateUpdateSerializer(many=True)


	class Meta:
		model = GeneralGrade
		fields = [
			'id',
			'name',
			'klass',
			'total_marks',
			'date',
			'type',
			'subject',
			'recorded_by',
			'records',
		]



class AdminGeneralListDetailSerializer(serializers.ModelSerializer):
	# records = RecordListDetailSerializer(many=True)
	klass = StringSerializer()
	subject = StringSerializer()
	recorded_by = StringSerializer()


	class Meta:
		model = GeneralGrade
		fields = [
			'id',
			'name',
			'klass',
			'total_marks',
			'date',
			'type',
			'subject',
			'recorded_by',
			# 'records',
		]





























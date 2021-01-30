from rest_framework import serializers
from grading.models import (
		GeneralGrade,
		Record
	)


class StringSerializer(serializers.StringRelatedField):

	def to_internal_value(self, value):
		return self.value




class StudentRecordListDetailSerializer(serializers.ModelSerializer):
	student = StringSerializer()
	subject = StringSerializer()

	class Meta:
		model = Record
		fields = [
			'id',
			'student',
			'score',
			'totalmarks',
			'subject',
		]




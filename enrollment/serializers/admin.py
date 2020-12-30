from rest_framework import serializers 
from enrollment.models import Admission


class StringSerializer(serializers.StringRelatedField):

	def to_internal_value(self, value):
		return self.value


class AdminAdmissionCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = Admission
		fields = [
			'id',
			'student',
			'status',
			'klass',
		]


class AdminAdmissionListDetailSerializer(serializers.ModelSerializer):
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




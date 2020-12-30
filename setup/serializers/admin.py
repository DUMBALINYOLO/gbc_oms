from rest_framework import serializers
from setup.models import Institution


class InstitutionListDetailSerializer(serializers.ModelSerializer):
	status = serializers.SerializerMethodField()
	type = serializers.SerializerMethodField()

	class Meta:
		model = Institution
		fields = [
				'id',
				'name',
				'type',
				'status',
				'address',
				'mission',
				'telephone',
				'mobilephone',
				'school_email',
				'school_logo',
				'website'
				
			]


	def get_status(self, obj):
		return obj.get_status_display()


	def get_status(self, obj):
		return obj.get_type_display()


class InstitutionCreateUpdateSerializer(serializers.ModelSerializer):


	class Meta:
		model = Institution
		fields = [
			'id',
			'name',
			'type',
			'status',
			'address',
			'mission',
			'telephone',
			'mobilephone',
			'school_email',
			'school_logo',
			'website'
		]

		
from rest_framework import serializers
from setup.models import SchoolHeadOffice, Institution


class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value




class ItInstitutionsListSerializer(serializers.ModelSerializer):
	status = serializers.SerializerMethodField()
	type = serializers.SerializerMethodField()

	class Meta:
		model = Institution
		fields = [
				'id',
				'name',
				'type',
				'status',
			]


	def get_status(self, obj):
		return obj.get_status_display()


	def get_status(self, obj):
		return obj.get_type_display()



class ItInstitutionsDetailSerializer(serializers.ModelSerializer):
	status = serializers.SerializerMethodField()
	type = serializers.SerializerMethodField()
	head_office = StringSerializer()

	class Meta:
		model = Institution
		fields = [
				'id',
				'name',
				'type',
				'status',
				'head_office',
			]


	def get_status(self, obj):
		return obj.get_status_display()


	def get_status(self, obj):
		return obj.get_type_display()


class ItInstitutionsCreateUpdateSerializer(serializers.ModelSerializer):


	class Meta:
		model = Institution
		fields = [
				'id',
				'name',
				'type',
				'status',
				'head_office',
			]






class ItSchoolHeadOfficeCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = SchoolHeadOffice
		fields = [
				'name',
				'location',
			]


class ItSchoolHeadOfficeListSerializer(serializers.ModelSerializer):

	class Meta:
		model = SchoolHeadOffice
		fields = [
				'id',
				'name',
				'location',
			]



class ItSchoolHeadOfficeCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = SchoolHeadOffice
		fields = [
				'name',
				'location',
			]



class ItSchoolHeadOfficeDetailSerializer(serializers.ModelSerializer):
	schools = ItInstitutionsListSerializer(many=True)

	class Meta:
		model = SchoolHeadOffice
		fields = [
				'id',
				'name',
				'location',
				'schools'
			]


















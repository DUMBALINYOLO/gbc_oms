from rest_framework import serializers
from attendance.models import  Attendance, AttendanceRecord
from drf_writable_nested.serializers import WritableNestedModelSerializer

class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value


class AttendanceRecordUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = AttendanceRecord
		fields = [
			'id',
			'status',
			'student'
		]


class AttendanceRecordListSerializer(serializers.ModelSerializer):
	student = StringSerializer()

	class Meta:
		model = AttendanceRecord
		fields = [
			'id',
			'status',
			'student'
		]


class AdminAttendanceCreateSerializer(serializers.ModelSerializer):

	class Meta:
		model = Attendance
		fields = [
			'date',
			'klass',
			'recorded_by',

		]


class AdminAttendanceUpdateSerializer(WritableNestedModelSerializer):
	records = AttendanceRecordUpdateSerializer(many=True)

	class Meta:
		model = Attendance
		fields = [
			'date',
			'klass',
			'recorded_by',
			'records',
		]



class AdminAttendanceListSerializer(serializers.ModelSerializer):
	klass = StringSerializer()
	recorded_by = StringSerializer()

	class Meta:
		model = Attendance
		fields = [
			'id',
			'date',
			'klass',
			'recorded_by',

		]


class AdminAttendanceDetailSerializer(serializers.ModelSerializer):
	klass = StringSerializer()
	recorded_by = StringSerializer()
	records = AttendanceRecordListSerializer(many=True)

	class Meta:
		model = Attendance
		fields = [
			'id',
			'date',
			'klass',
			'recorded_by',
			'records',
		]

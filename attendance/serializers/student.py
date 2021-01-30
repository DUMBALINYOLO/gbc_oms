from rest_framework import serializers
from attendance.models import  Attendance, AttendanceRecord
# from drf_writable_nested.serializers import WritableNestedModelSerializer

class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value




class StudentAttendanceRecordListSerializer(serializers.ModelSerializer):

	class Meta:
		model = AttendanceRecord
		fields = [
			'id',
			'status',
			'date',
		]






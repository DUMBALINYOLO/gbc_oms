from rest_framework import serializers
from people.models import Student
from attendance.models import AttendanceRecord
from discipline.models import StudentDiscipline



class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value

class AttendanceSerializer(serializers.ModelSerializer):
	attendance = StringSerializer()

	class Meta:
		model = AttendanceRecord
		fields = [
				'id',
				'attendance',
				'status',
			]


class StudentDisciplineSerailizer(serializers.ModelSerializer):

	class Meta:
		model = StudentDiscipline
		fields = [
			'id',
			'offense',
			'issue_status',
			'date',
			'comments',
			'action'
		]


class ItStudentDetailSerializer(serializers.ModelSerializer):
	attendancerecords = AttendanceSerializer(many=True)
	behaviour = StudentDisciplineSerailizer(many=True)

	class Meta:
		model = Student
		fields = [
				'id',
				# 'user',
				'first_name',
				'middle_name',
				'last_name',
				'guardian',
				'school',
				'gender',
				'guardian',
				'school',
				'date_of_birth',
				'phone_number',
				'whatsapp_number',
				# 'student_number',
				'attendancerecords',
				'behaviour',

			]



class ItStudentListSerializer(serializers.ModelSerializer):
	klass = StringSerializer()

	class Meta:
		model = Student
		fields = [
				'id',
				'first_name',
				'last_name',
				'klass',
				'gender',
			]


















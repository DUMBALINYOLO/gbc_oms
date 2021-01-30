from rest_framework import serializers
from event.models import Event, EventParticipant
# from drf_writable_nested.serializers import WritableNestedModelSerializer

class StringSerializer(serializers.StringRelatedField):

	def to_internal_value(self, value):
		return self.value


class EventParticipantCreateUpdateSerializer(serializers.ModelSerializer):

	class Meta:
		model = EventParticipant
		fields = [
			'id',
			'event',
			'user',
		]


class EventParticipantListDetailSerializer(serializers.ModelSerializer):
	event = StringSerializer()
	user = StringSerializer()

	class Meta:
		model = EventParticipant
		fields = [
			'id',
			'event',
			'user',
		]


class AdminEventCreateUpdateSerializer(serializers.ModelSerializer):
	participants = EventParticipantCreateUpdateSerializer(many=True, required=False)

	class Meta:
		model = Event
		fields = [
			'id',
			'date',
			'reminder',
			'completed',
			'start_time',
			'end_time',
			'priority',
			'description',
			'repeat',
			'repeat_active',
			'label',
			'icon',
			'owner',
			'participants',
		]


class AdminEventListDetailSerializer(serializers.ModelSerializer):
	owner = StringSerializer()
	start_time = serializers.SerializerMethodField()
	end_time = serializers.SerializerMethodField()
	repeat = serializers.SerializerMethodField()
	reminder = serializers.SerializerMethodField()
	icon = serializers.SerializerMethodField()
	priority = serializers.SerializerMethodField()
	participants = EventParticipantListDetailSerializer(many=True, read_only=True)

	class Meta:
		model = Event
		fields = [
			'id',
			'date',
			'start_time',
			'end_time',
			'owner',
			'reminder',
			'completed',
			'completion_time',
			'priority',
			'description',
			'repeat',
			'repeat_active',
			'label',
			'icon',
			'participants',

		]





	def get_start_time(self, obj):
		return obj.get_start_time_display()

	def get_end_time(self, obj):
		return obj.get_end_time_display()

	def get_icon(self, obj):
		return obj.get_icon_display()


	def get_repeat(self, obj):
		return obj.get_repeat_display()


	def get_priority(self, obj):
		return obj.get_priority_display()


	def get_reminder(self, obj):
		return obj.get_reminder_display()






















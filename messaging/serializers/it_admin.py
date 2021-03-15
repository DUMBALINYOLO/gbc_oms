from rest_framework import serializers
from messaging.models import Feedback


class ContactUsCreateUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Feedback
        fields = [
            'id',
            'name',
            'email',
            'subject',
            'message',
        ]




class ContactUsListDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Feedback
        fields = [
            'id',
            'name',
            'email',
            'subject',
            'message',
            'date',
        ]

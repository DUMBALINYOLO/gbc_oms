from rest_framework import serializers
from tickets.models import (
                Ticket,
                Comment
            )
from django.shortcuts import get_object_or_404


def get_ticket(ticket_id):
    ticket = get_object_or_404(Ticket, id=ticket_id)
    return ticket


class StringSerializer(serializers.StringRelatedField):

    def to_internal_value(self, value):
        return self.value


class TicketCreateUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ticket
        fields = '__all__'



class TicketListDetailSerializer(serializers.ModelSerializer):
    created_by = StringSerializer()
    assigned_by = StringSerializer()
    assigned_to = StringSerializer()
    created = serializers.DateTimeField(format="%Y-%m-%d--%H:%M:%S")
    
    class Meta:
        model = Ticket
        fields = [
            'id',
            'subject',
            'category',
            'created_by',
            'assigned_by',
            'assigned_to',
            'status',
            'priority',
            'created',
            'last_active',
            'date_closed',
        ]


class TicketCommentCreateUpdateSerializer(serializers.ModelSerializer):


    class Meta:
        model = Comment
        fields = [
            'ticket_id',
            'user',
            'comment'
        ]


    def create(self, validated_data):
        ticket_id = validated_data['ticket_id']
        comment = Comment(
        			user= validated_data['user'],
        			comment= validated_data['comment'],
        			ticket_id= validated_data['ticket_id'],
        		)
        comment.save()
        current_comment = get_ticket(ticket_id)
        current_comment.comments.add(comment)
        return comment


class TicketCommentListDetailerializer(serializers.ModelSerializer):
    user = StringSerializer()
    created = serializers.DateTimeField(format="%Y-%m-%d--%H:%M:%S")
    

    class Meta:
        model = Comment
        fields = [
            'id',
            'user',
            'comment'
        ]

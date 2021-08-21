from django.db import models
from rest_framework import viewsets, status, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from knox.auth import TokenAuthentication
from django.shortcuts import get_object_or_404
from django.contrib.auth import authenticate, get_user_model
from notifications.models import Notification
from logs.models import ActivityReadLog
from tickets.models import (
                    Ticket,
                    Comment
                )
from tickets.serializers import (
                        TicketCommentCreateUpdateSerializer,
                        TicketCommentListDetailerializer,
                        TicketCreateUpdateSerializer,
                        TicketListDetailSerializer
                    )
from django.db.models import Q as ComplexQueryFilter


def get_user(user_id):
    User = get_user_model()
    user = get_object_or_404(User, id=user_id)
    return user

def get_ticket(ticket_id):
    ticket = get_object_or_404(Ticket, id = ticket_id)
    return ticket


class CustomerOpenTicketViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated,]
    authentication_classes = [TokenAuthentication,]


    def get_serializer_class(self, *args, **kwargs):
        if self.action in ['create', 'update', 'put', 'patch']:
            return TicketCreateUpdateSerializer
        return TicketListDetailSerializer


    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        user = request.user
        data["created_by"] = user.pk
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        ActivityReadLog.objects.create(
                        user = request.user,
                        model = 'Ticket',
                        headers = request.headers,
                        activity = serializer.data,
                    )
        Notification.objects.create(
                            title = 'Ticket Genarated',
                            read = False,
                            message = 'A Ticket has been generated, may you act on it'
                        )
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


    def get_queryset(self, *args, **kwargs):
        queryset = Ticket.objects.filter(
                                ~ComplexQueryFilter(
                                    status__in =[
                                        'reopened',
                                        'resolved',
                                        'closed'
                                    ]
                                )&
                                ComplexQueryFilter(created_by=self.request.user)
                            )
        ActivityReadLog.objects.create(
                            model = 'Ticket',
                            user = self.request.user,
                            headers = self.request.headers,
                            activity = f'{self.request.user} queried Open Tickets List'
                        )
        return queryset

    
    @action(detail=True, methods=['get', 'post', 'list'])
    def close(self, request, *args, **kwargs):
        try:
            ticket = self.get_object()
            ticket.status = 'closed'
            ticket.save()
            ActivityReadLog.objects.create(
                            model = 'Ticket',
                            user = self.request.user,
                            headers = self.request.headers,
                            activity = f'{self.request.user} closed the ticket {ticket.id}'
                        )
            return Response({'msg': 'Ticked Closed'})
        except:
            return Response({'msg': 'Something seems to be wrong'})




class OpenTicketViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated,]
    authentication_classes = [TokenAuthentication,]


    def get_serializer_class(self, *args, **kwargs):
        if self.action in ['create', 'update', 'put', 'patch']:
            return TicketCreateUpdateSerializer
        return TicketListDetailSerializer



    def get_queryset(self, *args, **kwargs):
        queryset = Ticket.objects.filter(
                                ~ComplexQueryFilter(
                                    status__in =[
                                        'reopened',
                                        'resolved',
                                        'closed'
                                    ]
                                )
                            )
        ActivityReadLog.objects.create(
                            model = 'Ticket',
                            user = self.request.user,
                            headers = self.request.headers,
                            activity = f'{self.request.user} queried Open Tickets List'
                        )
        return queryset

    
    @action(detail=True, methods=['get', 'post', 'list'])
    def assign(self, request, *args, **kwargs):
        try:
            ticket = self.get_object()
            data= request.data.copy()
            user = get_user(data['assigned_to'])
            ticket.assigned_to = user
            ticket.save()
            ActivityReadLog.objects.create(
                            model = 'Ticket',
                            user = self.request.user,
                            headers = self.request.headers,
                            activity = f'{self.request.user} assigned {ticket.id} to {user}'
                        )
            return Response({'msg': 'Ticked Closed'})
        except:
            return Response({'msg': 'Something seems to be wrong'})


    @action(detail=True, methods=['get', 'post', 'list'])
    def reassign(self, request, *args, **kwargs):
        try:
            ticket = self.get_object()
            data= request.data.copy()
            user = get_user(data['assigned_to'])
            ticket.assigned_to = user
            ticket.save()
            ActivityReadLog.objects.create(
                            model = 'Ticket',
                            user = self.request.user,
                            headers = self.request.headers,
                            activity = f'{self.request.user} re-assigned {ticket.id} to {user}'
                        )
            return Response({'msg': 'Ticked Re Assigned'})
        except:
            return Response({'msg': 'Something seems to be wrong'})






class AssignedOpenTicketViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated,]
    authentication_classes = [TokenAuthentication,]


    def get_serializer_class(self, *args, **kwargs):
        if self.action in ['create', 'update', 'put', 'patch']:
            return TicketCreateUpdateSerializer
        return TicketListDetailSerializer



    def get_queryset(self, *args, **kwargs):
        queryset = Ticket.objects.filter(
                                ~ComplexQueryFilter(
                                    status__in =[
                                        'reopened',
                                        'resolved',
                                        'closed'
                                    ]
                                )&
                                ComplexQueryFilter(assigned_to=self.request.user)
                            )
        ActivityReadLog.objects.create(
                            model = 'Ticket',
                            user = self.request.user,
                            headers = self.request.headers,
                            activity = f'{self.request.user} queried Open Tickets List'
                        )
        return queryset





class CustomerClosedTicketViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated,]
    authentication_classes = [TokenAuthentication,]


    def get_serializer_class(self, *args, **kwargs):
        if self.action in ['create', 'update', 'put', 'patch']:
            return TicketCreateUpdateSerializer
        return TicketListDetailSerializer




    def get_queryset(self, *args, **kwargs):
        queryset = Ticket.objects.filter(
                                ~ComplexQueryFilter(
                                    status__in =[
                                        'reopened',
                                        'resolved',
                                        'open'
                                    ]
                                )&
                                ComplexQueryFilter(created_by=self.request.user)
                            )
        ActivityReadLog.objects.create(
                            model = 'Ticket',
                            user = self.request.user,
                            headers = self.request.headers,
                            activity = f'{self.request.user} queried Open Tickets List'
                        )
        return queryset

    
    @action(detail=True, methods=['get', 'post', 'list'])
    def reopen(self, request, *args, **kwargs):
        try:
            ticket = self.get_object()
            ticket.status = 'reopened'
            ticket.save()
            ActivityReadLog.objects.create(
                            model = 'Ticket',
                            user = self.request.user,
                            headers = self.request.headers,
                            activity = f'{self.request.user} reopened the ticket {ticket.id}'
                        )
            return Response({'msg': 'Ticked Re Opened'})
        except:
            return Response({'msg': 'Something seems to be wrong'})




class CloseTicketViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated,]
    authentication_classes = [TokenAuthentication,]


    def get_serializer_class(self, *args, **kwargs):
        if self.action in ['create', 'update', 'put', 'patch']:
            return TicketCreateUpdateSerializer
        return TicketListDetailSerializer



    def get_queryset(self, *args, **kwargs):
        queryset = Ticket.objects.filter(
                                ~ComplexQueryFilter(
                                    status__in =[
                                        'reopened',
                                        'resolved',
                                        'open'
                                    ]
                                )
                            )
        ActivityReadLog.objects.create(
                            model = 'Ticket',
                            user = self.request.user,
                            headers = self.request.headers,
                            activity = f'{self.request.user} queried Open Tickets List'
                        )
        return queryset

    
    




class AssignedClosedTicketViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated,]
    authentication_classes = [TokenAuthentication,]


    def get_serializer_class(self, *args, **kwargs):
        if self.action in ['create', 'update', 'put', 'patch']:
            return TicketCreateUpdateSerializer
        return TicketListDetailSerializer


    def get_queryset(self, *args, **kwargs):
        queryset = Ticket.objects.filter(
                                ~ComplexQueryFilter(
                                    status__in =[
                                        'reopened',
                                        'resolved',
                                        'open'
                                    ]
                                )&
                                ComplexQueryFilter(assigned_to=self.request.user)
                            )
        ActivityReadLog.objects.create(
                            model = 'Ticket',
                            user = self.request.user,
                            headers = self.request.headers,
                            activity = f'{self.request.user} queried Closed Tickets List'
                        )
        return queryset




class CustomerReOpenedTicketViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated,]
    authentication_classes = [TokenAuthentication,]


    def get_serializer_class(self, *args, **kwargs):
        if self.action in ['create', 'update', 'put', 'patch']:
            return TicketCreateUpdateSerializer
        return TicketListDetailSerializer




    def get_queryset(self, *args, **kwargs):
        queryset = Ticket.objects.filter(
                                ~ComplexQueryFilter(
                                    status__in =[
                                        'closed',
                                        'open'
                                    ]
                                )&
                                ComplexQueryFilter(created_by=self.request.user)
                            )
        ActivityReadLog.objects.create(
                            model = 'Ticket',
                            user = self.request.user,
                            headers = self.request.headers,
                            activity = f'{self.request.user} queried Re-Opened Tickets List'
                        )
        return queryset

    
    @action(detail=True, methods=['get', 'post', 'list'])
    def close(self, request, *args, **kwargs):
        try:
            ticket = self.get_object()
            ticket.status = 'closed'
            ticket.save()
            ActivityReadLog.objects.create(
                            model = 'Ticket',
                            user = self.request.user,
                            headers = self.request.headers,
                            activity = f'{self.request.user} reopened the ticket {ticket.id}'
                        )
            return Response({'msg': 'Ticked Re Opened'})
        except:
            return Response({'msg': 'Something seems to be wrong'})




class ReOpenedTicketViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated,]
    authentication_classes = [TokenAuthentication,]


    def get_serializer_class(self, *args, **kwargs):
        if self.action in ['create', 'update', 'put', 'patch']:
            return TicketCreateUpdateSerializer
        return TicketListDetailSerializer



    def get_queryset(self, *args, **kwargs):
        queryset = Ticket.objects.filter(
                                ~ComplexQueryFilter(
                                    status__in =[
                                        'closed',
                                        'open'
                                    ]
                                )
                            )
        ActivityReadLog.objects.create(
                            model = 'Ticket',
                            user = self.request.user,
                            headers = self.request.headers,
                            activity = f'{self.request.user} queried Re Opened Tickets List'
                        )
        return queryset

    
    




class AssignedReOpenedTicketViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated,]
    authentication_classes = [TokenAuthentication,]


    def get_serializer_class(self, *args, **kwargs):
        if self.action in ['create', 'update', 'put', 'patch']:
            return TicketCreateUpdateSerializer
        return TicketListDetailSerializer


    def get_queryset(self, *args, **kwargs):
        queryset = Ticket.objects.filter(
                                ~ComplexQueryFilter(
                                    status__in =[
                                        'reopened',
                                        'resolved',
                                        'open'
                                    ]
                                )&
                                ComplexQueryFilter(assigned_to=self.request.user)
                            )
        ActivityReadLog.objects.create(
                            model = 'Ticket',
                            user = self.request.user,
                            headers = self.request.headers,
                            activity = f'{self.request.user} queried Closed Tickets List'
                        )
        return queryset



class CommentViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, ]
    authenticatation_classes = [TokenAuthentication, ]

    def get_serializer_class(self, *args, **kwargs):
        if self.action in ['create', 'update', 'put', 'patch']:
            return TicketCommentCreateUpdateSerializer
        return TicketCommentListDetailerializer



    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        user = request.user
        data["user"] = user.pk
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


    def get_queryset(self, *args, **kwargs):
        queryset = Comment.objects.select_related('ticket')
        ticket_id = self.request.query_params.get('id', None)
        if ticket_id is not None:
            ticket = get_ticket(ticket_id)
            queryset = ticket.comments.select_related(
                                                    'user',
                                                    'ticket'
                                                ).order_by('id')
            print(queryset)
        return queryset





from django.db.models import Q as ComplexQueryLookUp
from django.contrib import messages
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets, generics, permissions, status
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from django.shortcuts import get_object_or_404
from messaging.models import Feedback
from messaging.serializers import (
                        ContactUsCreateUpdateSerializer,
                        ContactUsListDetailSerializer

                    )


class EnquiryViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    permission_classes = [permissions.AllowAny,]
    queryset = Feedback.objects.all().order_by('-id')


    def get_serializer_class(self, *args, **kwargs):
        if self.action in ['put', 'create', 'update', 'patch']:
            return ContactUsCreateUpdateSerializer
        return ContactUsListDetailSerializer


    def create(self, request, *args, **kwargs):
        draft_request_data = request.data.copy()
        draft_request_data["name"] = draft_request_data.get('name')
        draft_request_data["subject"] = draft_request_data.get('subject')
        draft_request_data["message"] = draft_request_data.get('message')
        draft_request_data["email"] = draft_request_data.get('email')
        serializer = self.get_serializer(data=draft_request_data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        print(request)
        messages.add_message(request, messages.INFO, 'A new Enquiry has been made')
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

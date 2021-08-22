from rest_framework import viewsets, generics, permissions, status
from rest_framework.parsers import FormParser, MultiPartParser
from newsletter.models import Post
from newsletter.serializers import (
                    NewsletterCreateUpdateSerializer,
                    NewsletterListDetailSerializer,
            )
from rest_framework.response import Response


class NewsLetterViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny,]
    # parser_classes = [MultiPartParser, FormParser]
    queryset = Post.objects.all()

    def get_serializer_class(self, *args, **kwargs):
        if self.action in ['create', 'put', 'patch']:
            return NewsletterCreateUpdateSerializer
        return NewsletterListDetailSerializer


    def create(self, request, *args, **kwargs):
        draft_request_data = request.data.copy()
        draft_request_data["title"] = draft_request_data.get('title')
        draft_request_data["image"] = draft_request_data.get('image')
        draft_request_data["content"] = draft_request_data.get('content')
        draft_request_data["author"] = draft_request_data.get('author')
        draft_request_data["published_date"] = draft_request_data.get('published_date')
        serializer = self.get_serializer(data=draft_request_data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


    

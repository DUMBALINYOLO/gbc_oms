from rest_framework import serializers
from newsletter.models import Post
from drf_extra_fields.fields import Base64ImageField


class NewsletterCreateUpdateSerializer(serializers.ModelSerializer):
    image = Base64ImageField(required=True)
    class Meta:
        model = Post
        fields = '__all__'


class NewsletterListDetailSerializer(serializers.ModelSerializer):
    image = serializers.ImageField()
    
    class Meta:
        model = Post
        fields = [
            'id',
            'title',
            'image',
            'content',
            'author',
            'published_date',
        ]

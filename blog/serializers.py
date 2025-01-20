from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField()  
    status = serializers.CharField(source='get_status_display') 

    class Meta:
        model = Post
        fields = ['id', 'title', 'description', 'author', 'publish', 'status']
from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer

class PostViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

from django.shortcuts import render

def react_app(request):
    return render(request, 'blog/react_app.html')
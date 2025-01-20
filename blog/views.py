from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer

class PostViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

# Add the react_app view if you're serving a React frontend
from django.shortcuts import render

def react_app(request):
    return render(request, 'blog/react_app.html')
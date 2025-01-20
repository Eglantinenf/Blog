from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet, react_app

app_name = 'blog'

router = DefaultRouter()
router.register(r'posts', PostViewSet) 

urlpatterns = [
    path('', include(router.urls)), 
    path('react/', react_app, name='react_app'),  
]
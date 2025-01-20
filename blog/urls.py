from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PostViewSet, react_app

# Define the app_name
app_name = 'blog'

router = DefaultRouter()
router.register(r'posts', PostViewSet)  # Register the PostViewSet

urlpatterns = [
    path('', include(router.urls)),  # Include DRF router URLs
    path('react/', react_app, name='react_app'),  # Serve React app at /react/
]
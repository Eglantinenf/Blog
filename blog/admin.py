from django.contrib import admin
from .models import *
# Register your models here.

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'author', 'publish','status']
    ordering = ['title', 'publish']
    list_filter = ['status', 'author', 'publish']
    list_editable = ['status']
    search_fields = ['title', 'description']
    # raw_id_fields = ['author']
    date_hierarchy = 'publish'
    prepopulated_fields = {"slug" : ['title']}
    # list_display_links = ['author']
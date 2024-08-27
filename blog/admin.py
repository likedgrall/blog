from django.contrib import admin
from .models import Post, Video

# Register your models here.

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('img' ,'name', 'description', 'likes')

@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'views', 'date')

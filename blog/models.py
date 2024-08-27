from django.db import models

# Create your models here.

class Post(models.Model):
    img = models.ImageField(upload_to='images/')
    name = models.CharField(max_length=20)
    description = models.TextField()
    likes = models.PositiveIntegerField()

class Video(models.Model):
    embed_code = models.TextField()
    name = models.CharField(max_length=20)
    description = models.TextField()
    views = models.PositiveIntegerField(default=0)
    date = models.DateTimeField(auto_now_add=True)
     
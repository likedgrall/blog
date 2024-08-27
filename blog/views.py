from django.shortcuts import render, redirect
from .models import Post, Video
# Create your views here.

def blog(request):
    posts = Post.objects.all()
    return render(request, './blog/index.html', {'posts':posts})

def addLikes(request):
    if request.method == "POST":
        post_id = request.POST['post_id']
        post = Post.objects.get(id = post_id)
        post.likes += 1
        post.save()
    return redirect("blog")# redirect - перенаправление

def videoBlog(request):
    videos = Video.objects.all()
    return render(request, './blog/videoBlog.html', {'videos':videos})

def formVideo(request):
    if request.method == "POST":
        name = request.POST['name']
        description = request.POST['description']
        embed_code = request.POST['embed_code']
        Video.objects.create(name = name, description = description, embed_code = embed_code)
    return render(request, './blog/formVideo.html')

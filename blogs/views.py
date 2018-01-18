from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404
from django.template import loader
from home.models import BlogPost


def index(request):
    latest_blog = BlogPost.objects.order_by('pub_date')[0]
    return HttpResponse("Hello, world. The latest blog is %s." %latest_blog)

def detail(request, blogpost_id):
    blog = get_object_or_404(BlogPost, id=blogpost_id)
    context = {'blog': blog}
    return render(request, 'blogs/detail.html', context)
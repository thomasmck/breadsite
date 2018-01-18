from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from home.models import BlogPost


def index(request):
    latest_blog = BlogPost.objects.order_by('pub_date')[0]
    return HttpResponse("Hello, world. The latest blog is %s." %latest_blog)

def detail(request, blogpost_id):
    blog = BlogPost.objects.get(id=blogpost_id)
    print(blog)
    template = loader.get_template('blogs/detail.html')
    context = {
        'blog': blog,
    }
    return HttpResponse(template.render(context, request))
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404
from django.template import loader
from .models import BlogPost
from rest_framework import generics
from .serializers import BlogSerializer

class BlogListCreate(generics.ListCreateAPIView):
    # Only return the latest blog
    queryset = BlogPost.objects.all().order_by('-id')
    serializer_class = BlogSerializer

def index(request):
    latest_blogs_list = BlogPost.objects.order_by('pub_date')[:5]
    template = loader.get_template('blogs/index.html')
    for blog in latest_blogs_list:
        print(blog.content)
        blog.content = blog.content[0:120] + "..."
    context = {'latest_blogs_list': latest_blogs_list,
    }
    return HttpResponse(template.render(context, request))

def detail(request, blogpost_id):
    blog = get_object_or_404(BlogPost, id=blogpost_id)
    context = {'blog': blog}
    return render(request, 'blogs/detail.html', context)
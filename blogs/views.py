from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404
from django.template import loader
from home.models import BlogPost


def index(request):
    latest_blogs_list = BlogPost.objects.order_by('pub_date')[:5]
    template = loader.get_template('blogs/index.html')
    context = {'latest_blogs_list': latest_blogs_list,
    }
    return HttpResponse(template.render(context, request))

def detail(request, blogpost_id):
    blog = get_object_or_404(BlogPost, id=blogpost_id)
    context = {'blog': blog}
    return render(request, 'blogs/detail.html', context)
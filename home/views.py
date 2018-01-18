from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import BlogPost, Author


def index(request):
    latest_blogs_list = BlogPost.objects.order_by('pub_date')[:5]
    template = loader.get_template('home/index.html')
    context = {
        'latest_blogs_list': latest_blogs_list,
    }
    return HttpResponse(template.render(context, request))

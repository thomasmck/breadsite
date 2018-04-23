from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404
from django.template import loader
from home.models import BlogPost


def index(request):
    template = loader.get_template('stats/index.html')
    context = {
    }
    return HttpResponse(template.render(context, request))
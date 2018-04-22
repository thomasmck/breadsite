from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404
from django.template import loader
from home.models import BlogPost


def index(request):
    return HttpResponse("Hello, this is a placeholder for the stats page")
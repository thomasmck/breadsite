from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the blogs index.")

def detail(request, blogpost_id):
    response = "You're looking at blogpost %s" % blogpost_id
    return HttpResponse(response)
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404
from django.template import loader
from home.models import Author


def detail(request, author_id):
    author = get_object_or_404(Author, id=author_id)
    context = {'author': author}
    return render(request, 'author/detail.html', context)

def index(request):
    template = loader.get_template('author/index.html')
    author_list = Author.objects.all()
    context = {
        'author_list': author_list,
    }
    return HttpResponse(template.render(context, request))
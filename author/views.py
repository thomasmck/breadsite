from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404
from django.template import loader
from author.models import Author
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponseRedirect
from author.forms import DocumentForm
from .serializers import AuthorSerializer
from rest_framework import generics

class AuthorListCreate(generics.ListCreateAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

def list(request):
    # Handle file upload
    if request.method == 'POST':
        form = DocumentForm(request.POST, request.FILES)
        if form.is_valid():
            newdoc = Author(docfile = request.FILES['docfile'])
            newdoc.save()

            # Redirect to the document list after POST
            return HttpResponseRedirect(reverse('myproject.myapp.views.list'))
    else:
        form = DocumentForm() # A empty, unbound form

    # Load documents for the list page
    documents = Author.objects.all()

    # Render list page with the documents and the form
    return render_to_response(
        'author/list.html',
        {'documents': documents, 'form': form},
        context_instance=RequestContext(request)
    )

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
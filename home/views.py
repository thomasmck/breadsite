from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import BlogPost, Author
from matplotlib import pylab
from pylab import *
import PIL, PIL.Image, io

def getImage(request):
    # Construct the graph
    x = arange(0, 2*pi, 0.01)
    s = cos(x)**2
    plot(x, s)

    xlabel('xlabel(X)')
    ylabel('ylabel(Y)')
    title('Simple Graph!')
    grid(True)

    # Store image in a string buffer
    buffer = io.BytesIO()
    canvas = pylab.get_current_fig_manager().canvas
    canvas.draw()
    pilImage = PIL.Image.frombytes("RGB", canvas.get_width_height(), canvas.tostring_rgb())
    pilImage.save(buffer, "PNG")
    pylab.close()
    return buffer

def index(request):
    latest_blogs_list = BlogPost.objects.order_by('pub_date')[:5]
    template = loader.get_template('home/index.html')
    context = {
        'latest_blogs_list': latest_blogs_list,
    }
    buffer = getImage(request)
    # return HttpResponse(template.render(context, request))
    return HttpResponse(buffer.getvalue(), content_type="image/png")

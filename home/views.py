from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import BlogPost, Author, Temperature
import matplotlib
matplotlib.use('Agg')
from matplotlib import pylab
from pylab import *
import PIL, PIL.Image, io

def getImage(request):
    # Construct the graph
    x = []
    s = []
    target = []
    # Need a way to distinguish between different runs
    temp_latest = Temperature.objects.order_by('-rec_date')[0]
    temps = Temperature.objects.filter(rec_date__year=temp_latest.rec_date.year,
                             rec_date__month=temp_latest.rec_date.month,
                             rec_date__day=temp_latest.rec_date.day)
    for temp in temps:
        x.append(temp.rec_date)
        s.append(temp.temp)
        target.append(20.0)
    date_line, = plot(x, s)
    target_line, = plot(x, target)

    xlabel('Time')
    ylabel('Temperature (°C)')
    legend([date_line, target_line], ["Data", "Target"])
    title('Bread Box Temperature Control')
    grid(True)

    # Store image in a string buffer
    buffer = io.BytesIO()
    canvas = pylab.get_current_fig_manager().canvas
    canvas.draw()
    pilImage = PIL.Image.frombytes("RGB", canvas.get_width_height(), canvas.tostring_rgb())
    pilImage.save("./home/static/home/graph.png")
    pylab.close()

def index(request):
    latest_blogs_list = BlogPost.objects.order_by('pub_date')[:5]
    template = loader.get_template('home/index.html')
    context = {
        'latest_blogs_list': latest_blogs_list,
    }
    getImage(request)
    return HttpResponse(template.render(context, request))
    # return HttpResponse(buffer.getvalue(), content_type="image/png")

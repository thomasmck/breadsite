from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Temperature
from author.models import Author
from blogs.models import BlogPost
import matplotlib
matplotlib.use('Agg')
from matplotlib import pylab
from pylab import *
import PIL, PIL.Image, io
import numpy as np
import datetime
import matplotlib.pyplot as plt
import os
from utils import util
from .serializers import TemperatureSerializer
from rest_framework import generics

class TemperatureListCreate(generics.ListCreateAPIView):
    queryset = Temperature.objects.all()
    serializer_class = TemperatureSerializer

def generate_graph_image(data, multi_y=False):
    # Line format [["title", "file_name"], [x, y, "x_label", "y_label", "line_label"], etc]
    # Construct the graph
    # Function can handle graphs with single or multiple y_axis

    lines = []
    names = []

    fig, ax1 = plt.subplots()
    plot_axis = {"1": ax1}
    # Selection of graph line colour options
    # Todo: find way to not rely on limited list
    colour_options = ['C0', 'C1', 'C2', 'C3', 'C4']
    # Detect whether we have multiple y_axis
    if len(data) > 2:
        for i in range(2, len(data)):
            if not multi_y:
                plot_axis[str(i)] = ax1
            else:
                # If multi_y then create seperate axis for second data_set
                ax = ax1.twinx()
                plot_axis[str(i)] = ax
    for i in range(1, len(data)):
        ax = plot_axis[str(i)]
        line, = ax.plot(data[i][0], data[i][1], colour_options[i])
        lines.append(line)
        names.append(data[i][4])
        ax.set_ylabel(data[i][3])

    # Only use x_label name data from data set 1
    ax.set_xlabel(data[1][2])
    legend(lines, names)
    title(data[0][0])
    grid(True)
    # Store image in a string buffer
    buffer = io.BytesIO()
    canvas = pylab.get_current_fig_manager().canvas
    canvas.draw()
    pilImage = PIL.Image.frombytes("RGB", canvas.get_width_height(), canvas.tostring_rgb())
    # Construct a static image which we include in the view
    pilImage.save("./home/static/home/%s.png" % data[0][1])
    pylab.close()

def generate_temp_graph(request):
    # Construct the graph
    x = []
    s = []
    target = []
    target_temp = 24.0
    # Display all the temperature data from the last day with data
    temp_latest = Temperature.objects.order_by('-rec_date')[0]
    temps = Temperature.objects.filter(rec_date__year=temp_latest.rec_date.year,
                             rec_date__month=temp_latest.rec_date.month,
                             rec_date__day=temp_latest.rec_date.day)
    for temp in temps:
        x.append(temp.rec_date)
        s.append(temp.temp)
        target.append(target_temp)

    data = [['Bread Box Temperature Control', 'graph'],
            [x, s, 'Time', 'Temperature (°C)', "Data"],
            [x, target, 'Time','Temperature (°C)', "Target"]]
    generate_graph_image(data)

def calculate_total_stats():
    # Calculate standard deviation, mean, etc
    # Track changes in std dev over time
    temps = Temperature.objects.values_list('temp', flat=True)
    std_dev = np.std(temps)
    mean = np.mean(temps)

    return np.around([std_dev, mean], decimals=1)

def calculate_running_stats():
    runs = util.get_separate_runs()
    std_devs = []
    avgs = []
    # Reverse order from oldest to newest
    for run in runs[::-1]:
        std_devs.append(np.std(run))
        avgs.append(np.average(run))
    return std_devs, avgs

def generate_stddev_graph(request):
    std_devs, avgs = calculate_running_stats()
    # Run std_dev and run avg is y axis
    x = []
    # run number is x-axis
    n = 1
    for std_dev in std_devs:
        x.append(n)
        n += 1

    data = [['Bread Box Temperature Control', 'stddev'],
            [x, std_devs, 'Run no.','Std dev', "Std dev"],
            [x, avgs, 'Run no.','Average', "Average"]]
    generate_graph_image(data, multi_y=True)

def index(request):
    # Display latest 5 blog posts only
    latest_blogs_list = BlogPost.objects.order_by('pub_date')[:5]
    template = loader.get_template('home/index.html')
    context = {
        'latest_blogs_list': latest_blogs_list,
    }
    # Find if we have regenerated the graph since the latest temp data was added to the db
    # If not then regenerate
    mod_time = datetime.datetime.fromtimestamp(os.path.getmtime(os.getcwd() + "/home/static/home"))
    temp_latest = Temperature.objects.order_by('-rec_date')[0]
    # Remove timezone data so it is in the same format as mod_time
    latest_temp_date = datetime.datetime.replace(temp_latest.rec_date, tzinfo=None)
    if (latest_temp_date - mod_time) > datetime.timedelta(0):
        generate_temp_graph(request)
        generate_stddev_graph(request)

    return HttpResponse(template.render(context, request))
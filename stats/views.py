from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404
from django.http import HttpResponse
from django.template import loader
from home.models import BlogPost, Temperature
import matplotlib
matplotlib.use('Agg')
from matplotlib import pylab
from pylab import *
import PIL, PIL.Image, io
import numpy as np
import pandas
import datetime
import sqlite3
import matplotlib.pyplot as plt
import os
import collections

def generate_stats():
    conn = sqlite3.connect("db.sqlite3")
    dataset = pandas.read_sql_query("SELECT * from home_temperature", conn)
    print(dataset)
    print(dataset.first_valid_index)

def generate_total_stats():
    # Generate stats based on the total data set
    all_data = Temperature.objects.values_list('temp', flat=True)
    std_dev = np.std(all_data)
    mean = np.mean(all_data)
    count = len(all_data)
    max = np.max(all_data)
    min = np.min(all_data)
    return collections.{"std_dev": std_dev, "mean": mean, "count": count, "max": max, "min": min}

def generate_seperate_run_stats():
    # Generate stats based on comparing individual runs
    pass

def index(request):
    template = loader.get_template('stats/index.html')
    generate_stats()
    context = {
        'total_stats': generate_total_stats(),
    }
    return HttpResponse(template.render(context, request))
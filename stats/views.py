from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404
from django.http import HttpResponse
from django.template import loader, Context
from home.models import Temperature
from blogs.models import BlogPost
import matplotlib
matplotlib.use('Agg')
from matplotlib import pylab
from pylab import *
import PIL, PIL.Image, io
import numpy as np
#import pandas
import datetime
import sqlite3
import matplotlib.pyplot as plt
import os
import collections
from utils import util

"""
def generate_stats():
    conn = sqlite3.connect("db.sqlite3")
    dataset = pandas.read_sql_query("SELECT * from home_temperature", conn)
    print(dataset)
    print(dataset.first_valid_index)
"""

def number_of_datapoints():
    return len(Temperature.objects.values_list('temp', flat=True))

def number_of_runs():
    return len(util.get_separate_runs())

def generate_total_stats():
    stats = generate_stats(Temperature.objects.values_list('temp', flat=True))
    stats["number of runs"] = number_of_runs()
    return stats

def generate_stats(data):
    # Generate stats based on the total data set
    num_data = number_of_datapoints()
    std_dev = np.around(np.std(data), 2) # restrict significant figures
    mean = np.around(np.mean(data), 2)
    count = len(data)
    max = np.max(data)
    min = np.min(data)
    return {"number of datapoints": num_data, "std_dev": std_dev, "mean": mean,
            "count": count, "max": max, "min": min}

def generate_seperate_run_stats():
    # Generate stats based on comparing individual runs
    # TODO: gathering this data is slow so should consider writing to db
    stats_list = []
    runs = util.get_separate_runs()[0:2]
    for run in runs:
        stats = generate_stats(run)
        stats_list.append(stats)
    return stats_list

def index(request):
    template = loader.get_template('stats/index.html')
    total_stats = generate_total_stats()
    run_stats = generate_seperate_run_stats()
    context = {
        'total_stats': total_stats,
        'run_stats': run_stats,
    }
    return HttpResponse(template.render(context, request))
from home.models import Temperature
import datetime

# TODO: Move common data selection/generation functions here

def get_separate_runs():
    # Split out data from db into the seperate runs
    temps = Temperature.objects.order_by('-rec_date')
    temp_runs = []
    run = []
    # If two readings are less then 10 seconds apart assume they are from the same run
    # Note that Arduino is reading/writing the temp every ~1 second
    time_range = temps[0].rec_date - datetime.timedelta(seconds=10)
    for temp in temps:
        if temp.rec_date < time_range:
            temp_runs.append(run)
            run = []
        run.append(temp.temp)
        time_range = temp.rec_date - datetime.timedelta(seconds=10)
    return temp_runs
from django.db import models
from author.models import Author


# Create your models here.
class Temperature(models.Model):
    # Also need to relate the temperature controller settings to the results we are achieving
    rec_date = models.DateTimeField('datetime recorded')
    temp = models.FloatField()



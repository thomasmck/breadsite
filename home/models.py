from django.db import models
from author.models import Author


# Create your models here.
class BlogPost(models.Model):
    pub_date = models.DateField('date published')
    title = models.CharField(max_length=200)
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name='author')
    content = models.CharField(max_length=5000)

    def __str__(self):
        return self.title


class Temperature(models.Model):
    # Also need to relate the temperature controller settings to the results we are achieving
    rec_date = models.DateTimeField('datetime recorded')
    temp = models.FloatField()



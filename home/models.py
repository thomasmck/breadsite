from django.db import models


# Create your models here.
class Author(models.Model):
    name = models.CharField(max_length=200)
    bio = models.CharField(max_length=1000)

    def __str__(self):
        return self.name


class BlogPost(models.Model):
    pub_date = models.DateField('date published')
    title = models.CharField(max_length=200)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    content = models.CharField(max_length=5000)

    def __str__(self):
        return self.title

from django.db import models

# Create your models here.
class Author(models.Model):
    name = models.CharField(max_length=200)
    bio = models.CharField(max_length=1000)
    image = models.FileField(upload_to='author/image')

    def __str__(self):
        return self.name
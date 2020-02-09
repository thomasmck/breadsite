from django.db import models

# Create your models here.
# Create your models here.
class Temperature(models.Model):
    # Also need to relate the temperature controller settings to the results we are achieving
    rec_date = models.DateTimeField('datetime recorded')
    temp = models.FloatField()

    objects = models.Manager()

    def __str__(self):
        return str(self.temp)

    class Meta:
        ordering = (['rec_date'])

class BlogPost(models.Model):
    pub_date = models.DateField('date published')
    title = models.CharField(max_length=200)
    url = models.CharField(max_length=400)
    # Won't serve image fields via REST, maybe just share location?
    image = models.CharField(max_length=200)

    def __str__(self):
        return self.title
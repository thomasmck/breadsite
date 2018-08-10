from django.contrib import admin
from .models import Temperature
from blogs.models import BlogPost
from author.models import Author

# Register your models here.
admin.site.register(Author)
admin.site.register(BlogPost)
admin.site.register(Temperature)
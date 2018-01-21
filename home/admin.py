from django.contrib import admin
from .models import Author, BlogPost, Temperature

# Register your models here.
admin.site.register(Author)
admin.site.register(BlogPost)
admin.site.register(Temperature)
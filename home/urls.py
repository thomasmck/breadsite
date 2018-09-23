from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/temp/', views.TemperatureListCreate.as_view())
]
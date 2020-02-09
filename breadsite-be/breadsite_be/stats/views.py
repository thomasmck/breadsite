from django.contrib.auth.models import User, Group
from .models import Temperature, BlogPost
from rest_framework import viewsets, generics
from breadsite_be.stats.serializers import UserSerializer, GroupSerializer, TemperatureSerializer, BlogPostSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class BlogPostViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    #queryset = BlogPost.objects.all()
    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        
        number = self.request.query_params.get('number', None)
        if number is not None:
            queryset = BlogPost.objects.all().order_by('-pub_date')[:int(number)]
        else:
            queryset = BlogPost.objects.all()
        return queryset

    serializer_class = BlogPostSerializer


class TemperatureViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows temperature stats to be viewed or edited
    """

    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        
        from_date = self.request.query_params.get('from_date', None)
        if from_date is not None:
            print(from_date)
            year, month, day = from_date.split("-")
            print(year)
            queryset = Temperature.objects.filter(rec_date__year=year, rec_date__month=month, rec_date__day=day)
        else:
            queryset = Temperature.objects.all()
        return queryset

    serializer_class = TemperatureSerializer
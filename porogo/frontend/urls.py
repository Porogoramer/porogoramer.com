'''Register the urls for the frontend'''
from django.urls import re_path
from .views import index

APP_NAME = 'frontend'

urlpatterns = [
    re_path(r'', index, name=''),
]

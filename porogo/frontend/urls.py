'''Register the urls for the frontend'''
from django.urls import path, re_path
from .views import index

APP_NAME = 'frontend'

urlpatterns = [
    path('', index, name=''),
    re_path(r'^[^(/api|/media)]*$', index, name=''),
]

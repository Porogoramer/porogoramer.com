from django.urls import path, re_path
from .views import index

app_name = 'frontend'

urlpatterns = [
    path('/', index, name=''),
    re_path(r'^.*$', index, name=''),
]
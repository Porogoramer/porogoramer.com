'''Defines URL endpoints and their views'''
from django.urls import path
from .views import DevelopersView

urlpatterns = [
    path('developers', DevelopersView.as_view()),
]
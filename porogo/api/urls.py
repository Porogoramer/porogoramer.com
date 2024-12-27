'''Defines URL endpoints and their views'''
from django.urls import path
from .views import DevelopersView, DeveloperView, ProjectsView, ProjectView

urlpatterns = [
    path('developers/', DevelopersView.as_view()),
    path('developer/<str:name>/', DeveloperView.as_view()),
    path('projects/', ProjectsView.as_view()),
    path('project/<str:name>/', ProjectView.as_view()),
]
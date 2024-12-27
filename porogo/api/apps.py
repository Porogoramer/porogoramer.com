'''Create DJango app for the API'''
from django.apps import AppConfig

class ApiConfig(AppConfig):
    '''Defines the ApiConfig for the API'''
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'

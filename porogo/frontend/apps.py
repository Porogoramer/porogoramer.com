'''Creates a DJango app for the frontend'''
from django.apps import AppConfig


class FrontendConfig(AppConfig):
    '''Defines Config for the frontend app'''
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'frontend'

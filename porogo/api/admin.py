'''Registers all models to the admin dashboard'''
from django.contrib import admin
from .models import Developer, Project, Language, URL, Image, Tag

admin.site.register(Developer)
admin.site.register(Project)
admin.site.register(Language)
admin.site.register(URL)
admin.site.register(Image)
admin.site.register(Tag)

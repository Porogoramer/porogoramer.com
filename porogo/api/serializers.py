"""Define Serializers to be used in different views"""
from rest_framework import serializers
from .models import Developer, Image, Project, Language, URL

class LanguageSerializer(serializers.ModelSerializer):
    """Serializer for Language Model"""
    class Meta:
        model = Language
        fields = ('name', )

class URLSerializer(serializers.ModelSerializer):
    """Serializer for URL Model"""
    class Meta:
        model = URL
        fields = ('url', )

class ImageSerializer(serializers.ModelSerializer):
    """Serializer for Image Model"""
    class Meta:
        model = Image
        fields = '__all__'

class DevelopersSerializer(serializers.ModelSerializer):
    """Serializer for Developer Model for the /developers endpoint"""
    class Meta:
        model = Developer
        fields = ('id', 'first_name', 'last_name', 'github_name', 'picture')
        depth = 1

class DeveloperSerializer(serializers.ModelSerializer):
    """Serializer for Developer Model for the /developer endpoint"""
    featured_project = serializers.SerializerMethodField()

    class Meta:
        model = Developer
        fields = '__all__'
        depth = 1

    def get_featured_project(self, obj):
        """Replaces the project object with only its name"""
        return obj.featured_project.name.lower() if obj.featured_project else None
    
class ProjectsSerializer(serializers.ModelSerializer):
    """Serializer for Projects Model for the /projects endpoint"""
    languages = LanguageSerializer(many=True)
    github_link = URLSerializer(many=True)

    class Meta:
        model = Project
        fields = ('id', 'name', 'short_description', 'icon', 'github_link', 'languages')
        depth = 1

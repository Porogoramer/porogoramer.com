"""Define Serializers to be used in different views"""
from rest_framework import serializers
from .models import Developer, Image

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
        print(obj)
        return obj.featured_project.name.lower() if obj.featured_project else None
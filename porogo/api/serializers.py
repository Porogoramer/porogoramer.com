from rest_framework import serializers
from .models import Developer, Image

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'

class DevelopersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Developer
        fields = ('id', 'first_name', 'last_name', 'github_name', 'picture')
        depth = 1

class DeveloperSerializer(serializers.ModelSerializer):
    featured_project = serializers.SerializerMethodField()

    class Meta:
        model = Developer
        fields = '__all__'
        depth = 1

    def get_featured_project(self, obj):
        print(obj)
        return obj.featured_project.name.lower() if obj.featured_project else None
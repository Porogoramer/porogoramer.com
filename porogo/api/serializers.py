from rest_framework import serializers
from .models import Developer, Image

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'

class DeveloperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Developer
        fields = ('id', 'first_name', 'last_name', 'github_name', 'picture')
        depth = 1

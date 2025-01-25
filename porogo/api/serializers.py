"""Define Serializers to be used in different views"""
from rest_framework import serializers
from .models import Developer, Image, Project

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
    class Meta:
        model = Developer
        fields = '__all__'
        depth = 1

    
class ProjectsSerializer(serializers.ModelSerializer):
    """Serializer for Projects Model for the /projects endpoint"""
    languages = serializers.SerializerMethodField()
    github_link = serializers.SerializerMethodField()
    contributors = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = ('id', 'name', 'short_description', 'icon', 'github_link', 'contributors', 'languages', 'end_year', 'start_year')
        depth = 1

    def get_languages(self, obj):
        """Replaces list of languages with array of language names"""
        languages_names = []
        if obj.languages.exists():
            for lang in obj.languages.all():
                languages_names.append(lang.name)

        return languages_names
    
    def get_github_link(self, obj):
        """Replaces list of github links with array of links"""
        git_links = []
        if obj.github_link.exists():
            for link in obj.github_link.all():
                git_links.append(link.url)

        return git_links
    
    def get_contributors(self, obj):
        """Replaces list of contributors with array of names"""
        names = []
        if obj.contributors.exists():
            for contrib in obj.contributors.all():
                names.append(contrib.first_name)

        return names

class ProjectSerializer(serializers.ModelSerializer):
    """Serializer for Project Model for the /project/:name endpoint"""
    languages = serializers.SerializerMethodField()
    github_link = serializers.SerializerMethodField()
    contributors = serializers.SerializerMethodField()
    tags = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = '__all__'
        depth = 1

    def get_languages(self, obj):
        """Replaces list of languages with array of language names"""
        languages_names = []
        if obj.languages.exists():
            for lang in obj.languages.all():
                languages_names.append(lang.name)

        return languages_names
    
    def get_github_link(self, obj):
        """Replaces list of github links with array of links"""
        git_links = []
        if obj.github_link.exists():
            for link in obj.github_link.all():
                git_links.append(link.url)

        return git_links
    
    def get_contributors(self, obj):
        """Replaces list of contributors with array of names"""
        names = []
        if obj.contributors.exists():
            for contrib in obj.contributors.all():
                names.append(contrib.first_name)

        return names
    
    def get_tags(self, obj):
        """Replaces list of tags with array of tag names"""
        tags = []
        if obj.tags.exists():
            for tag in obj.tags.all():
                tags.append(tag.tag)

        return tags
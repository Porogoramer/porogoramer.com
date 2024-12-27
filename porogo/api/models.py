'''Define modules used by the backend'''
from datetime import date
from django.db import models
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

def project_date_validator(value):
    """
    Checks if a project year is between 2020 and the
    current year.

    Params:
        value (int): Year to check
    """
    if value < 2020 or value > date.today().year:
        raise ValidationError(
            _("%(value)s must be between 2020 and the current year"),
            params={"value": value},
        )



class URL(models.Model):
    """
    Stores URLs for many to many relationships
    
    Attributes:
        url (string): URL to store
    """
    url = models.URLField(max_length=200)

def get_dest_path(_, filename):
    """
    Get path for a given file based on its filename
    """
    filename = filename.replace(" ", "")
    index_of_dash = filename.find('-')

    if index_of_dash == -1:
        return f'other/{filename}' 
    return f'{filename[None:index_of_dash]}/{filename}'

class Image(models.Model):
    """
    Stores Images for many to many relationships
    
    Attributes:
        img (File): Image file
        desc (str): alt text for the img
        hover (str): hover text to display for the img
    """
    img = models.ImageField(upload_to=get_dest_path)
    desc = models.CharField(max_length=64)
    hover = models.CharField(max_length=64, null=True)

class Language(models.Model):
    """
    Stores Languages for many to many relationships
    
    Attributes:
        name (string): language name to store
    """
    name = models.CharField(max_length=16, unique=True)

class Developer(models.Model):
    """
    Stores Developers on the site

    Attributes:
        first_name (str): First name of dev
        last_name (str): Last name of dev
        email (str): Email of dev
        short_description (str): Description of the dev
        description_experience (str): Description of the dev's experience
        description_personal (str): Description of the dev's personal interests
        github_name (str): Github username of dev
        linkedin_url (str): Linkedin url for the dev
        other_url (str): Url to another site
        other_url_type (str): Type of the other url
        picture (File): Profile picture of the dev
        featured_project (Project): Project that the user wants to display
    """
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email = models.EmailField()
    short_description = models.TextField(max_length=512)
    description_experience = models.TextField(max_length=1024)
    description_personal = models.TextField(max_length=1024)
    github_name = models.CharField(max_length=20, unique=True)
    linkedin_url = models.URLField(max_length=200, null=True, blank=True)
    other_url = models.URLField(max_length=200, null=True, blank=True)
    other_url_type = models.CharField(max_length=20, null=True, blank=True)
    picture = models.ForeignKey(Image, on_delete=models.CASCADE)
    featured_project = models.ForeignKey("Project", null=True, blank=True, on_delete=models.CASCADE)
    models.UniqueConstraint(fields=["first_name", "last_name"], name="unique_full_name")

class Tag(models.Model):
    """
    Stores Tags for many to many relationships

    Attributes:
        tag (str): name of the tag
    """
    tag = models.CharField(max_length=16, unique=True)

class Project(models.Model):
    """
    Stores Projects on the site

    Attributes:
        name (str): Name of the project
        short_description (str): Short description of the project
        description_intro (str): Introduction of the project
        description_body (str): Description body of the project
        icon (File): Icon of the project
        github_link (URL[]): github url for the repo
        youtube_url (str): Youtube Url for showcase video
        languages (Language[]): List of languages used in the project
        tags (Tag[]): List of Tags for the project
        contributors (Developer[]): List of contributors to the project
        project_status (str): Current status of the project
        start_year (int): Year the project was started
        end_year (int): Year the project ended
    """
    PROJECT_STATUSES = (
        ("O", "Ongoing"),
        ("U", "Upcoming"),
        ("C", "Completed"),
        ("H", "On Hold"),
    )

    name = models.CharField(max_length=31, unique=True)
    short_description = models.TextField(max_length=255)
    description_intro = models.TextField(max_length=512)
    description_body = models.TextField(max_length=1024)
    icon = models.ForeignKey(Image, on_delete=models.CASCADE)
    github_link = models.ManyToManyField(URL)
    youtube_url = models.URLField(max_length=200, null=True, blank=True)
    languages = models.ManyToManyField(Language)
    tags = models.ManyToManyField(Tag)
    contributors = models.ManyToManyField(Developer)
    project_status = models.CharField(max_length=1, choices=PROJECT_STATUSES)
    start_year = models.IntegerField(validators=[project_date_validator])
    end_year = models.IntegerField(validators=[project_date_validator], null=True, blank=True)

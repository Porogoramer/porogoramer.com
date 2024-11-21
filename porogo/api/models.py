from django.db import models

class URL(models.Model):
    """
    Stores URLs for many to many relationships
    
    Attributes:
        url (string): URL to store
    """
    url = models.URLField(max_length=200)

def get_dest_path(_, filename):
    filename = filename.replace(" ", "")
    index_of_dash = filename.find('-')

    if index_of_dash == -1:
        return f'media/other/{filename}' 
    return f'media/{filename[None:index_of_dash]}/{filename}'

class Image(models.Model):
    """
    Stores URLs for many to many relationships
    
    Attributes:
        url (string): URL to store
    """
    img = models.FileField(upload_to=get_dest_path)
    desc = models.CharField(max_length=32)

class Language(models.Model):
    name = models.CharField(max_length=16, unique=True)

class Developer(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email = models.EmailField()
    short_description = models.TextField(max_length=512)
    description_experience = models.TextField(max_length=1024)
    description_personal = models.TextField(max_length=1024)
    github_name = models.CharField(max_length=20, unique=True)
    linkedin_url = models.URLField(max_length=200, null=True)
    other_url = models.URLField(max_length=200, null=True)
    other_url_type = models.CharField(max_length=20, null=True)
    picture = models.ForeignKey(Image, on_delete=models.CASCADE)
    featured_project = models.ForeignKey("Project", null=True, on_delete=models.CASCADE)
    models.UniqueConstraint(fields=["first_name", "last_name"], name="unique_full_name")

class Tag(models.Model):
    tag = models.CharField(max_length=16, unique=True)

class Project(models.Model):
    PROJECT_STATUSES = {
        "O": "Ongoing",
        "U": "Upcoming",
        "C": "Completed",
        "H": "On Hold",
    }

    name = models.CharField(max_length=31, unique=True)
    short_description = models.TextField(max_length=255)
    description_intro = models.TextField(max_length=512)
    description_body = models.TextField(max_length=1024)
    icon = models.ForeignKey(Image, on_delete=models.CASCADE)
    github_link = models.ForeignKey(URL, on_delete=models.CASCADE)
    youtube_url = models.URLField(max_length=200, null=True)
    languages = models.ManyToManyField(Language)
    tags = models.ManyToManyField(Tag)
    contributors = models.ManyToManyField(Developer)
    project_status = models.CharField(max_length=1, choices=PROJECT_STATUSES)
    start_year = models.DateField()
    end_year = models.DateField(null=True)

from django.db import models

# Create your models here.
class URL(models.Model):
    url = models.URLField(max_length=200)

class Image(models.Model):
    img = models.FileField()

class Language(models.Model):
    name = models.CharField(max_length=16, unique=True)

class Developer(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    short_description = models.TextField(max_length=512)
    description_intro = models.TextField(max_length=512)
    description_body = models.TextField(max_length=1024)
    github_name = models.CharField(max_length=20, unique=True)
    linkedin_url = models.URLField(max_length=200, null=True)
    other_url = models.URLField(max_length=200, null=True)
    other_url_type = models.CharField(max_length=20, null=True)
    picture = models.ForeignKey(Image, on_delete=models.CASCADE)
    models.UniqueConstraint(fields=["first_name", "last_name"], name="unique_full_name")

class Project(models.Model):
    PROJECT_STATUSES = {
        "O": "Ongoing",
        "U": "Upcoming",
        "C": "Completed",
        "H": "On Hold",
    }

    name = models.CharField(max_length=32, unique=True)
    short_description = models.TextField(max_length=255)
    description_intro = models.TextField(max_length=512)
    description_body = models.TextField(max_length=1024)
    icon = models.ForeignKey(Image, on_delete=models.CASCADE)
    github_link = models.ForeignKey(URL, on_delete=models.CASCADE)
    youtube_url = models.URLField(max_length=200, null=True)
    languages = models.ManyToManyField(Language)
    contributors = models.ManyToManyField(Developer)
    project_status = models.CharField(max_length=1, choices=PROJECT_STATUSES)
    start_year = models.DateField()
    end_year = models.DateField(null=True)


from django.db import models

# Create your models here.
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

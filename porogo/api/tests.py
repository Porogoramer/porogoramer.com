'''Unit tests'''
from django.core.files.uploadedfile import SimpleUploadedFile
from django.test import TestCase
from .models import Developer, Image

# Create your tests here.
class DeveloperTest(TestCase):
    '''Test for Developer Model'''
    def setUp(self):
        Image.objects.create(
            img=SimpleUploadedFile(
                name="cat.png",
                content=b"picture of a cat"
            ),
            desc="A picture of a cat"
        )

        Developer.objects.create(
            first_name="Axel",
            last_name="Brochu",
            email="axel@porogoramer.com",
            short_description="I am a porogoramer",
            description_experience="I studied at Dawson",
            description_personal="I love cats",
            github_name="Brochua",
            linkedin_url="linkedin.com/brochua",
            other_url="gitlab.com/brochua1",
            other_url_type="gitlab",
            picture=Image.objects.get(desc="A picture of a cat"),
        )
        
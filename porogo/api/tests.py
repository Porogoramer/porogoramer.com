"""Unit tests"""
import shutil
from rest_framework.test import APIRequestFactory
from django.core.files.uploadedfile import SimpleUploadedFile
from django.test import TestCase, override_settings
from django.db.models import Q
from .models import Developer, Image, Project, URL, Tag, Language

TEST_DATA = 'test_data'

@override_settings(MEDIA_ROOT=(TEST_DATA + '/media'))
class DeveloperEndpointTest(TestCase):
    """Tests for the /developer and /developers endpoints"""
    client = APIRequestFactory()
    expected_developers = [
        {
            "id":1,
            "first_name":"Axel",
            "last_name":"Brochu",
            "github_name":"Brochua",
            "picture":{
                "id":1,
                "img":"http://testserver/media/other/cat.png",
                "desc":"A picture of a cat",
                "hover":"Cat!"
            }
        },
        {
            "id":2,
            "first_name":"Yaneric",
            "last_name":"Roussy",
            "github_name":"yan2arb4",
            "picture":{
                "id":2,
                "img":"http://testserver/media/other/dog.png",
                "desc":"A picture of a dog",
                "hover":"Important dog!"
            }
        },
        {
            "id":3,
            "first_name":"Noah",
            "last_name":"Gelinas",
            "github_name":"noahgelinas",
            "picture":{
                "id":1,
                "img":"http://testserver/media/other/cat.png",
                "desc":"A picture of a cat",
                "hover":"Cat!"
            }
        }
    ]
    expected_developer = [
        {
            "id":1,
            "featured_project":None,
            "first_name":"Axel",
            "last_name":"Brochu",
            "email":"axel@porogoramer.com",
            "description_experience":"I studied at Dawson",
            "description_personal":"I love cats",
            "github_name":"Brochua",
            "linkedin_url":"linkedin.com/brochua",
            "other_url":"gitlab.com/brochua1",
            "other_url_type":"gitlab",
            "picture":{
                "id":1,
                "img":"http://testserver/media/other/cat.png",
                "desc":"A picture of a cat",
                "hover":"Cat!"
            },
            "picture_arms":{
                "id":1,
                "img":"http://testserver/media/other/cat.png",
                "desc":"A picture of a cat",
                "hover":"Cat!"
            },
            "picture_personal":{
                "id":1,
                "img":"http://testserver/media/other/cat.png",
                "desc":"A picture of a cat",
                "hover":"Cat!"
            }
        },
        {
            "id":2,
            "featured_project":"dnd app backend",
            "first_name":"Yaneric",
            "last_name":"Roussy",
            "email":"yaneric@porogoramer.com",
            "short_description":"I am also porogoramer",
            "description_experience":"I studied at Edouard",
            "description_personal":"I love asp.NET core",
            "github_name":"yan2arb4",
            "linkedin_url":"linkedin.com/yan",
            "other_url":"gitkraken.com/yanou",
            "other_url_type":"gitkraken",
            "picture":{
                "id":2,
                "img":"http://testserver/media/other/dog.png",
                "desc":"A picture of a dog",
                "hover":"Important dog!"
            },
            "picture_arms":{
                "id":1,
                "img":"http://testserver/media/other/cat.png",
                "desc":"A picture of a cat",
                "hover":"Cat!"
            },
            "picture_personal":{
                "id":1,
                "img":"http://testserver/media/other/cat.png",
                "desc":"A picture of a cat",
                "hover":"Cat!"
            }
        },
        {
            "id":3,
            "featured_project":None,
            "first_name":"Noah",
            "last_name":"Gelinas",
            "email":"noahg@porogoramer.com",
            "short_description":"I am also also porogoramer",
            "description_experience":"I studied at Dawson",
            "description_personal":"I love React core",
            "github_name":"noahgelinas",
            "linkedin_url":"linkedin.com/noah",
            "other_url":"gitlab.com/noahg",
            "other_url_type":"gitlab",
            "picture":{
                "id":1,
                "img":"http://testserver/media/other/cat.png",
                "desc":"A picture of a cat",
                "hover":"Cat!"
            },
            "picture_arms":{
                "id":1,
                "img":"http://testserver/media/other/cat.png",
                "desc":"A picture of a cat",
                "hover":"Cat!"
            },
            "picture_personal":{
                "id":1,
                "img":"http://testserver/media/other/cat.png",
                "desc":"A picture of a cat",
                "hover":"Cat!"
            }
        }
    ]

    @classmethod
    @override_settings(MEDIA_ROOT=(TEST_DATA + '/media'))
    def setUpClass(cls):
        """Create database objects to be used in the test in this class"""
        cat = Image.objects.create(
            img=SimpleUploadedFile(
                name='cat.png',
                content=b'Im a cat'
            ),
            desc="A picture of a cat",
            hover="Cat!"
        )

        dog = Image.objects.create(
            img=SimpleUploadedFile(
                name='dog.png',
                content=b'Im a dog'
            ),
            desc="A picture of a dog",
            hover="Important dog!"
        )

        porogo_logo = Image.objects.create(
            img=SimpleUploadedFile(
                name='porogo.svg',
                content=b'Im a logo'
            ),
            desc="porogo logo",
            hover="porogo!"
        )

        dnd_app_logo = Image.objects.create(
            img=SimpleUploadedFile(
                name='dnd_logo.svg',
                content=b'Im a logo'
            ),
            desc="adventure assistant logo",
            hover="dnd!"
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
            picture=cat,
            picture_arms=cat,
            picture_personal=cat,
        )

        yaneric = Developer.objects.create(
            first_name="Yaneric",
            last_name="Roussy",
            email="yaneric@porogoramer.com",
            description_experience="I studied at Edouard",
            description_personal="I love asp.NET core",
            github_name="yan2arb4",
            linkedin_url="linkedin.com/yan",
            other_url="gitkraken.com/yanou",
            other_url_type="gitkraken",
            picture=dog,
            picture_arms=cat,
            picture_personal=cat,
        )

        Developer.objects.create(
            first_name="Noah",
            last_name="Gelinas",
            email="noahg@porogoramer.com",
            description_experience="I studied at Dawson",
            description_personal="I love React core",
            github_name="noahgelinas",
            linkedin_url="linkedin.com/noah",
            other_url="gitlab.com/noahg",
            other_url_type="gitlab",
            picture=cat,
            picture_arms=cat,
            picture_personal=cat,
        )

        URL.objects.create(
            url = "github.com/porogoramer.com"
        )

        Language.objects.create(
            name = "TypeScript",
        )

        Language.objects.create(
            name = "Python"
        )

        Language.objects.create(
            name = "asp.NET"
        )

        Tag.objects.create(
            tag = "Full Stack"
        )

        Tag.objects.create(
            tag = "Web"
        )

        Tag.objects.create(
            tag = "Server Side"
        )

        portfolio = Project.objects.create(
            name = "Portfolio",
            short_description = "A portfolio for friends",
            description_intro = "Built in js and python",
            description_body = "Full stack app body",
            icon = porogo_logo,
            youtube_url = "youtube.com/porogoramer",
            project_status = Project.PROJECT_STATUSES[0][0],
            start_year = 2023,
        )
        portfolio.github_link.set(URL.objects.filter(url="github.com/porogoramer.com"))
        portfolio.languages.set(Language.objects.filter(Q(name="TypeScript") | Q(name="Python")))
        portfolio.tags.set(Tag.objects.filter(Q(tag="Full Stack") | Q(tag="Web")))
        portfolio.contributors.set(Developer.objects.filter(Q(first_name="Axel") | Q(first_name="Yaneric")),)
        portfolio.save()

        dnd_app = Project.objects.create(
            name = "DnD app backend",
            short_description = "Backend for a mobile app for dnd",
            description_intro = "Built in asp.NET",
            description_body = "Backend that provides REST api endpoints",
            icon = dnd_app_logo,
            youtube_url = "youtube.com/dndbackend",
            project_status = Project.PROJECT_STATUSES[2][0],
            start_year = 2024,
            end_year = 2024
        )
        dnd_app.github_link.set(URL.objects.filter(url="github.com/dndbackend"))
        dnd_app.languages.set(Language.objects.filter(name="asp.NET"))
        dnd_app.tags.set(Tag.objects.filter(tag="Server Side"))
        dnd_app.contributors.set(Developer.objects.filter(first_name="Yaneric"))
        dnd_app.save()

        yaneric.featured_project = Project.objects.get(name="DnD app backend")
        yaneric.save()

    @classmethod
    def tearDownClass(cls):
        """Clean up leftover files from testing done in this class"""
        print("\nCleaning up temporary files...\n")
        try:
            shutil.rmtree(TEST_DATA)
        except OSError:
            pass

    # /api/developers
    def test_get_developers(self):
        """Test that /api/developers returns a 200 and correct json"""
        response = self.client.get('http://testserver/api/developers/', follow=True, format='json')
        
        self.assertEqual(response.status_code, 200, "/api/developers not 200")
        self.assertListEqual(response.json(), self.expected_developers, 'Unexpected body for /api/developers')
    
    def test_get_2_developers(self):
        """Test that /api/developers returns a 200 and correct json with ?max=2"""
        response = self.client.get('http://testserver/api/developers/?max=2', format='json')

        self.assertEqual(response.status_code, 200, "/api/developers?max=2 not 200")
        self.assertListEqual(response.json(), self.expected_developers[:2], 'Unexpected body for /api/developers?max=2')

    def test_get_max_developers_with_string_fails(self):
        """Test that /api/developers returns a 400 and correct json with ?max=abc"""
        response = self.client.get('http://testserver/api/developers/?max=abc', format='json')

        self.assertEqual(response.status_code, 400, "/api/developers?max=abc not 400")
        self.assertEqual(response.json(), {'detail': 'Expected integer>0 as value for query param max, got abc'}, 'Unexpected body for /api/developers?max=abc')

    def test_get_max_developers_with_0(self):
        """Test that /api/developers returns a 400 and correct json with ?max=0"""
        response = self.client.get('http://testserver/api/developers/?max=0', format='json')

        self.assertEqual(response.status_code, 400, "/api/developers?max=0 not 400")
        self.assertEqual(response.json(), {'detail': 'Expected integer>0 as value for query param max, got 0'}, 'Unexpected body for /api/developers?max=0')


    # /api/developer
    def test_get_developer_axel(self):
        """Test that /api/developer returns a 200 and correct json"""
        response = self.client.get('http://testserver/api/developer/axel/', follow=True, format='json')

        self.assertEqual(response.status_code, 200, "/api/developer not 200")
        self.assertEqual(response.json(), self.expected_developer[0], 'Unexpected body for /api/developer')

    # def test_get_developer_not_found(self):
    #     """Test that /api/developers returns a 404 and correct json"""
    #     response = self.client.get('http://testserver/api/developer/john', follow=True, format='json')

    #     self.assertEqual(response.status_code, 404, "/api/developer not 404")
    #     self.assertEqual(response.json(), {'detail': 'No Developer matches the given query.'}, 'Unexpected body for /api/developer')
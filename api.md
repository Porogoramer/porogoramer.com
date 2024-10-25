# Table of contents
- [API](#api)
    - [Models](#models)
        - [Project](#project)
        - [Image](#image)
        - [Developer](#developer)
        - [Language](#language)
    - [Endpoints](#endpoints)
        - [/projects](#get-projects)
        - [/project/id](#get-projectintid)
        - [/developers](#get-developers)
        - [/developer/id](#get-developerintid)

# API
[Back to Top](#table-of-contents)

All endpoints will return a json response either acknowledging a POST request or with data relevant to a GET request. Errors should have a status in the 4XX or 5XX depending on the error and should include a 'message' json key with an adequate error message.

## Models
[Back to Top](#table-of-contents)

All models should be described in the following sections. If implementation requires changes to these models please edit the corresponding information.

### Project
[Back to Top](#table-of-contents)

Project is a model storing information about a project. It has a unique name, descriptions, icon, many languages, many contributors, a project status, a start year and an end year. This is the suggested django code which might need to be edited. (ID should not be included, it is auto generated)

```py
id: Implicitely created by django PK
name = models.CharField(max_length=31, unique=True)
short_description = models.TextField(max_length=255)
description_intro = models.TextField(max_length=512)
description_body = models.TextField(max_length=1024)
icon = models.ForeignKey(Image, on_delete=models.CASCADE)
github_link = models.URLField(max_length=200) 
languages = models.ManyToManyField(Language)
contributors = models.ManyToManyField(Developer)
project_status = models.CharField(max_length=1, choices=PROJECT_STATUSES)
start_year = models.DateField()
end_year = models.DateField(null=True)

PROJECT STATUSES = {
	"U": "Upcoming",
	"O": "Ongoing",
	"C": "Completed",
}
```

### Image
[Back to Top](#table-of-contents)

Stores images.

```
Implementation pending
```

### Developer
[Back to Top](#table-of-contents)

Developer is a model storing information about developers on the website. It has first_name, last_name and github_name. Full names must be unique and github_name must be unique.

```py
id: Implicitely created by django PK
first_name = models.CharField(max_length=20)
last_name = models.CharField(max_length=20)
github_name = models.CharField(max_length=20, unique=True)
picture = models.ForeignKey(Image, on_delete=models.CASCADE)
UniqueConstraint(fields=["first_name", "last_name"], name="unique_full_name")
```

### Language
[Back to Top](#table-of-contents)

Language is a model that simply holds a programming language name which needs to be unique.

```py
id: Implicitely created by django PK
name = models.CharField(max_length=16, unique=True)
```

https://docs.djangoproject.com/en/5.1/topics/db/models/ <br>
https://docs.djangoproject.com/en/5.1/ref/models/fields/#model-field-types

## Endpoints
[Back to Top](#table-of-contents)

All endpoints will start at /api so this part will be omitted from the following list. [See API section](#api) for general requirements.

### GET /projects
[Back to Top](#table-of-contents)

Returns a list of all projects. In a similar format to the following:
```js
[
	{
		id: 1,
		name: "porobot",
		short_desc: "lorem ispum",
		icon: byte[],
		github_link: "github.com",
		languages: [ "javascript" ],
	}
]
```

***Query params***

Filter projects using specified languages using comma separated list (default no filter)
```
lang=javascript,python
```

Whether to require that all languages listed in lang be listed in the languages list. If lang isn't specified, this option is ignored. (default false).
```
langall=true
```

Filter projects by contributor using comma separated list (default no filter)
```
contrib=axel
```

Whether to require that all contributors listed in contrib have participated in the project. If contrib iisnt specified, this option is ignored. (default false)
```
contriball=true
```

Whether to include the icon image or not. Allows for faster large queries. (default true)
```
icon=false
```

Specify maximum number of items. (default 10)
```
max=4
```

### GET /project/int:id
[Back to Top](#table-of-contents)

Returns all info about a specific project.

```js
{
    id: 1,
    name: "porobot",
    short_desc: "lorem ispum",
    description_intro: "lorem",
    description_body: "lorem ipsum dolor sit amet",
    icon: byte[],
    github_link: "github.com",
    languages: [ "javascript" ],
    contributors: [ {
        id: 4,
        name: "yaneric"
    } ,
    {
        id: 5,
        name: "emilie"
    }],
    project_status: "Ongoing",
    start_year: "2023",
    end_year: null
}
```

### GET /developers
[Back to Top](#table-of-contents)

Returns list of all developers

```js
[
	{
		id: 5,
        first_name: "Rida",
        last_name: "C",
        github_name: "Reeda",
        picture: byte[],
	}
]
```

***Query Params***
List developers who contributed to a specific project. (default all developers)
```
project=2
```

Whether to include the icon image or not. Allows for faster large queries. (default true)
```
icon=false
```

Specify maximum number of items. (default 10)
```
max=4
```

### Get /developer/int:id
[Back to Top](#table-of-contents)

Returns information about a specific developer.

```js
{
    id: 5,
    first_name: "Rida",
    last_name: "C",
    github_name: "Reeda",
    picture: byte[],
}
```
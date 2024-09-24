<div align="center">
    <img src="porogoramer_logo.svg"/>
    <h3>porogoramer.com</h3>
    <p>A comprehensive guide to understanding and using the porogoramer.com repository.</p>
    <img alt="Static Badge" src="https://img.shields.io/badge/Project_status-Moving_steadily-15c243?style=flat"/>
    <img alt="Static Badge" src="https://img.shields.io/badge/Project_phase-In_production-bfbf1d?style=flat"/>
    <br/>
</div>

[]()

## About the project
Porogoramer.com is the hub for our Minecraft server hosting services and the portfolio showcase for our community members.

### Built with
### Frontend
* [![React][React]][Download React]
* [![SASS][SASS]][Download SASS]
* [![Babel][Babel]][Download Babel]
* [![TypeScript][TypeScript]][Download TypeScript]

### Backend
* [![NodeJS][NodeJS]][Download NodeJS]
* [![Python][Python]][Download Python]
* [![Django][Django]][Download Django]
* [![DjangoREST][DjangoREST]][Download DjangoREST]

### Package Management
* [![NPM][NPM]][Download NPM]

### Testing
* [![Jest][Jest]][Download Jest]
* [![DjangoTest][DjangoTest]][Download DjangoTest]

## Getting Started
1. Run the following command in the repo root terminal:
```bash
python -m venv .venv
```
This command creates a virtual environment named `.venv` in your project directory.

2. Activate the virtual environment by running the following command:
```bash
. .venv/Scripts/activate
```
This command activates the virtual environment and ensures that the Python dependencies are installed in the virtual environment instead of the global Python environment.

3. Install the required Python dependencies by running the following command:
```bash
pip install -r requirements.txt
```

4. Navigate to the folder where package.json is located and install the required JavaScript dependencies by running the following command:
```bash
npm install
```

5. Once the dependencies are installed, you can start working on your Django React project.

## How to Run the project
Before running the project, ensure you have completed the setup steps mentioned above.

1. Apply Migrations:

```bash
python manage.py migrate
```
This command applies any pending migrations to your database.

2. Run the Django Server:

```bash
python manage.py runserver
```
This starts the Django development server. The output will give a url you can open.

3. Run the Frontend Development Server:
Open a new terminal and navigate to the frontend directory of the repo where package.json is located.

```bash
npm run dev
```
This command starts the frontend development server.

## Important note
We perform linting to maintain consistency and code quality. Please install these three VS Code extensions to follow our linting rules.

* [ESLint]
* [djLint]
* [pyLint]


## Support
We’re always looking to improve. If you have suggestions for new features, enhancements, or bug related issues, we'd love to hear from you. [Let us know !](https://github.com/Porogoramer/porogoramer.com/issues)
  

<!-- Badge URLs -->
[Babel]: https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black
[NodeJS]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Python]: https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54
[React]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[Django]: https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white
[DjangoTest]: https://img.shields.io/badge/DJANGO-TESTS-e3e1e1?style=for-the-badge&logo=django&labelColor=092e20
[DjangoREST]: https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray
[NPM]: https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white
[TypeScript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[Jest]: https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[SASS]: https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white

<!-- Download URLs -->
[Download DjangoTest]: https://docs.djangoproject.com/en/5.1/topics/testing/
[Download Babel]: https://babeljs.io/docs/configuration
[Download NodeJS]: https://nodejs.org/en/download/
[Download Python]: https://www.python.org/downloads/
[Download React]: https://react.dev/
[Download Django]: https://www.djangoproject.com/download/
[Download NPM]: https://www.npmjs.com/get-npm
[Download TypeScript]: https://www.typescriptlang.org/download
[Download SASS]: https://sass-lang.com/install
[Download Jest]: https://jestjs.io/docs/getting-started
[Download DjangoREST]: https://www.django-rest-framework.org/#installation

<!-- VS Code Extensions -->
[ESLint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[DjLint]: https://marketplace.visualstudio.com/items?itemName=monosans.djlint
[PyLint]: https://marketplace.visualstudio.com/items?itemName=ms-python.pylint


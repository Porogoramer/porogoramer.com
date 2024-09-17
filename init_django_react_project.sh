#!/bin/bash
# Credits to https://youtube.com/playlist?list=PLzMcBGfZo4-kCLWnGmK0jUBmGLaJxvi4j&si=HTOT3kcVqc700tiS for project structure
# Initializes a Django React web app project
# with the first argument as name and the second argument
# as the project path
# Run this script in an empty directory
# If an error occurs, fix the error, delete the folder, and re-run this script
# Watch out for leftover hidden files
# This scripts downloads from https://github.com/Yan2arb4/Django-React-project/tree/template

set -euo pipefail

trap 'echo "An error occurred. Exiting..."; read -p "Press any key to continue..."' ERR

# Check if project name is provided
if [ -z "${1-}" ]; then
    echo "Project name not provided"
    read -p "Press any key to continue..."
    exit 1
fi
APPNAME=$1

# Check if project path is provided
if [ -z "${2-}" ]; then
    echo "Project parent path not provided"
    read -p "Press any key to continue..."
    exit 1
fi
PROJECTPATH=$2

# Create the project directory if it doesn't exist
if [ ! -d "$PROJECTPATH" ]; then
    mkdir -p "$PROJECTPATH"
fi
cd "$PROJECTPATH"

# Create and activate virtual environment
python -m venv .venv
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
    . .venv/Scripts/activate
else
    . .venv/bin/activate
fi

# Download and install requirements
curl -o requirements.txt https://raw.githubusercontent.com/Yan2arb4/Django-React-project/template/React-Django/Tutorial/requirements.txt
pip install -r requirements.txt

# Download .gitignore

curl -o ../../.gitignore https://raw.githubusercontent.com/Yan2arb4/Django-React-project/template/React-Django/Tutorial/.gitignore

# Create Django project and apps
django-admin startproject "$APPNAME"
cd "$APPNAME"
django-admin startapp api
django-admin startapp frontend

# Setup frontend
cd frontend #All lines under happen from this folder
curl -o package.json https://raw.githubusercontent.com/Yan2arb4/Django-React-project/template/React-Django/Tutorial/music_controller/frontend/package.json
npm install

# Install typescript
npm install typescript @types/react @types/react-dom @babel/preset-typescript --save-dev
npm install ts-loader --save-dev

# Create tsconfig.json for TypeScript configuration
curl -o tsconfig.json https://raw.githubusercontent.com/Yan2arb4/Django-React-project/template/React-Django/Tutorial/music_controller/frontend/tsconfig.json

# Add webpack config
curl -o webpack.config.js https://raw.githubusercontent.com/Yan2arb4/Django-React-project/template/React-Django/Tutorial/music_controller/frontend/webpack.config.js

# Setup urls.py files in both api and frontends apps
touch urls.py
touch ../api/urls.py

curl -o babel.config.json https://raw.githubusercontent.com/Yan2arb4/Django-React-project/template/React-Django/Tutorial/music_controller/frontend/babel.config.json

# Setup Templates 
mkdir -p templates/frontend
curl -o ./templates/frontend/index.html https://raw.githubusercontent.com/Yan2arb4/Django-React-project/template/React-Django/Tutorial/music_controller/frontend/templates/frontend/index.html

# Setup static with children
mkdir -p static/css static/frontend
touch static/css/index.css

# Setup src with components and placeholder component
mkdir -p src/components
curl -o src/components/App.tsx https://raw.githubusercontent.com/Yan2arb4/Django-React-project/template/React-Django/Tutorial/music_controller/frontend/src/components/App.tsx

curl -o src/index.tsx  https://raw.githubusercontent.com/Yan2arb4/Django-React-project/template/React-Django/Tutorial/music_controller/frontend/src/index.tsx

echo "Project setup completed successfully."
read -p "Press any key to continue..."
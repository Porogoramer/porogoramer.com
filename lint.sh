#!/bin/bash
# Author: Axel Brochu
# Date: 2024-11-21
# Lint project on Windows

. .venv/Scripts/activate

export DJANGO_SETTINGS_MODULE="porogo.porogo.settings"

cd porogo

export PYTHONPATH="$(pwd)"

touch __init__.py

pylint .

rm __init__.py
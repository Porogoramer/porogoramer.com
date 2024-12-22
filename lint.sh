#!/bin/bash
# Author: Axel Brochu
# Date: 2024-11-21
# Lint project on Windows

EXIT_CODE=1

. .venv/Scripts/activate

export DJANGO_SETTINGS_MODULE="porogo.porogo.settings"

cd porogo

export PYTHONPATH="$(pwd)"

touch __init__.py

pylint . --rcfile="../.pylintrc"

if [ $? -eq 0 ]; then
    EXIT_CODE=0
fi

rm __init__.py

exit $EXIT_CODE
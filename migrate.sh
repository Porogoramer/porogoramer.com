#!/bin/bash
# Author: Axel Brochu
# Date: 2024-11-21
# Creates and applies migrations on Windows

. .venv/Scripts/activate

cd porogo

if [ "$1" = "new" ]; then
    py manage.py makemigrations
    echo "Press enter to continue... (Ctrl+C to cancel)"
    read
fi

py manage.py migrate
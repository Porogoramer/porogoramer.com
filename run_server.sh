#!/bin/bash
# Author: Axel Brochu
# Date: 2024-10-08
# Runs the project on windows

. .venv/Scripts/activate

cd porogo
py manage.py runserver &

cd frontend
npm run dev
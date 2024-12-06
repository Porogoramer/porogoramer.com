'''Create views for the frontend'''
from django.shortcuts import render

def index(request):
    '''View that renders the react app through the index.html file'''
    response = render(request, 'frontend/index.html')
    response.headers['Cache-Control'] = 'no-store'
    return response

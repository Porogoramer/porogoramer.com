"""Views defining API endpoints"""
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .exceptions import APIRequestException
from .models import Developer, Project
from .serializers import DeveloperSerializer, DevelopersSerializer, ProjectsSerializer

def get_max(view):
    try:
        max_param = view.request.query_params.get('max') or 10
        max_param = int(max_param)
        if max_param <= 0:
            raise ValueError("Max can't be <= 0")
        
        return max_param
    
    except ValueError as e:
        raise APIRequestException(
            status_code=400,
            message=f"Expected integer>0 as value for query param max, got {max_param}",
            error='bad_request'
        ) from e

class DevelopersView(ListAPIView):
    """
    View to list all developers on site
    """
    serializer_class = DevelopersSerializer

    def get_queryset(self):
        query_set = Developer.objects.all()

        max_param = get_max(self)

        return query_set[:max_param]
    
class DeveloperView(RetrieveAPIView):
    """
    View to get specific developer on site
    """
    lookup_field = 'first_name__iexact'
    lookup_url_kwarg = 'name'
    serializer_class = DeveloperSerializer
    queryset = Developer.objects.all()


class ProjectsView(ListAPIView):
    """
    View to list all projects available on the website
    """
    serializer_class = ProjectsSerializer

    def get_queryset(self):
        query_set = Project.objects.all()

        max_param = get_max(self)
        return query_set[:max_param]
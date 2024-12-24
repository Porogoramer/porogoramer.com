"""Views defining API endpoints"""
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .exceptions import APIRequestException
from .models import Developer, Project
from .serializers import DeveloperSerializer, DevelopersSerializer, ProjectsSerializer, ProjectSerializer

def get_max(view):
    """Function checking the maximum query param, returning it or throwing an API exception"""
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


def get_lang_query_set(query_set, lang, lang_all):
    """Returns given queryset filtered by languages provided"""
    all_lang: bool = (lang_all or '').lower() == 'true'
    lang_arr = lang.split(',')
    lang_set = query_set.filter(languages__name = lang_arr[0])

    if len(lang_arr) > 1:
        if all_lang:
            for language in lang_arr[1:]:
                lang_set = lang_set & query_set.filter(languages__name__iexact = language)
        else:
            for language in lang_arr[1:]:
                lang_set = lang_set | query_set.filter(languages__name__iexact = language)
    
    return lang_set.distinct()

def get_contrib_query_set(query_set, contrib, contriball):
    """Returns given queryset filtered by contributors provided"""
    all_contrib: bool = (contriball or '').lower() == 'true'
    contrib_arr = contrib.split(',')
    contrib_set = query_set.filter(contributors__first_name = contrib_arr[0])

    if len(contrib_arr) > 1:
        if all_contrib:
            for contributor in contrib_arr[1:]:
                contrib_set = contrib_set & query_set.filter(contributors__first_name = contributor)
        else:
            for contributor in contrib_arr[1:]:
                contrib_set = contrib_set | query_set.filter(contributors__first_name = contributor)

    return contrib_set.distinct()

class ProjectsView(ListAPIView):
    """
    View to list all projects available on the website
    """
    serializer_class = ProjectsSerializer

    def get_queryset(self):
        """Gets a custom queryset based on query parameters provided"""
        query_set = Project.objects.all()
        lang: str = self.request.query_params.get('lang')
        if lang:
            query_set = get_lang_query_set(query_set, lang, self.request.query_params.get('langall'))
        
        contrib: str = self.request.query_params.get('contrib')
        if contrib:
            query_set = get_contrib_query_set(query_set, contrib, self.request.query_params.get('contriball'))
                
        max_param = get_max(self)
        return query_set[:max_param]
    
class ProjectView(RetrieveAPIView):
    """
    View to retrieve a specific project on the website by its name
    """
    lookup_field = 'name__iexact'
    lookup_url_kwarg = 'name'
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()
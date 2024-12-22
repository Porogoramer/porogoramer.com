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
        lang: str = self.request.query_params.get('lang')
        if lang:
            all_lang: bool = (self.request.query_params.get('langall') or '').lower() == 'true'
            lang_arr = lang.split(',')
            lang_set = query_set.filter(languages__name = lang_arr[0])

            if len(lang_arr) > 1:
                if all_lang:
                    for l in lang_arr[1:]:
                        lang_set = lang_set & query_set.filter(languages__name__iexact = l)
                else:
                    for l in lang_arr[1:]:
                        lang_set = lang_set | query_set.filter(languages__name__iexact = l)

            query_set = lang_set.distinct()
        
        contrib: str = self.request.query_params.get('contrib')
        if contrib:
            all_contrib: bool = (self.request.query_params.get('contriball') or '').lower() == 'true'
            contrib_arr = contrib.split(',')
            contrib_set = query_set.filter(contributors__first_name = contrib_arr[0])

            if len(contrib_arr) > 1:
                if all_contrib:
                    for c in contrib_arr[1:]:
                        contrib_set = contrib_set & query_set.filter(contributors__first_name = c)
                else:
                    for c in contrib_arr[1:]:
                        contrib_set = contrib_set | query_set.filter(contributors__first_name = c)

            query_set = contrib_set.distinct()
                
        max_param = get_max(self)
        return query_set[:max_param]
    
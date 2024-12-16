from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Developer
from .serializers import DeveloperSerializer, DevelopersSerializer

class DevelopersView(ListAPIView):
    """
    View to list all developers on site
    """
    serializer_class = DevelopersSerializer

    def get_queryset(self):
        query_set = Developer.objects.all()

        max = int(self.request.query_params.get('max') or 10)

        return query_set[:max]
    
class DeveloperView(RetrieveAPIView):
    """
    View to get specific developer on site
    """
    lookup_field = 'first_name'
    lookup_url_kwarg = 'name'
    serializer_class = DeveloperSerializer
    queryset = Developer.objects.all()
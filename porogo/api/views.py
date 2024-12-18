from rest_framework.generics import ListAPIView, RetrieveAPIView
from .exceptions import BadRequestException
from .models import Developer
from .serializers import DeveloperSerializer, DevelopersSerializer

class DevelopersView(ListAPIView):
    """
    View to list all developers on site
    """
    serializer_class = DevelopersSerializer

    def get_queryset(self):
        query_set = Developer.objects.all()

        try:
            max = self.request.query_params.get('max') or 10
            max = int(max)
            if max <= 0:
                raise ValueError("Max can't be <= 0")
        except ValueError:
            raise BadRequestException(
                status_code=400,
                message=f"Expected integer>0 as value for query param max, got {max}",
                error='bad_request'
            )
        return query_set[:max]
    
class DeveloperView(RetrieveAPIView):
    """
    View to get specific developer on site
    """
    lookup_field = 'first_name'
    lookup_url_kwarg = 'name'
    serializer_class = DeveloperSerializer
    queryset = Developer.objects.all()
from rest_framework.generics import ListAPIView
from .models import Developer
from .serializers import DeveloperSerializer

class DevelopersView(ListAPIView):
    """
    View to list all developers on site
    """
    serializer_class = DeveloperSerializer

    def get_queryset(self):
        query_set = Developer.objects.all()

        max = int(self.request.query_params.get('max') or 10)

        return query_set[:max]
    
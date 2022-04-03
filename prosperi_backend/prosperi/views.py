from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from .models import Bucket
from .serializers import BucketSerializer

from .services.price_experiment import PriceExperimentService


class BucketViewSet(ModelViewSet):
    queryset = Bucket.objects.all()
    serializer_class = BucketSerializer
    permission_classes = [AllowAny]

    def retrieve(self, request, pk=None):
        user = PriceExperimentService.get_price(pk)
        serializer = self.serializer_class(user)
        return Response(serializer.data)

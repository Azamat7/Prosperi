from django.shortcuts import get_object_or_404
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from .models import Bucket
from .serializers import BucketSerializer

import random
from .utils import BucketTypes


class BucketViewSet(ModelViewSet):
    queryset = Bucket.objects.all()
    serializer_class = BucketSerializer
    permission_classes = [AllowAny]

    def retrieve(self, request, pk=None):
        user = Bucket.objects.filter(uuid = pk).first()
        if user:
            serializer = self.serializer_class(user)
            return Response(serializer.data)
        
        price = BucketTypes.A if random.randrange(100) < 50 else BucketTypes.B
        new_user = Bucket(uuid=pk, price=price)
        new_user.save()
        serializer = self.serializer_class(new_user)
        return Response(serializer.data)
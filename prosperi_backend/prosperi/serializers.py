from rest_framework import serializers
from . import models


class BucketSerializer(serializers.ModelSerializer):
  class Meta:
    fields = ('uuid', 'price',)
    model = models.Bucket
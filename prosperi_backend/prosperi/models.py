from django.db import models
from .utils import BucketTypes

# Create your models here.
class Bucket(models.Model):
    uuid = models.TextField(max_length=50)
    price = models.IntegerField(choices=BucketTypes.choices(), default=10)

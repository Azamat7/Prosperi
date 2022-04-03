from ..models import Bucket
from ..utils import BucketTypes


class PriceExperimentService(object):
    @staticmethod
    def get_price(pk):
        user = Bucket.objects.filter(uuid = pk).first()
        if user:
            return user

        bucket_a_count = Bucket.objects.filter(price = BucketTypes.A.value).count()
        bucket_b_count = Bucket.objects.filter(price = BucketTypes.B.value).count()  
        price = BucketTypes.A if bucket_a_count < bucket_b_count else BucketTypes.B
        
        new_user = Bucket(uuid=pk, price=price)
        new_user.save()
        return new_user

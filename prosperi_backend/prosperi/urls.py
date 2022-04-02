from . import views
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register("price", views.BucketViewSet, "price")

urlpatterns = router.urls
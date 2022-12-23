from django.urls import include, path
from rest_framework.routers import DefaultRouter

from kekw.views import RadioViewSet, UserRadio


router = DefaultRouter()

router.register(r'radio', RadioViewSet, basename='Radio')
router.register(r'radiouser', UserRadio, basename='RadioUser')

urlpatterns = [
    path(r'', include(router.urls))]
from kekw.serializers import (RadioSerializer)
from rest_framework import viewsets
from kekw.models import Radio
from kekw.serializers import (RadioUserSerializer)
from kekw.models import RadioUser
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response


class RadioViewSet(viewsets.ModelViewSet):
    serializer_class = RadioSerializer
    queryset = Radio.objects.all()

    def get_queryset(self):
        tag = self.request.query_params.get("tag", None)
        if tag is not None:
            return Radio.objects.filter(tag = tag)
        return Radio.objects.all()

class UserRadio(viewsets.ModelViewSet):
    serializer_class = RadioUserSerializer
    queryset = RadioUser.objects.all()

    def get_queryset(self):
        user = self.request.query_params.get("user", None)
        if user is not None:
            return RadioUser.objects.filter(user = user)
        return RadioUser.objects.all()


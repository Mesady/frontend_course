from rest_framework import serializers
from kekw.models import Radio
from kekw.models import RadioUser


class RadioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Radio
        fields = '__all__'

class RadioUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = RadioUser
        fields = '__all__'
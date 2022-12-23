import django.contrib.auth.models
from django.db import models

# Create your models here.

class Radio(models.Model):
    name = models.CharField(max_length=255)
    radiourl = models.URLField(max_length=500)
    tag = models.CharField(max_length=100)

class RadioUser(models.Model):
    user = models.ForeignKey(django.contrib.auth.models.User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    radiourl = models.URLField(max_length=500)
    tag = models.CharField(max_length=200)
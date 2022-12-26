from django.contrib import admin

# Register your models here.

from django.contrib import admin
from kekw.models import Radio, RadioUser

admin.site.register(Radio)
admin.site.register(RadioUser)
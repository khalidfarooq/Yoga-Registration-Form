from django.db import models
import uuid

from django.db.models.fields import CharField
# Create your models here.
batch_choices = (
    ('6-7AM','6-7AM'),
    ('7-8AM','7-8AM'),
    ('8-9AM','8-9AM'),
    ('5-6PM','5-6PM'),
)
class Booking(models.Model):
    name = models.CharField(max_length=200,blank=False, default="")
    age = models.CharField(max_length=4,blank=False,default="18")
    email = models.EmailField(default="",blank=False,unique=True)
    slot = models.CharField(max_length=200, choices=batch_choices)
    isPaid=models.BooleanField(default=True)
    paidOn = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.name


from django.db import models
from phone_field import PhoneField

# Create your models here.
class SalesPerson(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.PositiveSmallIntegerField()

class Customer(models.Model):
    name = models.CharField(max_length=200)
    street_number = models.PositiveSmallIntegerField()
    street_name = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    state = models.CharField(max_length=200)
    zip_code = models.PositiveSmallIntegerField()
    phone_number = PhoneField(help_text='Contact phone number')

class AutomobileVO(models.Model):

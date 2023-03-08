from django.db import models

class Technician(models.Model):
    name = models.TextField()
    employee_number = models.PositiveIntegerField()

class Service_Appointment(models.Model):
    owner = models.TextField()
    reason = models.TextField()
    date = models.DateField()
    time = models.TimeField()
    vehicleVN = models.TextField()



# Create your models here.

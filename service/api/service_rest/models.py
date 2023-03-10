from django.db import models

class Technician(models.Model):
    name = models.TextField()
    employee_number = models.PositiveIntegerField()

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)

class Service_Appointment(models.Model):
    customer = models.TextField()
    reason = models.TextField()
    appointment_date = models.DateField()
    appointment_time = models.TimeField()
    technician = models.ForeignKey(
        Technician,
        related_name="technician",
        on_delete=models.CASCADE
    )
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name= "automobile",
        on_delete=models.CASCADE
    )





# Create your models here.

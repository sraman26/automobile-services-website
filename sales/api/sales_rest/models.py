from django.db import models

# Create your models here.
class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)

class SalesPerson(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.PositiveSmallIntegerField()

class Customer(models.Model):
    name = models.CharField(max_length=200)
    address = models.TextField(default='')
    phone_number = models.PositiveBigIntegerField()

class SaleRecord(models.Model):
    sales_price = models.DecimalField(max_digits=9, decimal_places=2)

    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="sales_person",
        on_delete=models.CASCADE,
    )

    customer = models.ForeignKey(
        Customer,
        related_name="customer",
        on_delete=models.CASCADE,
    )

    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="automobile",
        on_delete=models.CASCADE,
    )

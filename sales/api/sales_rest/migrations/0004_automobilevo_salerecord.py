# Generated by Django 4.0.3 on 2023-03-07 22:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0003_customer_address'),
    ]

    operations = [
        migrations.CreateModel(
            name='AutomobileVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('import_href', models.CharField(max_length=200, unique=True)),
                ('color', models.CharField(max_length=50)),
                ('year', models.PositiveSmallIntegerField()),
                ('vin', models.CharField(max_length=17, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='SaleRecord',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sales_price', models.PositiveIntegerField()),
                ('automobile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='automobile', to='sales_rest.automobilevo')),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='customer', to='sales_rest.customer')),
                ('sales_person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sales_person', to='sales_rest.salesperson')),
            ],
        ),
    ]

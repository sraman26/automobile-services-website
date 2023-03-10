# Generated by Django 4.0.3 on 2023-03-09 17:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AutomobileVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vin', models.CharField(max_length=17, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Technician',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('employee_number', models.PositiveIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Service_Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer', models.TextField()),
                ('reason', models.TextField()),
                ('appointment_date', models.DateField()),
                ('appointment_time', models.TimeField()),
                ('technician', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='technician', to='service_rest.technician')),
                ('vehicleVN', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='vehicleVN', to='service_rest.automobilevo')),
            ],
        ),
    ]

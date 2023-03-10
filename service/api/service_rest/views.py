from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import Technician, AutomobileVO, Service_Appointment

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin"
        ]

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = ["name", "employee_number"]

class TechnicianDetailEncoder(ModelEncoder):
    model = Technician
    properties = ["name"]

class Service_AppointmentEncoder(ModelEncoder):
    model = Service_Appointment
    properties = ["customer", "appointment_date", "appointment_time", "reason", "technician", "vehicleVN"]

    encoders = {
        "technician": TechnicianDetailEncoder(),
        "vehicleVN": AutomobileVOEncoder(),
    }

@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
        )
    elif request.method == "POST":
        content = json.loads(request.body)

        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder= TechnicianEncoder,
            safe=False,
        )

@require_http_methods(["GET", "DELETE"])
def api_show_technician(request, pk):
    if request.method == "GET":
        technician = Technician.objects.get(id=pk)
        return JsonResponse(
            technician,
            encoder= TechnicianEncoder,
            safe = False,
        )
    elif request.method == "DELETE":
        technician = Technician.objects.get(id=pk)
        technician.delete()
        print("technician is deleted")
        return JsonResponse(
            technician,
            encoder = TechnicianEncoder,
            safe = False,
            )


@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointment = Service_Appointment.objects.all()
        return JsonResponse(
            {"appointment": appointment},
            encoder=Service_AppointmentEncoder,
            )
    elif request.method == "POST":
        content = json.loads(request.body)
        automobile = AutomobileVO.objects.get(vin=content["vehicleVN"])
        content["vehicleVN"] = automobile
        technician = Technician.objects.get(name=content["technician"])
        content["technician"] = technician

        service_appointment = Service_Appointment.objects.create(**content)
        return JsonResponse(
            service_appointment,
            encoder=Service_AppointmentEncoder,
            safe = False,
            )

@require_http_methods(["GET", "DELETE"])
def api_appointment_details(request, pk):
    if request.method == "GET":
        appointment = Service_Appointment.objects.get(id=pk)
        return JsonResponse(
            appointment,
            encoder = Service_AppointmentEncoder,
            safe = False
        )
    elif request.method == "DELETE":
        appointment.delete()
        print("appointment is deleted")
        return JsonResponse(
            appointment,
            encoder = Service_AppointmentEncoder,
            safe = False,
        )

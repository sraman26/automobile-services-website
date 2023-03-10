from django.urls import path
from .views import api_list_technicians, api_show_technician, api_list_appointments, api_appointment_details

urlpatterns = [
    path("services/technicians/new", api_list_technicians, name="api_create_technicians"),
    path("services/technicians", api_list_technicians, name="api_list_technicians"),
    path("services/technicians/<int:pk>/", api_show_technician, name="api_show_technician"),
    path("services/new", api_list_appointments, name="api_create_appointments"),
    path("services/", api_list_appointments, name="api_list_appointments"),
    path("services/<int:pk>", api_appointment_details, name="api_appointment_details")

]

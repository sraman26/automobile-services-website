from django.urls import path

from .views import api_list_technicians

urlpatterns = [
    path("create_technician/", api_list_technician, name="api_list_technicians")
]

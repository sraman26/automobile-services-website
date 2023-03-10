from django.urls import path
from .views import (
    api_list_salespersons,
    api_list_customer,
    api_list_sales,
    api_delete_salesperson,
    api_delete_customer,
    api_delete_salesrecord,
)

urlpatterns = [
    path("sales/salesperson/", api_list_salespersons, name="api_list/create_salespersons"),
    path("sales/customer/", api_list_customer, name="api_list/create_customer"),
    path("sales/", api_list_sales, name="api_list_sales"), ## list or create
    path("sales/history/", api_list_sales, name="api_list_saleshistory"),
    path("sales/salesperson/<int:pk>/", api_delete_salesperson, name="api_delete_salesperson"),
    path("sales/customer/<int:pk>/", api_delete_customer, name="api_delete_customer"),
    path("sales/<int:pk>/", api_delete_salesrecord, name="api_delete_salesrecord"),
]

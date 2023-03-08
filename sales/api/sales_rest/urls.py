from django.urls import path
from .views import api_list_salespersons, api_list_customer, api_create_salesrecord, api_list_sales

urlpatterns = [
    path("sales/salesperson/", api_list_salespersons, name="api_list/create_salespersons"),
    path("sales/customer/", api_list_customer, name="api_list/create_customer"),
    path("sales/new/", api_create_salesrecord, name="api_create_salesrecord"),
    path("sales/", api_list_sales, name="api_list_sales"),
    path("sales/history", api_list_sales, name="api_list_saleshistory"),
]

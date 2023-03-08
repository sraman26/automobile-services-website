from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import SalesPerson, Customer, SaleRecord, AutomobileVO

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "import_href",
        "color",
        "year",
        "vin",
        ]

class SalesPersonModelEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["id", "name", "employee_number"]

class CustomerModelEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "name",
        "address",
        "phone_number",
        ]

class SaleRecordEncoder(ModelEncoder):
    model = SaleRecord
    properties = [
        "sales_price",
    ]
    encoders={
        "salesperson": SalesPersonModelEncoder(),
        "customer": CustomerModelEncoder(),
        "automobile": AutomobileVOEncoder(),
    }

@require_http_methods(["GET", "POST"])
def api_list_salespersons(request):

    if request.method == "GET":
        salespersons = SalesPerson.objects.all()

        return JsonResponse(
            {"salespersons": salespersons},
            encoder=SalesPersonModelEncoder,
        )

    else: #THIS IS THE POST REQUEST
        content = json.loads(request.body)

        salesperson = SalesPerson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalesPersonModelEncoder,
            safe=False,
        )

@require_http_methods(["GET", "POST"])
def api_list_customer(request):

    if request.method == "GET":
        customers = Customer.objects.all()

        return JsonResponse(
            {"customers": customers},
            encoder=CustomerModelEncoder,
        )

    elif request.method == "POST":
        content = json.loads(request.body)

        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerModelEncoder,
            safe=False,
        )

def api_create_salesrecord(request):

    if request.method == "POST":
        content = json.loads(request.body)

        salesrecord = SaleRecord.objects.create(**content)
        return JsonResponse(
            salesrecord,
            encoder=SaleRecordEncoder,
            safe=False,
        )

def api_list_sales(request):

    if request.method == "GET":
        salesrecord = SaleRecord.objects.all()

        return JsonResponse(
            {"salesrecord": salesrecord},
            encoder=SaleRecordEncoder,
        )

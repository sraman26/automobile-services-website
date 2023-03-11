from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import SalesPerson, Customer, SaleRecord, AutomobileVO

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
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
        "id",
        "sales_price",
        "sales_person",
        "customer",
        "automobile",
    ]
    encoders = {
        "sales_person": SalesPersonModelEncoder(),
        "customer": CustomerModelEncoder(),
        "automobile": AutomobileVOEncoder(),
    }

    # def get_extra_data(self, o):
    #     return {
    #         "sales_person": o.salespersons.name,
    #         "customer": o.customers.name,
    #         "automobile": o.autos.vin,
    #     }


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

@require_http_methods(["DELETE"])
def api_delete_salesperson(request, pk):
    if request.method == "DELETE":
        try:
            salesperson = SalesPerson.objects.get(id=pk)
            salesperson.delete()
            return JsonResponse(
                salesperson,
                encoder=SalesPersonModelEncoder,
                safe=False,
            )
        except SalesPerson.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})

@require_http_methods(["DELETE"])
def api_delete_customer(request, pk):
    if request.method == "DELETE":
        try:
            customer = Customer.objects.get(id=pk)
            customer.delete()
            return JsonResponse(
                customer,
                encoder=CustomerModelEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})

@require_http_methods(["GET", "POST"])
def api_list_sales(request):

    if request.method == "GET":
        salesrecord = SaleRecord.objects.all()

        return JsonResponse(
            {"salesrecord": salesrecord},
            encoder=SaleRecordEncoder,
        )

    else:
        content = json.loads(request.body)
        print({"content": content})

        # Get the automobile, sales_person, and customer, objects and put it in the content dict
        automobile = AutomobileVO.objects.get(vin=content["automobile"])
        content["automobile"] = automobile
        salesperson = SalesPerson.objects.get(name=content["sales_person"])
        content["sales_person"] = salesperson
        customer = Customer.objects.get(name=content["customer"])
        content["customer"] = customer


        salesrecord = SaleRecord.objects.create(**content)
        return JsonResponse(
            salesrecord,
            encoder=SaleRecordEncoder,
            safe=False,
        )

@require_http_methods(["DELETE"])
def api_delete_salesrecord(request, pk):
    if request.method == "DELETE":
        try:
            salesrecord = SaleRecord.objects.get(id=pk)
            salesrecord.delete()
            return JsonResponse(
                salesrecord,
                encoder=SaleRecordEncoder,
                safe=False,
            )
        except SaleRecord.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})

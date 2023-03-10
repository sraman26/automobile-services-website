import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

# Import models from sales_rest, here.
# from sales_rest.models import Something
from sales_rest.models import AutomobileVO

def get_automobiles():
    response = requests.get("http://inventory-api:8000/api/automobiles/") ## accessing this specific location
    content = json.loads(response.content) ## content is a dict
    for auto in content["autos"]: ## iterating over content dictionary (the content is what you input in insomnia)
        AutomobileVO.objects.update_or_create(
            defaults={
            "vin": auto["vin"],
            }, ## reassign other vairables in VO to these items in the fetch dictionary
        )

def poll():
    while True:
        print('Sales poller polling for data')
        try:
            get_automobiles()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()

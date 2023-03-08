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

def poll():
    while True:
        print('Sales poller polling for data')
        try:
            # Write your polling logic, here
            response = requests.get("http://localhost:8100/api/automobiles/") ## accessing this specific location
            content = json.loads(response.content) ## content is a dict
            print(content)
            for item in content["autos"]: ## iterating over content dictionary (the content is what you input in insomnia)
                AutomobileVO.objects.update_or_create(
                    import_href=item["href"],## reassign the import variable in the VO to the href value in the content dictionary
                    defaults={
                    "color": item["color"],
                    "year": item["year"],
                    "vin": item["vin"],
                    }, ## reassign other vairables in VO to these items in the fetch dictionary
                )
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()

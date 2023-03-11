# CarCar

Team:

* Person 1 - Ali Bhatti - Auto Sales
* Sitara - Automobile Service

## Design

## Service microservice

Service contains the following models:

Technician: Technician contains the components name and employee ID number

Appointment: Appointment contains the components:
Vehicle Number
Customer name
Date of appointment
Time of appointment
Technician
Reason

Technician is a foreign key taking from the inventory microservice, and VIN is also a foreign key taking from a value object of automobile VIN

Automobile VIN: The vehicle number of automobile as a value object to integrate with the inventory microservice.

Service integrates with the inventory microservice by:

Appointment Form: Takes the vehicle number from the inventory create and accordingly assigns it to variables given in appointment model
Appointment History: Takes the appointments for each vehicle number and records them
List Appointments: Lists the appointments and the vehicle numbers for each
Technician Form: Creates a technician, does not integrate with any microservice on its own. However the technician model is used in other models that integrate with inventory microservice.

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.

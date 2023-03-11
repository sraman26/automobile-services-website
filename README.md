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


## Sales microservice

Explain your models and integration with the inventory
microservice, here.

I needed to make a model for salesperson and a customer as that is new datasets being introducted to the applications which the user should be able to input. These are bounded contexts and stand alone within the sales microservice. However, in order to create sales history and sales list we need to relate an automobile from the inventory monolith to a salesperson and customer. Therefore we created an automobileVO and a poller to poll that data. Using that information I was able to create a model for the sales reocords.

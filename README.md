# CarCar

Team:

* Person 1 - Ali Bhatti - Auto Sales
* Sitara - Automobile Service

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.

I needed to make a model for salesperson and a customer as that is new datasets being introducted to the applications which the user should be able to input. These are bounded contexts and stand alone within the sales microservice. However, in order to create sales history and sales list we need to relate an automobile from the inventory monolith to a salesperson and customer. Therefore we created an automobileVO and a poller to poll that data. Using that information I was able to create a model for the sales reocords.

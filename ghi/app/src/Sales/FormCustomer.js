import React, {useState, useEffect } from 'react';

function FormCustomer() {
    const [customers, setCustomers] = useState([])

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone_number, setPhoneNumber] = useState("");

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }
    const handleAddressChange = (event) => {
        const value = event.target.value;
        setAddress(value);
    }
    const handlePhoneNumberChange = (event) => {
        const value = event.target.value;
        setPhoneNumber(value);
      }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.name = name;
        data.address = address;
        data.phone_number = phone_number;
        console.log(data)

        const customerUrl = 'http://localhost:8090/api/sales/customer/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(customerUrl, fetchConfig);
        if (response.ok) {
          const newCustomer = await response.json();
          console.log(newCustomer)

          setName('');
          setAddress('');
          setPhoneNumber('');

        }
      }


    return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Add a customer</h1>
              <form onSubmit={handleSubmit} id="create-customer-form">
                <div className="form-floating mb-3">
                  <input value={name} onChange={handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input value={address} onChange={handleAddressChange} placeholder="Address" required type="text" name="address" id="address" className="form-control"/>
                  <label htmlFor="address">Address</label>
                </div>
                <div className="form-floating mb-3">
                  <input value={phone_number} onChange={handlePhoneNumberChange} placeholder="Phone Number" required type="numerical" name="phone_number" id="phone_number" className="form-control"/>
                  <label htmlFor="phone_number">Phone Number</label>
                </div>
                <button className="btn btn-primary">Add</button>
              </form>
            </div>
          </div>
        </div>
      );

}

export default FormCustomer

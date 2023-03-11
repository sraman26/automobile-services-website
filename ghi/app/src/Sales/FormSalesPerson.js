import React, {useState, useEffect } from 'react';

function FormSalesPerson() {
    const [name, setName] = useState("");
    const [employee_number, setEmployeeNumber] = useState("");

    const handleNameChange = (event) => {
      const value = event.target.value;
      setName(value);
    }
    const handleEmployeeNumberChange = (event) => {
      const value = event.target.value;
      setEmployeeNumber(value);
  }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.name = name;
        data.employee_number = employee_number;

        const salespersonUrl = 'http://localhost:8090/api/sales/salesperson/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(salespersonUrl, fetchConfig);
        if (response.ok) {
          const newSalesPerson = await response.json();

          setName('');
          setEmployeeNumber('');
        }
      }


    return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Add a sales person</h1>
              <form onSubmit={handleSubmit} id="create-salesperson-form">
                <div className="form-floating mb-3">
                  <input value={name} onChange={handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input value={employee_number} onChange={handleEmployeeNumberChange} placeholder="Employee Number" required type="numeric" name="employee_number" id="employee_number" className="form-control"/>
                  <label htmlFor="employee_number">Employee Number</label>
                </div>
                <button className="btn btn-primary">Add</button>
              </form>
            </div>
          </div>
        </div>
      );

}

export default FormSalesPerson

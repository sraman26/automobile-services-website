import React, { useState, useEffect } from 'react';

function FormSalesRecord() {
    const [salesRecords, setAutomobiles] = useState([])
    const [salesPersons, setSalesPersons] = useState([])
    const [customers, setCustomers] = useState([])

    const [sales_price, setSalesPrice] = useState("");
    const [sales_person, setSalesPerson] = useState("");
    const [customer, setCustomer] = useState("");
    const [automobile, setAutomobile] = useState("");

    const handleSalesPriceChange = (event) => {
      const value = event.target.value;
      setSalesPrice(value);
    }
    const handleSalesPersonChange = (event) => {
      const value = event.target.value;
      setSalesPerson(value);
    }
    const handleCustomerChange = (event) => {
      const value = event.target.value;
      setCustomer(value);
    }
    const handleAutomobileChange = (event) => {
      const value = event.target.value;
      setAutomobile(value);
    }

    //fetch data from various sources for all dropdown lists
    const fetchData = async () => {
      const url1 = 'http://localhost:8100/api/automobiles/';
      const url2 = 'http://localhost:8090/api/sales/salesperson/';
      const url3 = 'http://localhost:8090/api/sales/customer/';
      const response1 = await fetch(url1);
      const response2 = await fetch(url2);
      const response3 = await fetch(url3);

      if (response1.ok && response2.ok && response3.ok) {
        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();
        setAutomobiles(data1.autos);
        setSalesPersons(data2.salespersons);
        setCustomers(data3.customers);

      }
    }

    useEffect(() => {
      fetchData();
    }, []);

    const handleSubmit = async (event) => {
      event.preventDefault();

      const data = {};

      data.sales_price = sales_price;
      data.sales_person = sales_person;
      data.customer = customer;
      data.automobile = automobile;

      const salesRecordUrl = 'http://localhost:8090/api/sales/';
      const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch(salesRecordUrl, fetchConfig);
      const newSalesRecord = await response.json();

      setSalesPrice('');
      setSalesPerson('');
      setCustomer('');
      setAutomobile('');

    }

    return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Record a new sale</h1>
              <form onSubmit={handleSubmit} id="create-salesrecord-form">
              <div className="mb-3">
                  <select value={automobile} onChange={handleAutomobileChange} required type="text" id="automobile" className="form-select">
                    <option value="">Choose an automobile by VIN</option>
                    {salesRecords.map(auto => {
                        return (
                            <option key={auto.vin} value={auto.vin}>
                                {auto.vin}
                            </option>
                        )
                    })}
                  </select>
                </div>
                <div className="mb-3">
                  <select value={sales_person} onChange={handleSalesPersonChange} required type="text" id="sales_person" className="form-select">
                    <option value="">Choose a sales person</option>
                    {salesPersons.map(salespersons => {
                        return (
                            <option key={salespersons.name} value={salespersons.name}>
                                {salespersons.name}
                            </option>
                        )
                    })}
                  </select>
                </div>
                <div className="mb-3">
                  <select value={customer} onChange={handleCustomerChange} required type="text" id="customer" className="form-select">
                    <option value="">Choose a customer</option>
                    {customers.map(customer => {
                        return (
                            <option key={customer.name} value={customer.name}>
                                {customer.name}
                            </option>
                        )
                    })}
                  </select>
                </div>
                <div className="form-floating mb-3">
                  <input value={sales_price} onChange={handleSalesPriceChange} placeholder="Sales Price" required type="numerical" name="sales_price" id="sales_price" className="form-control"/>
                  <label htmlFor="sales_price">Sales Price</label>
                </div>
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
      );

}

export default FormSalesRecord

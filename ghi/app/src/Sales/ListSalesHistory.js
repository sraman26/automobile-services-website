import React, {useState, useEffect } from 'react';

function ListSalesHistory() {

  const [sales, setSales] = useState([])
  const [salespersons, setSalesPersons] = useState([])


  const fetchData = async () => {
    const url = 'http://localhost:8090/api/sales/salesperson/';
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setSalesPersons(data.salespersons);
    }
  }

  const getData = async () => {
    const response = await fetch('http://localhost:8090/api/sales/');

    if (response.ok) {
      const data = await response.json();
      setSales(data.salesrecord)
    }
  }

  useEffect(()=>{
    getData()
  }, [])

  useEffect(()=>{
    fetchData()
  }, [])

  const handleSalesChange = (event) => {
    const value = event.target.value;
    setSales(value);
  }

  return (
    <div>
      <h1>Sales person history</h1>
      <select value={sales} onChange={handleSalesChange} required id ="salesperson" name="salesperson" className="form-select form-select-lg form-select-padding-lg mb-3" >
        <option value="">Choose a sales person</option>
        {salespersons.map(saleperson => {
          return(
            <option key={ saleperson.id } value={ saleperson.id }>
              { saleperson.name }
            </option>
          )
        })}
      </select>
      <table className="table table-striped">
      <thead>
        <tr>
          <th>Sales person</th>
          <th>Customer</th>
          <th>VIN</th>
          <th>Sale price ($)</th>
        </tr>
      </thead>
      <tbody>
        {sales.map(sale => {
          return(
            <tr key={ sale.id }>
              <td>{ sale.sales_person }</td>
              <td>{ sale.customer }</td>
              <td>{ sale.automobile }</td>
              <td>{ sale.sale_price }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>

  )
}

export default ListSalesHistory;

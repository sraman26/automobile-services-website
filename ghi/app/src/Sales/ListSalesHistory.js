import React, {useState, useEffect } from 'react';

function ListSalesHistory() {

  const [sales, setSales] = useState([])
  const [salespersons, setSalesPersons] = useState([])

  const [filterTerm, setFilterTerm] = useState("")

  const handleFilterChange = (e) => {
    setFilterTerm(e.target.value);
  }

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

  const handleSalesPersonChange = (event) => {
    const value = event.target.value;
    setSalesPersons(value);
}

  return (
    <div>
      <h1>Sales person history</h1>
      <select value={salespersons} onChange={handleSalesPersonChange} required id ="salesperson" name="salesperson" className="form-select form-select-lg form-select-padding-lg mb-3" >
        <option value="" onChange={handleFilterChange}>Choose a sales person</option>
        {salespersons
        .filter((saleperson) => saleperson.name.includes(filterTerm))
        .map(saleperson => {
          return(
            <option key={ saleperson.name } value={ saleperson.name }>
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
              <td>{ sale.sales_person.name }</td>
              <td>{ sale.customer.name }</td>
              <td>{ sale.automobile.vin }</td>
              <td>{ sale.sales_price }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>

  )
}

export default ListSalesHistory;

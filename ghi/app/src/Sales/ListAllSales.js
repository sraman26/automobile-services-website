import React, {useState, useEffect } from 'react';

function ListAllSales() {

  const [sales, setSales] = useState([])

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

  return (
    <div>
      <h1 >Sales</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sales person</th>
            <th>Employee number</th>
            <th>Purchaser's name</th>
            <th>VIN</th>
            <th>Sale price ($)</th>
          </tr>
        </thead>
        <tbody>
          {sales.map(sale => {
            return(
              <tr>
                <td>{ sale.sales_person }</td>
                <td>{ sale.employee_number }</td>
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

export default ListAllSales;

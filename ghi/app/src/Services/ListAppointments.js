import React, {useState, useEffect } from 'react';

function ListAppointments() {

  const [appointments, setAppointments] = useState([])

  const getData = async () => {
    const response = await fetch('http://localhost:8080/api/services/');

    if (response.ok) {
      const data = await response.json();
      setAppointments(data.appointment)
    }
  }

  useEffect(()=>{
    getData()
  }, [])

  return (
    <div>
      <h1>Appointments</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>VIN</th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Technician</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => {
            return(
              <tr>
                 <td>{ appointment.vehicleVN.vin }</td>
                 <td>{ appointment.customer}</td>
                 <td>{ appointment.appointment_date}</td>
                 <td>{ appointment.appointment_time}</td>
                <td>{ appointment.technician.name}</td>
                <td>{ appointment.reason }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>

  )
}

export default ListAppointments

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

  const handleDelete = async (e) => {
    const url = `http://localhost:8080/api/services/${e.target.id}`

    const fetchConfigs = {

      method: "Delete",
      headers: {
        "Content-Type": "application/json"
        }


    }

    const resp = await fetch(url, fetchConfigs)
    const data = await resp.json()

    setAppointments(appointments.filter(appointment => String(appointment.id) !== e.target.id))
  }

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
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => {
            return(
              <tr>
                 <td>{ appointment.automobile.vin }</td>
                 <td>{ appointment.customer}</td>
                 <td>{ appointment.appointment_date}</td>
                 <td>{ appointment.appointment_time}</td>
                <td>{ appointment.technician.name}</td>
                <td>{ appointment.reason }</td>
                <td>
                  <button onClick={handleDelete} id={appointment.id} className="btn btn-primary" style={{backgroundColor:"red", border: '1px solid red'}}>Cancel</button>
                  <button onClick={handleDelete} id={appointment.id} className="btn btn-primary" style={{backgroundColor:"green", border: '1px solid green'}}>Finish</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>

  )
}

export default ListAppointments

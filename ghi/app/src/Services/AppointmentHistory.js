import React, {useState, useEffect } from 'react';

function AppointmentHistory() {

  const [appointments, setAppointments] = useState([])
  const [automobiles, setAutomobiles] = useState([])


  const fetchData = async () => {
    const url = 'http://localhost:8100/api/automobiles';
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setAutomobiles(data.autos);
    }
  }

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

  useEffect(()=>{
    fetchData()
  }, [])

  const handleAutomobileChange = (event) => {
    const value = event.target.value;
    setAppointments(value);
  }

  return (
    <div>
      <h1>Appointment history</h1>
      <select value={automobiles} onChange={handleAutomobileChange} required id ="automobiles" name="automobiles" className="form-select form-select-lg form-select-padding-lg mb-3" >
        <option value="">Choose an automobile VIN</option>
        {automobiles.map(automobile => {
          return(
            <option key={ automobile.vin } value={ automobile.vin }>
              { automobile.vin }
            </option>
          )
        })}
      </select>
      <table className="table table-striped">
      <thead>
        <tr>
          <th>VIN</th>
          <th>Customer name</th>
          <th>Date</th>
          <th>Time</th>
          <th>Technician</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map(appointment => {
          return(
            <tr key={ appointment.id }>
              <td>{ appointment.automobile.vin }</td>
              <td>{ appointment.customer }</td>
              <td>{ appointment.appointment_date }</td>
              <td>{ appointment.appointment_time }</td>
              <td>{ appointment.technician.name}</td>
              <td>{ appointment.reason}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>

  )
}

export default AppointmentHistory

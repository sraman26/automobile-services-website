import React, { useState, useEffect } from 'react';

function AppointmentForm() {
    const [appointments, setAutomobiles] = useState([])
    const [technicians, setTechnicians] = useState([])

    const [customer, setCustomer] = useState("");
    const [technician, setTechnician] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [reason, setReason] = useState("");
    const [automobile, setAutomobile] = useState("");

    const handleCustomerChange = (event) => {
        const value = event.target.value
        setCustomer(value);
    }
    const handleTechnicianChange = (event) => {
        const value = event.target.value
        setTechnician(value);
    }
    const handleDateChange = (event) => {
        const value = event.target.value
        setDate(value);
    }
    const handleTimeChange = (event) => {
        const value = event.target.value
        setTime(value);
    }
    const handleReasonChange = (event) => {
        const value = event.target.value
        setReason(value);
    }
    const handleAutomobileChange = (event) => {
        const value = event.target.value
        setAutomobile(value);
    }

    const fetchData = async () => {
        const autoUrl = 'http://localhost:8100/api/automobiles/';
        const techUrl = 'http://localhost:8080/api/services/technicians/';
        const autoResp = await fetch(autoUrl);
        const techResp = await fetch(techUrl);

        if (autoResp.ok && techResp.ok) {
            const autoData = await autoResp.json();
            const techData = await techResp.json();
            setAutomobiles(autoData.autos)
            setTechnicians(techData.technicians)
        }


    }

    useEffect(() => {
      fetchData();
    }, []);

    const handleSubmit = async (event) => {
      event.preventDefault();

      const data = {};


        data.customer = customer;
        data.technician = technician;
        data.reason = reason;
        data.automobile = automobile;
        data.appointment_date = date;
        data.appointment_time = time;

        const appointmentURL = 'http://localhost:8080/api/services/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch(appointmentURL, fetchConfig);
        const newAppointment = await response.json();

        setCustomer('');
        setTechnician('');
        setReason('');
        setAutomobile('');
        setDate('');
        setTime('');
    }
    return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Enter New Appointment</h1>
              <form onSubmit={handleSubmit} id="create-appointment-form">
                <div className="mb-3">
                    <select value={automobile} onChange={handleAutomobileChange} required type ="text" id="automobile" className="form-select">
                        <option value="">Choose an automobile by VIN</option>
                        {appointments.map(auto => {
                            return (
                                <option key={auto.vin} value={auto.vin}>
                                    {auto.vin}
                                </option>
                            )
                        })}
                    </select>
                    </div>
                    <div className="mb-3">
                    <select value={technician} onChange={handleTechnicianChange} required name="technician" id="technician" className="form-select">
                        <option value="">Choose a Technician</option>
                        {technicians.map(technicians => {
                            return (
                                <option key={technicians.name} value={technician.name}>
                                    {technicians.name}
                                </option>
                            )
                        })}
                    </select>
                    </div>
                    <div className="form-floating mb-3">
                    <input value={customer} onChange={handleCustomerChange} placeholder="customer" required type="text" name="customer" id="customer" className="form-control"/>
                    <label htmlFor="name">Customer</label>
                    </div>
                    <div className="form-floating mb-3">
                    <input value={reason} onChange={handleReasonChange} placeholder="Reason" required type="text" name="reason" id="reason" className="form-control"/>
                    <label htmlFor="name">Reason</label>
                    </div>
                    <div className="form-floating mb-3">
                    <input value={date} onChange={handleDateChange} placeholder="date" required type="date" name="date" id="date" className="form-control"/>
                    <label htmlFor="name">Date</label>
                    </div>
                    <div className="form-floating mb-3">
                    <input value={time} onChange={handleTimeChange} placeholder="time" required type="time" name="time" id="time" className="form-control"/>
                    <label htmlFor="name">Time</label>
                    </div>
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
            </div>
      );
}

export default AppointmentForm

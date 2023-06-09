import { NavLink } from 'react-router-dom';
import React from 'react';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link active" to="/manufacturers">Manufacturers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/automobiles">Automobiles</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/models">Models</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/manufacturers/new">Add a manufacturer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/automobiles/new">Add an automobile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/models/new">Create a model</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="services/">Appointments</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="services/new">Create Appointment</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="services/technicians/new">Create Technician</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="services/history">Appointment History</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/sales/salesperson">Add a salesperson</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/sales/customer">Add a customer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/sales/new">Record a new sale</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/sales">List all sales</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/sales/history">Sales person history</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;

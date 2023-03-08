import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ListVehicleModels from './Vehicles/ListVehicleModels';
import FormVehicleModel from './Vehicles/FormVehicleModel';
import ListAutomobiles from './Automobiles/ListAutomobiles';
import FormAutomobile from './Automobiles/FormAutomobile';
import ListManufacturer from './Manufacturer/ListManufacturer';
import FormManufacturer from './Manufacturer/FormManufacturer';
import FormCustomer from './Sales/FormCustomer';
import FormSalesRecord from './Sales/FormSalesRecord';
import FormSalesPerson from './Sales/FormSalesPerson';
import ListAllSales from './Sales/ListAllSales';
import ListSalesHistory from './Sales/ListSalesHistory';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers">
            <Route index element={<ListManufacturer />} />
            <Route path="new" element={<FormManufacturer />} />
          </Route>
          <Route path="models">
            <Route index element={<ListVehicleModels />} />
            <Route path="new" element={<FormVehicleModel />} />
          </Route>
          <Route path="automobiles">
            <Route index element={<ListAutomobiles />} />
            <Route path="new" element={<FormAutomobile />} />
          </Route>
          <Route path="sales">
            <Route index element={<ListAllSales />} />
            <Route path="salesperson" element={<FormSalesPerson />} />
            <Route path="customer" element={<FormCustomer />} />
            <Route path="new" element={<FormSalesRecord />} />
            <Route path="history" element={<ListSalesHistory />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

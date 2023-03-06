import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import React from 'react';
import ListManufacturer from "./Manufacturer/ListManufacturer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers/">
            <Route index element={<ListManufacturer />} />

          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

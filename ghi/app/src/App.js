import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ListVehicleModels from './ListVehicleModels';
import FormVehicleModel from './FormVehicleModel';
import ListAutomobiles from './ListAutomobiles';
import FormAutomobile from './FormAutomobile';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="models">
            <Route index element={<ListVehicleModels />} />
            <Route path="new" element={<FormVehicleModel />} />
          </Route>
          <Route path="automobiles">
            <Route index element={<ListAutomobiles />} />
            <Route path="new" element={<FormAutomobile />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

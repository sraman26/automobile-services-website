import React, {useState, useEffect } from 'react';

function FormVehicleModel() {
    const [manufacturers, setManufacturers] = useState([])

    const [name, setName] = useState("");
    const [picture_url, setPictureurl] = useState("");
    const [manufacturer, setManufacturer] = useState("");

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }
    const handlePictureUrlChange = (event) => {
        const value = event.target.value;
        setPictureurl(value);
    }
    const handleManufacturerChange = (event) => {
        const value = event.target.value;
        setManufacturer(value);
    }

    const fetchData = async () => {
      const url = 'http://localhost:8100/api/manufacturers/';
      const response = await fetch(url);
      const data = await response.json();
      setManufacturers(data.manufacturers);
    }


    useEffect(() => {
      fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.name = name;
        data.picture_url = picture_url;
        data.manufacturer = manufacturer;
        console.log("this is data", data)
        const modelsUrl = 'http://localhost:8100/api/models/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(modelsUrl, fetchConfig);
        const newModel = await response.json();

        setName('');
        setPictureurl('');
        setManufacturer('');
      }


    return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Create a vehicle model</h1>
              <form onSubmit={handleSubmit} id="create-model-form">
                <div className="form-floating mb-3">
                  <input value={name} onChange={handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input value={picture_url} onChange={handlePictureUrlChange} placeholder="Url" required type="text" name="picture_url" id="picture_url" className="form-control"/>
                  <label htmlFor="url">Picture Url</label>
                </div>
                <div className="mb-3">
                  <select value={manufacturer} onChange={handleManufacturerChange} required name="manufacturer" id="manufacturer" className="form-select">
                    <option value="">Choose a manufacturer</option>
                    {manufacturers.map(manufacturer => {
                        return (
                            <option key={manufacturer.name} value={manufacturer.name}>
                                {manufacturer.name}
                            </option>
                        )
                    })}
                  </select>
                </div>
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
      );

}

export default FormVehicleModel

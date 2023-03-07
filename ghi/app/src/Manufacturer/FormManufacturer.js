import React, {useState, useEffect } from 'react';

function FormManufacturer() {
    const [manufacturers, setManufacturers] = useState([])

    const [name, setName] = useState("");

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const fetchData = async () => {
        const url = 'http://localhost:8100/api/manufacturers/';
        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          setManufacturers(data.manufacturers);
          console.log(data.models)
        }
    }

    useEffect(() => {
      fetchData();
    }, []);


    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {};

        data.name = name;
        console.log(data)

        const manufacturerUrl = 'http://localhost:8100/api/manufacturers/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await fetch(manufacturerUrl, fetchConfig);
        if (response.ok) {
          const newManufacturer = await response.json();
          console.log(newManufacturer)

          setName('');
        }
      }


    return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Create a Manufacturer</h1>
              <form onSubmit={handleSubmit} id="create-manufacturer-form">
                <div className="form-floating mb-3">
                  <input value={name} onChange={handleNameChange} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                  <label htmlFor="name">Name</label>
                </div>
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
      );

}

export default FormManufacturer

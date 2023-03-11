
import React, {useState, useEffect } from 'react';

function ListVehicleModels() {
    const [vehiclemodels, setVehicleModels] = useState([])

    const getData = async () => {
      const response = await fetch('http://localhost:8100/api/models/')
      if (response.ok) {
        const data = await response.json()
        setVehicleModels(data.models)
      }
    }

    useEffect(()=>{
        getData()
    }, [])

    return (
        <div>
            <h1>Vehicle models</h1>
            <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Manufacturer</th>
                    <th>Picture</th>
                </tr>
            </thead>
            <tbody>
                {vehiclemodels.map(model => {
                return(
                    <tr key={model.href}>
                        <td>{ model.name }</td>
                        <td>{ model.manufacturer.name }</td>
                        <td>
                            <img src={ model.picture_url } className="img-fluid img-thumbnail" alt=""></img>
                        </td>
                    </tr>
                );
                })}
            </tbody>
            </table>
        </div>

    )
 }

export default ListVehicleModels

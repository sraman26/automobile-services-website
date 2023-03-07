import React, {useState, useEffect } from 'react';

function ListManufacturer()
{
    const [manufacturers, setManufacturers] = useState([])

    const getManufacturerData = async () => {
        const manufacturer_url = " 	http://localhost:8100/api/manufacturers/"
        const manufacturerResponse = await fetch(manufacturer_url)

        if (manufacturerResponse.ok) {
            const manufacturer_data = await manufacturerResponse.json()
            setManufacturers(manufacturer_data.manufacturers)
        }
    }

    useEffect((() => {
        getManufacturerData();
    }), []);

    return (
        <div>
            <h1>Manufacturers</h1>
        <table className = "table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {manufacturers.map(manufacturer => {
                    return (
                        <tr key={manufacturer.href}>
                            <td>{ manufacturer.name }</td>
                        </tr>
                        );
                    })}
            </tbody>
        </table>
        </div>
    );
}
export default ListManufacturer

import { useState } from "react";
import { useNavigate } from "react-router-dom";  
import axios from "axios";  
import PageHeader from "../header/PageHeader";

function FlightCreate() {
    const [flight, setFlight] = useState({
        id: "",
        number: "",
        airline_name: "",
        source: "",
        destination: "",
        capacity: "",
        price: ""
    });

    const onBoxChange = (event) => {
        setFlight(prevFlight => ({
            ...prevFlight,
            [event.target.id]: event.target.value
        }));
    };

    const navigate = useNavigate();

    const onCreate = async () => {
        try {
            const baseurl = "http://localhost:8080";
            const response = await axios.post(`${baseurl}/flights`, {
                ...flight,
                capacity: parseInt(flight.capacity, 10),
                price: parseFloat(flight.price)
            });
            alert(response.data.message);
            navigate('/flights/list');
        } catch (error) {
            alert('Server Error');
        }
    };

    return (
        <>
            <PageHeader PageNumber={2} />
            <h3>
                <a href="/flights/list/" className="btn btn-light">Go Back</a> New Flight
            </h3>
            <div className="container">
                <div className="form-group mb-3">
                    <label htmlFor="number" className="form-label">Flight Number</label>
                    <input type="text" className="form-control" id="number" placeholder="Enter flight number" 
                        value={flight.number} onChange={onBoxChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="airline_name" className="form-label">Airline Name</label>
                    <input type="text" className="form-control" id="airline_name" placeholder="Enter airline name"
                        value={flight.airline_name} onChange={onBoxChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="source" className="form-label">Source</label>
                    <input type="text" className="form-control" id="source" placeholder="Enter source"
                        value={flight.source} onChange={onBoxChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="destination" className="form-label">Destination</label>
                    <input type="text" className="form-control" id="destination" placeholder="Enter destination"
                        value={flight.destination} onChange={onBoxChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="capacity" className="form-label">Capacity (Seats)</label>
                    <input type="number" className="form-control" id="capacity" placeholder="Enter capacity"
                        value={flight.capacity} onChange={onBoxChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" step="0.01" className="form-control" id="price" placeholder="Enter price"
                        value={flight.price} onChange={onBoxChange} />
                </div>
                <button className="btn btn-success" onClick={onCreate}>Create Flight</button>
            </div>
        </>
    );
}

export default FlightCreate;

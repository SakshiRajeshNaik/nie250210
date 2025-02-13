import { useState } from 'react';
import Pageheader from '../header/Pageheader';
import {useEffect} from 'react';
import axios from 'axios';

function FlightList() {
    const [flights,setFlights]=useState([]);
    const readAllFlights= async ()=>{
  try{
    const baseurl = "http://localhost:8080"
    const response = await axios.get(`${baseurl}/flights`);
    setFlights(response.data);
  } catch(error){
alert('server error');
  }
    };
    useEffect(()=>{readAllFlights();},[]);//after mount and after update
    return (
        <>
            <Pageheader PageNumber={1}/>
            <h3>List of flights</h3>
            <div className="container">
                <table className="table table-success table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">flight_number</th>
                            <th scope="col">Airline name </th>
                            <th scope="col">Source</th>
                            <th scope="col">Destination</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { flights.map( (flight)=>{
                            return(
                                <tr>
                            <th scope="row">{flight.number}</th>
                            <td className="text">{flight.airline_name}</td>
                            <td>{flight.source}</td>
                            <td>{flight.destination}</td>
                            <td><a href="/flights/edit/${flight.id}" className="btn btn-warning me-3">edit price</a>
                                <button className="btn btn-danger">delete</button></td>
                        </tr>

                            );
                        })
                        }
                        

                    </tbody>
                </table>
            </div>

        </>
    );
}
export default FlightList;
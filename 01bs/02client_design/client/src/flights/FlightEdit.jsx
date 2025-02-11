function FlightEdit() {
    return(
        <>
        <h3><a href="flight_list.html" className="btn btn-light">Go Back</a>Edit Flight Ticket Price</h3>  
  <div className="container">
    <div className="form-group mb-3">
       <label for="number" className="form-label">Flight number</label>
      <div><input type="text" className="form-control" id="number"/></div>
    </div>
    <div className="form-group mb-3">
        <label for="airline_name" className="form-label">Airline name</label>
       <div><input type="text" className="form-control" id="airline_name"/></div>
     </div>
     <div className="form-group mb-3">
        <label for="source" className="form-label">Source</label>
        <div><input type="text" className="form-control" id="source"/></div>
     </div>
     <div className="form-group mb-3">
        <label for="destination" className="form-label">Destination</label>
        <div><input type="text" className="form-control" id="destination"/></div>
     </div>
     <div className="form-group mb-3">
        <label for="capacity" className="form-label">Capacity (No. of seats)</label>
        <div><input type="text" className="form-control" id="capacity"/></div>
     </div>
     <div className="form-group mb-3">
        <label for="price" className="form-label">Price</label>
        <input type="text" className="form-control" id="price" placeholder="Please enter price"/>
     </div>
     <button className="btn btn-warning">Create Flight</button> 
  </div>
        </>
    );
}

export default FlightEdit;
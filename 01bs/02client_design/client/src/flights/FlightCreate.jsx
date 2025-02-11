function FlightCreate() {
    return (
        <>
            <h3><a href="flight_list.html" className="btn btn-light">Go Back</a>New flight</h3>
            <div className="container">
                <div className="form-group mb-3">
                    <label for="number" className="form-label">Flight number</label>
                    <input type="text" className="form-control" id="number" placeholder="please enter flight number"/>
                </div>
                <div className="form-group mb-3">
                    <label for="airline name" className="form-label">Airline name</label>
                    <input type="text" className="form-control" id="airline_name" placeholder="please enter airline name"/>
                </div>
                <div className="form-group mb-3">
                    <label for="source" className="form-label">Source</label>
                    <input type="text" className="form-control" id="source_name" placeholder="please enter source"/>
                </div>
                <div className="form-group mb-3">
                    <label for="destination " className="form-label">Destination</label>
                    <input type="text" className="form-control" id="distination_name" placeholder="please enter destination"/>
                </div>
                <div className="form-group mb-3">
                    <label for="capacity" className="form-label">Capacity(no of seats)</label>
                    <input type="text" className="form-control" id="capacity" placeholder="please enter capacity"/>
                </div>
                <div className="form-group mb-3">
                    <label for="price" className="form-label">Price</label>
                    <input type="text" className="form-control" id="price" placeholder="please enter price"/>
                </div>
                <button className="btn btn-success">CreateFlight</button>
            </div>
        </>
    );
}

export default FlightCreate;
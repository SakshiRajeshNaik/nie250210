import PageHeader from "../header/PageHeader";
function CoffeeCreate() {
    return (
        <>
        <PageHeader PageNumber={2}/>
            <h3><a href="/coffee/list" className="btn btn-light">Go Back</a>Coffee</h3>
            <div className="container">
                <div className="form-group mb-3">
                    <label for="id" className="form-label">Coffee ID</label>
                    <input type="text" className="form-control" id="number" placeholder="Please enter coffee id" />
                </div>
                <div className="form-group mb-3">
                    <label for="coffee_name" className="form-label">Coffee Name</label>
                    <input type="text" className="form-control" id="number" placeholder="Please enter coffee name" />
                </div>
                <div className="form-group mb-3">
                    <label for="category" className="form-label">Category</label>
                    <input type="text" className="form-control" id="number" placeholder="Please enter category" />
                </div>
                
                <div className="form-group mb-3">
                    <label for="sugar_level" className="form-label">Sugarlevel</label>
                    <input type="text" className="form-control" id="number" placeholder="Please enter sugar level" />
                </div>
                <div className="form-group mb-3">
                    <label for="price" className="form-label">Ticket Price</label>
                    <input type="text" className="form-control" id="number" placeholder="Please enter Ticket Price" />
                    <button className="btn btn-success">Create Flight</button>
                </div>
            </div>
            </>
            );
}

            export default CoffeeCreate;
import PageHeader from "../header/PageHeader";

function CoffeeEdit(){
    return(
        <>
        <PageHeader/>
        <h3><a href="/coffee/list" className="btn btn-light">Go Back</a>Edit Coffee Price</h3>
    <div className="container">
        <div classNameName="form-group mb-3">
            <label for="number" className="form-label">Coffee ID</label>
            <div type="text" className="form-control" id="number">???</div>
        </div>
        <div className="form-group mb-3">
            <label for="airline_name" className="form-label">Coffee Name</label>
            <div type="text" className="form-control" id="number">???</div>
        </div>
        <div className="form-group mb-3">
            <label for="category" className="form-label">Category</label>
            <div className="form-control" id="number">???</div>
        </div>
    
        <div className="form-group mb-3">
            <label for="sugar_level" className="form-label">Sugar level</label>
            <div className="form-control" id="number">???</div>
        </div>
        <div className="form-group mb-3">
            <label for="price" className="form-label"> Coffee Price</label>
            <input type="text" className="form-control" id="number" placeholder="Please enter Coffee Price"/>
        </div>
        <button className="btn btn-warning">Update Price</button>
    </div>
        </>
    );
}

export default CoffeeEdit;
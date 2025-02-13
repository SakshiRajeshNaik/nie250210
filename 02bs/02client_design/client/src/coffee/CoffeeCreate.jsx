import { Link } from "react-router-dom";
import PageHeader from "../header/PageHeader";

function CoffeeCreate() {
    return (
        <>
            <PageHeader pageNumber={2} />
            <h3>
                <Link to="/coffee/list" className="btn btn-light me-2">Go Back</Link>
                Create Coffee
            </h3>
            <div className="container">
                <form>
                    <div className="form-group mb-3">
                        <label htmlFor="coffeeId" className="form-label">Coffee ID</label>
                        <input type="text" className="form-control" id="coffeeId" placeholder="Please enter coffee ID" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="coffeeName" className="form-label">Coffee Name</label>
                        <input type="text" className="form-control" id="coffeeName" placeholder="Please enter coffee name" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <input type="text" className="form-control" id="category" placeholder="Please enter category" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="sugarLevel" className="form-label">Sugar Level</label>
                        <input type="text" className="form-control" id="sugarLevel" placeholder="Please enter sugar level" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="text" className="form-control" id="price" placeholder="Please enter price" />
                    </div>
                    <button type="submit" className="btn btn-success">Create Coffee</button>
                </form>
            </div>
        </>
    );
}

export default CoffeeCreate;
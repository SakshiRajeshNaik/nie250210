import { useParams, Link } from "react-router-dom";
import PageHeader from "../header/PageHeader";

const coffeeList = [
    { id: 1, name: "Filter", category: "Large", sugarLevel: "Normal", price: "250" },
    { id: 2, name: "Instant", category: "Medium", sugarLevel: "Less", price: "180" },
    { id: 3, name: "Filter", category: "Small", sugarLevel: "No", price: "210" }
];

function CoffeeEdit() {
    const { id } = useParams();  // Get coffee ID from URL
    const coffee = coffeeList.find(c => c.id === parseInt(id));  // Find coffee details

    if (!coffee) {
        return <h3 className="text-danger">Coffee order not found!</h3>;
    }

    return (
        <>
            <PageHeader />
            <h3>
                <Link to="/coffee/list" className="btn btn-light me-2">Go Back</Link>
                Edit Coffee Order (ID: {coffee.id})
            </h3>
            <div className="container">
                <form>
                    <div className="form-group mb-3">
                        <label className="form-label">Coffee ID</label>
                        <input type="text" className="form-control" defaultValue={coffee.id} />
                       
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Coffee</label>
                        <input type="text" className="form-control" defaultValue={coffee.name} />
                        
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Category</label>
                        <input type="text" className="form-control" defaultValue={coffee.category} />
                        
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Sugar Level</label>
                        <input type="text" className="form-control" defaultValue={coffee.sugarLevel} />
                       
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Coffee Price</label>
                        <input type="text" className="form-control" defaultValue={coffee.price} />
                    </div>
                    <button type="submit" className="btn btn-warning">Update Order</button>
                </form>
            </div>
        </>
    );
}

export default CoffeeEdit;
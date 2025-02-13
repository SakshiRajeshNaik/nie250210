import { Link } from "react-router-dom";
import PageHeader from "../header/PageHeader";

const coffeeList = [
    { id: 1, name: "Filter", category: "Large", sugarLevel: "Normal", price: "250" },
    { id: 2, name: "Instant", category: "Medium", sugarLevel: "Less", price: "180" },
    { id: 3, name: "Filter", category: "Small", sugarLevel: "No", price: "210" }
];

function CoffeeOrder() {
    return (
        <>
            <PageHeader pageNumber={1} />
            <h3>List of Coffee</h3>
            <div className="container">
                <table className="table table-primary table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Coffee</th>
                            <th scope="col">Category</th>
                            <th scope="col">Sugar Level</th>
                            <th scope="col">Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coffeeList.map((coffee) => (
                            <tr key={coffee.id}>
                                <th scope="row">{coffee.id}</th>
                                <td>{coffee.name}</td>
                                <td>{coffee.category}</td>
                                <td>{coffee.sugarLevel}</td>
                                <td>{coffee.price}</td>
                                <td>
                                    {/* Link to edit page with coffee ID */}
                                    <Link to={`/coffee/edit/${coffee.id}`} className="btn btn-primary me-2">Edit Order</Link>
                                    <button className="btn btn-danger">Cancel Order</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default CoffeeOrder;
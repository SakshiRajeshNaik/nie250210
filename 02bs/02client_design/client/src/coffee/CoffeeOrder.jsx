import PageHeader from "../header/PageHeader";
function CoffeeOrder() {
    return (
        <>
            <PageHeader PageNumber={1} />
            <h3>List of Coffee</h3>
            <div className="container">
                <table className="table table-primary table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">id</th> 
                            <th scope="col">Coffee Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Suger Level</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Filter</td>
                            <td>Large</td>
                            <td>Normal</td>
                            <td><a href="coffee_edit.html" className="btn btn-warning">Edit order</a>
                                <button className="btn btn-danger">Cancel order</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Instant</td>
                            <td>medium</td>
                            <td>less</td>
                            <td><a href="coffee_edit.html" className="btn btn-warning">Edit order</a>
                                <button className="btn btn-danger">Cancel order</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default CoffeeOrder;
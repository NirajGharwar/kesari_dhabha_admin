import "./Customers.css";

function Customers(){
  return (
    <div className="customers">
      <div className="customers-header">
        <h1 className="customers-title">Customers</h1>
        <button className="add-btn">+ Add Customer</button>
      </div>

      <div className="table-container">
        <table className="customers-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Total Orders</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#C001</td>
              <td>Rahul Sharma</td>
              <td>9876543210</td>
              <td>rahul@example.com</td>
              <td>12</td>
              <td><button className="action-btn">View</button></td>
            </tr>
            <tr>
              <td>#C002</td>
              <td>Priya Singh</td>
              <td>9988776655</td>
              <td>priya@example.com</td>
              <td>8</td>
              <td><button className="action-btn">View</button></td>
            </tr>
            <tr>
              <td>#C003</td>
              <td>Amit Verma</td>
              <td>9123456789</td>
              <td>amit@example.com</td>
              <td>15</td>
              <td><button className="action-btn">View</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;

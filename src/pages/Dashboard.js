import "./Dashboard.css";

function Dashboard(){
  return (
    <div className="dashboard">
      <h1 className="page-title">Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Orders</h3>
          <p>120</p>
        </div>
        <div className="stat-card">
          <h3>Total Customers</h3>
          <p>45</p>
        </div>
        <div className="stat-card">
          <h3>Revenue</h3>
          <p>₹ 32,000</p>
        </div>
        <div className="stat-card">
          <h3>Pending Orders</h3>
          <p>8</p>
        </div>
      </div>

      {/* <div className="recent-orders">
        <h2>Recent Orders</h2>
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1001</td>
              <td>Rahul Sharma</td>
              <td>3</td>
              <td><span className="status delivered">Delivered</span></td>
              <td>₹450</td>
            </tr>
            <tr>
              <td>#1002</td>
              <td>Anita Verma</td>
              <td>2</td>
              <td><span className="status pending">Pending</span></td>
              <td>₹300</td>
            </tr>
            <tr>
              <td>#1003</td>
              <td>Guest</td>
              <td>5</td>
              <td><span className="status preparing">Preparing</span></td>
              <td>₹750</td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Dashboard;

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
    </div>
  );
};

export default Dashboard;

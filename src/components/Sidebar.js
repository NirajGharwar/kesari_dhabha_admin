import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar ({ onLogout }) {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">Kesari Dhabha Admin</div>
      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-link">Dashboard</Link>
        <Link to="/orders" className="sidebar-link">Orders</Link>
        <Link to="/customers" className="sidebar-link">Customers</Link>
        <Link to="/products" className="sidebar-link">Products/Meals</Link>
        <Link to="/invoices" className="sidebar-link">Invoices</Link>
        <Link to="/reports" className="sidebar-link">Reports</Link>
      </nav>
      <div className="sidebar-footer">
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}; 

export default Sidebar;

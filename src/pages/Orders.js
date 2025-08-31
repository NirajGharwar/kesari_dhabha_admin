import "./Orders.css";
import { Link } from "react-router-dom";

function Orders(){
  const orders = [
    { id: 1, customer: "Amit Sharma", items: "Meal Plan A", total: "₹250", status: "Pending" },
    { id: 2, customer: "Sneha Gupta", items: "Sandwich, Juice", total: "₹180", status: "Completed" },
    { id: 3, customer: "Rahul Verma", items: "Meal Plan B", total: "₹300", status: "Pending" },
  ];

  return (
    <div className="orders">
      <div className="orders-header">
        <h1>Orders</h1>
        <Link to="/orders/new" className="add-btn">+ New Order</Link>
      </div>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Total Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>#{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.items}</td>
              <td>{order.total}</td>
              <td>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;

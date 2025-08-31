import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./Products.css";

function Products(){
  const navigate = useNavigate();
  const [products, setProducts] = useState([
    { id: 1, name: "Veg Thali", price: 120, stock: 10 },
    { id: 2, name: "Paneer Butter Masala", price: 150, stock: 8 },
    { id: 3, name: "Masala Dosa", price: 90, stock: 15 },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.stock) return;
    const newId = products.length + 1;
    setProducts([...products, { id: newId, ...newProduct }]);
    setNewProduct({ name: "", price: "", stock: "" });
  };

  return (
    <div className="products-page">
      <h1 className="page-title">Products / Meals</h1>

      <div className="add-form">
        <input
          type="text"
          name="name"
          placeholder="Product name"
          value={newProduct.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleChange}
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={newProduct.stock}
          onChange={handleChange}
        />
        <button onClick={addProduct}>Add</button>
      </div>

      <table className="products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price (₹)</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>₹{p.price}</td>
              <td>{p.stock}</td>
              <td>
                <FaEdit
                  className="action-icon edit-icon"
                  onClick={() =>
                    navigate(`/products/edit/${p.id}`, { state: p })
                  }
                />
                <FaTrash
                  className="action-icon delete-icon"
                  onClick={() =>
                    setProducts(products.filter((prod) => prod.id !== p.id))
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;

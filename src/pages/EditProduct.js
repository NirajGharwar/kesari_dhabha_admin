import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./EditProduct.css";

function EditProduct(){
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [product, setProduct] = useState({ name: "", price: "", stock: "" });

  useEffect(() => {
    if (location.state) {
      setProduct(location.state);
    }
  }, [location.state]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    alert("Product updated successfully!");
    navigate("/products");
  };

  return (
    <div className="edit-container">
      <h2>Edit Product (ID: {id})</h2>
      <form className="edit-form">
        <label>Product Name</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
        />

        <label>Price (₹)</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
        />

        <label>Stock</label>
        <input
          type="number"
          name="stock"
          value={product.stock}
          onChange={handleChange}
        />

        <div className="btn-group">
          <button type="button" className="btn save" onClick={saveChanges}>
            Save
          </button>
          <button
            type="button"
            className="btn cancel"
            onClick={() => navigate("/products")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;

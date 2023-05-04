import React, { useState } from "react";
import "../Addpro/addproform.css";
import axios from "axios";
const AddProduct = ({ handleAddProduct, handleClose, apicall}) => {
  const [product, setProduct] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/meals", {
      title: product.title,
      image: product.Image,
      price: product.price,
      description: product.description,
    }); 
    apicall();
    handleClose();
  }; 

  return (
    <div className="add-product-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Product Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={product.title}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter product title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Image">Product Image:</label>
          <input
            type="url"
            id="Image"
            name="Image"
            value={product.Image}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter product Image"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Product Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter product price"
            min="0"
            step="0.01"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Product Description:</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter product description"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

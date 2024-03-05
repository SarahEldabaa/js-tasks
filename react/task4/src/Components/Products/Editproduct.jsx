import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductsContext from "../../ContextApis/ProductsContext";

const EditProduct = () => {
  const { id } = useParams(); 
  const { products, editProduct } = useContext(ProductsContext); 
  const [editedProduct, setEditedProduct] = useState(null); 

  useEffect(() => {
    console.log("Fetching product...");
    const product = products.find((product) => product.id === id);
    console.log("Fetched product:", product);
    setEditedProduct(product);
  }, [products, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editProduct(id, editedProduct); 
  };

  if (!editedProduct) {
    return <div>Loading...</div>; 
  }

  return <>
    <div className="container mt-5">
      <h2 className="text-start text-danger my-3">Edit Product</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={editedProduct.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description:</label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={editedProduct.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock:</label>
          <input
            type="number"
            className="form-control"
            name="stock"
            value={editedProduct.stock}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-info">Save Changes</button>
      </form>
    </div>
  </>
};

export default EditProduct;

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProductsContext from "../../ContextApis/ProductsContext";

const Productsdetails = () => {
  const { id } = useParams(); // Retrieve the ID parameter from the URL
  const { products } = useContext(ProductsContext);

  // Find the product with the specified ID
  const product = products.find(product => product.id === id);

  if (!product) {
    return <div>Loading...</div>; // Or display an error message
  }

  return <>
  <div className="container">
  <h2 className="text-start text-danger my-3">Product Details</h2>
  <hr />
  <div className="row">
    <div className="col-md-6">
      <img width= "300px"
      height= "300px"
      src={product.thumbnail} className="card-img-top w-100" alt="Product Thumbnail" />
    </div>
    <div className="card-body col-md-6">
      <h5 className="card-title mx-3 mt-3">{product.title}</h5>
      <p className="card-text mx-3 mt-1">Description: {product.description}</p>
      <p className="card-text mx-3 mt-1">Price: {product.price} $</p>
      <p className="card-text mx-3 mt-1">Category: {product.category}</p>
      <span className="fw-bold mx-3 mt-1">Stock: <span className="text-danger">{product.stock}</span></span>
      <div className="mt-3 d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
        <Link className="btn btn-outline-info w-50" to={`/addtocart/${product.id}`}>Add to Cart</Link>
      </div>
    </div>
  </div>
</div>
  </>
};

export default Productsdetails;

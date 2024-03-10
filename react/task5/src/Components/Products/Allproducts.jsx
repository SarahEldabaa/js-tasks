import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchProducts,
  deleteProduct,
} from "../../Actions/productsActions";
import { addToCart, incrementCartCount } from "../../Actions/cartActions";
import Styles from "./Allproducts.module.css";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Check if products is not an array
  if (!Array.isArray(products)) {
    return <div>No products available</div>;
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(incrementCartCount());
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(productId));
    }
  };

  return (
    <div>
      <h2 className="mb-3 text-center fw-bold text-info">All Products</h2>
      <hr className="mb-5" />
      <div className={`${Styles.cardContainer} row g-2 `}>
        {products.map((product) => (
          <div
            key={product.id}
            className="col-md-6 col-lg-3 col-sm-12 d-flex justify-content-center"
          >
            <div className="card" style={{ width: "18rem", border: "none" }}>
              <img
                src={product.image}
                className="card-img-top"
                alt="Product Img"
                width={300}
                height={300}
              />
              <div className="card-body">
                <h5 className={`${Styles.cardTitle} `}>{product.title}</h5>
                <div>
                  <span>Category: </span>
                  <span>{product.category}</span>
                </div>
                <div className="mt-1">
                  <span>Price: </span>
                  <span className="text-success">{product.price}$</span>
                </div>
                <div className=" d-flex flex-column align-items-center justify-content-center mt-2 ">
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-outline-info w-100 mb-2 "
                  >
                    Details
                  </Link>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="btn btn-outline-danger w-100 mb-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="btn btn-outline-success  w-100"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;

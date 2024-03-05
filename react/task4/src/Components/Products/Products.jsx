import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductsContext from "../../ContextApis/ProductsContext";
import styles from "./Products.module.css";

const Products = () => {
  const { products, getProducts, deleteProduct } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const handleDelete = (id) => {
    deleteProduct(id);
  };

  return (
    <>
    <div className="container">
      <h2 className="text-start text-danger my-3">Products</h2>
      <hr />
      <div className="row g-2  mt-1">
        {products.map((product, index) => (
          <div className="col-lg-3 col-md-6" key={index}>
            <div>
              <img
                height="300px"
                className="w-100 rounded "
                src={product.thumbnail}
                alt="Product Thumbnail"
              />
              <div className="p-3">
                <h4>{product.title}</h4>
                <p className={styles.productDesc}>{product.description}</p>
                <span className="fw-bold">
                  Stock: <span className="text-success">{product.stock}</span>
                </span>
                <div className="mt-2">
                  <Link
                    className="btn btn-outline-info my-2 w-100"
                    to={`/products/${product.id}/edit`}
                  >
                    Edit
                  </Link>

                  <button
                    className="btn btn-outline-danger w-100 my-2"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                  <Link className="btn btn-outline-dark w-100 my-2" to={`/products/${product.id}`}>
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Products;
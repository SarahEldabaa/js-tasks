import React from "react";
import useFetch from "../../useFetch";
import { Fragment } from "react";
import styles from "./Products.module.css";

export default function Products() {
  const { data, loading, error } = useFetch("http://localhost:2000/products");

  if (loading) {
    return (
      <>
        <div className="container mt-5 text-center min-vh-100 d-flex justify-content-center align-items-center">
          <div>
            <h2>Data is loading...</h2>
            <div className="spinner-border" role="status"></div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
          <h2 className="alert alert-danger w-100 text-center ">
            Error: {error.message}
          </h2>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container">
              <h2 className="text-start my-3 text-danger">Products</h2>
              <hr />
              <div className="row g-3  mt-1">
                {data.map((product, index) => (
                  <Fragment key={index}>
                    <div className="col-lg-3 ">
                      <div className={` ${styles.productContainer}`}>
                        <img
                          height="300px"
                          className={`w-100  rounded ${styles.productImage}`}
                          src={product.thumbnail}
                          alt="product thumbnail"
                        />
                        <div className={`p-1 ${styles.productInfo}`}>
                          <h4>{product.title}</h4>
                          <p  className={styles.productDesc}>{product.description}</p>
                          <span className="fw-bold">
                            Stock: <span className="text-danger">{product.stock}</span>
                          </span>
                          <input
                            className=" d-block w-25"
                            type="number"
                          />
                          <button className="btn btn-outline-info w-100 p-1 my-1 btn-sm">
                            Buy
                          </button>
                        </div>
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
      </div>

    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container text-center ">
        <h2 className="fw-bold text-info">Welcome to home component</h2>
        <Link to="/products" className="btn btn-info">
          Products
        </Link>
      </div>
    </>
  );
}

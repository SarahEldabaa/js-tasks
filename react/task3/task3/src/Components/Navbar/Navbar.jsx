import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
        return <>
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/">Tasks</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" to="addproduct">Add products</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" to="products">Products</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
         </>
}

export default Navbar;
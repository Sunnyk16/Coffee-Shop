import React from 'react';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {





  return (



    <>

      <nav className="navbar navbar-expand-lg bg-navbar fixed-top shadow-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold g-font-b text-uppercase " to="/">
            Coffee Shop
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 f-small">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
              {/* <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li> */}

              <li className="nav-item">
                <Link className="nav-link" to="/faq">FaQ</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/subscriptions">Subscription</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/review">Review</Link>
              </li>




              {/* Dropdown */}
              {/* <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <Link className="dropdown-item" to="/faq">FaQ</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/subscriptions">Subscription</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/review">Review</Link>
                </li>
              </ul>
            </li> */}
            </ul>
            <form className="d-flex g-font-b" role="search">
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
              <Link to="/login">
                <div className='btn btn-outline-dark '>
                  LOGIN
                </div>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

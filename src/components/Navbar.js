import React from "react";

function Navbar(){
  return (
    <nav className="navbar navbar-expand-xl bg-primary navbar-dark">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbar_pms_toggler" aria-controls="navbar_pms_toggler" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a href="/" className="navbar-brand">
          <i className="bi bi-heart-fill me-2 text-danger"></i>
          Gilbert's Property Management System
        </a>
        <div className="collapse navbar-collapse" id="navbar_pms_toggler">
          <div className="navbar-nav navbar-nav-scroll ms-auto">
            <a className="nav-item nav-link active" aria-current="page" href="/">Home</a>
            <a className="nav-item nav-link" href="#">Resident</a>
            <a className="nav-item nav-link" href="#">Fob</a>
            <a className="nav-item nav-link" href="#">Locker</a>
            <a className="nav-item nav-link" href="/about">About</a>
          </div>
          <form className="d-flex ms-3">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Go</button>   
          </form>
        </div>
      </div>
    </nav>        
  )
};

export default Navbar;
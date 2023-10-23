import React from "react";
import dog1 from '../images/dog1.jpg'

function About(){
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="container justify-content-center mt-4">Gilbert Ng</h1>
          <div className="card">
            <div className="card-header">
              This is a react application.
            </div>
            <img className="card-img" src={dog1} alt="Oscar" />
            <div className="card-body">
              <h5 className="card-title">Property Management System (PMS)</h5>
              {/* <h5 className="card-subtitle">Mayor of Binaryville</h5> */}
              <p className="card-text lh-sm">A well-designed system for managing resident informations.</p>
              {/* <a href="#" className="card-link">more info</a> */}
            </div>
            {/* <div className="card-footer">
              Now on sale
            </div>  */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default About;
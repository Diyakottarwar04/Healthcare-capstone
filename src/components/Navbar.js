import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">HealthCareApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/signup">Signup</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/appointment">Book Appointment</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/notification">Notifications</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/reviews">Reviews</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
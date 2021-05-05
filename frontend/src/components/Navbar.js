import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-sm bg-white navbar-light fixed-top">
            <div className="container">
                <a href="#home" className="navbar-brand">Cleaning Service</a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span><i className="fas fa-bars toggle-icon"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-link">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/testimonials" className="nav-link">Testimonials</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>        
    )
}

export default Navbar

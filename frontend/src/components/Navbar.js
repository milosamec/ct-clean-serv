import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <nav class="navbar navbar-expand-sm bg-white navbar-light fixed-top">
            <div class="container">
                <a href="#home" class="navbar-brand">Cleaning Service</a>
                <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span><i class="fas fa-bars toggle-icon"></i></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/services" className="nav-link">Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/testimonials" className="nav-link">Testimonials</Link>
                        </li>
                        <li class="nav-item">
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

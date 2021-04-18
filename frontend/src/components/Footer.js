import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
    let housecleaninginct = `House Cleaning \n Apartment Cleaning \n Move In/Out Cleaning \n Office Cleaning \n Green Cleaning \n Seasonal Cleaning \n Commercial Cleaning \n Construction cleanup`
    return (
        <footer id="main-footer bg-light" class="footer">
           <div class="container">
                <div class="row">
                   <div class="col-md-3 text-left py-4">
                       <h4>Connecticut Cleaning Service</h4>
                       <address>67 Hospital.ave #B <br/> Danbury, CT 06810, USA <br/> +1 475-439-6043 <br /> connecticutcleaningservices@gmail.com</address>
                       <div>Monday / Friday 7:30 am - 5:00 pm <br/> Saturday: 9:00 am - 3:00 pm</div>
                   </div>
                   <div class="col-md-3 text-left py-4">
                        <h2>Services</h2>
                        <ul>
                            <li>
                                <Link class="spaced" to="/services">{housecleaninginct}</Link>
                            </li>
                        </ul>
                   </div>
                   <div class="col-md-3 text-left py-4">
                            <h4>Menu</h4>
                            <ul>
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                                <li>
                                    <Link to="/services">Services</Link>
                                </li>
                                <li>
                                    <Link to="/testimonials">Testimonials</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                   </div>
                   <div class="col-md-3 text-center py-4">
                       <h4>Follow Us</h4>
                        <a href="https://www.yelp.com/biz/connecticut-cleaning-service-danbury-4" class="social-links" target="_blank"><i class="fab fa-yelp social-icons"></i></a>
                        <a href="https://www.facebook.com/ConnecticutCleaningService" class="social-links" target="_blank"><i class="fab fa-facebook-f social-icons"></i></a>
                        <a href="https://www.instagram.com/connecticutcleaningservice" class="social-links" target="_blank"><i class="fab fa-instagram social-icons"></i></a>
                   </div>
                </div>
                <div class="row">
                    <h4>Connecticut Cleaning Services Areas</h4>
                </div>
           </div>
        </footer>
    )
}

export default Footer

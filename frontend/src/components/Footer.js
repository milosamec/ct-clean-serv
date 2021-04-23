import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
    let housecleaninginct = `House Cleaning \n Apartment Cleaning \n Move In/Out Cleaning \n Office Cleaning \n Green Cleaning \n Seasonal Cleaning \n Commercial Cleaning \n Construction cleanup`
    return (
        <footer id="main-footer bg-light" class="footer">
           <div class="container">
                <div class="row">
                   <div class="col-md-3 text-left py-4">
                       <h3 class="h3-footer-title">Connecticut Cleaning Service</h3>
                       <address class="p-text-footer">67 Hospital.ave #B <br/> Danbury, CT 06810, USA</address>
                       <a href="mailto:connecticutcleaningservices@gmail.com" class="text-break p-text footer-link">connecticutcleaningservices@gmail.com</a>
                       <div class="p-text-footer">Monday / Friday: 7:30 am - 5:00 pm <br/> Saturday: 9:00 am - 3:00 pm</div>
                   </div>
                   <div class="col-md-3 text-left py-4">
                        <h3 class="h3-footer-title">Services</h3>
                        <ul class="list-deco-none">
                            <li>
                                <Link className="spaced footer-link" to="/services">{housecleaninginct}</Link>
                            </li>
                        </ul>
                   </div>
                   <div class="col-md-3 text-left py-4">
                            <h3 class="h3-footer-title">Menu</h3>
                            <ul class="list-deco-none">
                                <li>
                                    <Link to="/home" className="footer-link p-text" activeClassName="activeLink">Home</Link>
                                </li>
                                <li>
                                    <Link to="/services" className="footer-link p-text">Services</Link>
                                </li>
                                <li>
                                    <Link to="/testimonials" className="footer-link p-text">Testimonials</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="footer-link p-text">Contact</Link>
                                </li>
                                <li>
                                <button class="btn btn-blue mt-4">FREE ESTIMATE!</button>
                                </li>
                            </ul>
                   </div>
                   <div class="col-md-3 py-4">
                       <h3 class="h3-footer-title">Follow Us</h3>
                        <a href="https://www.yelp.com/biz/connecticut-cleaning-service-danbury-4" class="social-links m-1" target="_blank"><i class="fab fa-yelp social-icons"></i></a>
                        <a href="https://www.facebook.com/ConnecticutCleaningService" class="social-links m-1" target="_blank"><i class="fab fa-facebook-f social-icons"></i></a>
                        <a href="https://www.instagram.com/connecticutcleaningservice" class="social-links m-1" target="_blank"><i class="fab fa-instagram social-icons"></i></a>
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

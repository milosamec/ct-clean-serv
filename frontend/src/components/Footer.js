import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
    let housecleaninginct = `House Cleaning \n Apartment Cleaning \n Move In/Out Cleaning \n Office Cleaning \n Green Cleaning \n Seasonal Cleaning \n Commercial Cleaning \n Construction cleanup`
    return (
        <footer id="main-footer bg-light" className="footer">
           <div className="container">
                <div className="row">
                   <div className="col-md-3 text-left py-4">
                       <h3 className="h3-footer-title">Connecticut Cleaning Service</h3>
                       <address className="p-text-footer">67 Hospital.ave #B <br/> Danbury, CT 06810, USA</address>
                       <a href="mailto:connecticutcleaningservices@gmail.com" className="text-break p-text footer-link">connecticutcleaningservices@gmail.com</a>
                       <div className="p-text-footer">Monday / Friday: 7:30 am - 5:00 pm <br/> Saturday: 9:00 am - 3:00 pm</div>
                   </div>
                   <div className="col-md-3 text-left py-4">
                        <h3 className="h3-footer-title">Services</h3>
                        <ul className="list-deco-none">
                            <li>
                                <Link className="spaced footer-link" to="/services">{housecleaninginct}</Link>
                            </li>
                        </ul>
                   </div>
                   <div className="col-md-3 text-left py-4">
                            <h3 className="h3-footer-title">Menu</h3>
                            <ul className="list-deco-none">
                                <li>
                                    <Link to="/" className="footer-link p-text">Home</Link>
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
                                <button className="btn btn-blue mt-4">FREE ESTIMATE!</button>
                                </li>
                            </ul>
                   </div>
                   <div className="col-md-3 py-4">
                       <h3 className="h3-footer-title">Follow Us</h3>
                        <a href="https://www.yelp.com/biz/connecticut-cleaning-service-danbury-4" className="social-links m-1" target="_blank" rel="noreferrer"><i className="fab fa-yelp social-icons"></i></a>
                        <a href="https://www.facebook.com/ConnecticutCleaningService" className="social-links m-1" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f social-icons"></i></a>
                        <a href="https://www.instagram.com/connecticutcleaningservice" className="social-links m-1" target="_blank" rel="noreferrer"><i className="fab fa-instagram social-icons"></i></a>
                   </div>
                </div>
                <div className="row">
                    <h4>Connecticut Cleaning Services Areas</h4>
                </div>
           </div>
        </footer>
    )
}

export default Footer

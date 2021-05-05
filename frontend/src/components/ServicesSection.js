import React from 'react'
import {Link} from 'react-router-dom'
import constructioncleaning from '../construction-cleaning.jpeg'
import housecleaning from '../house-cleaning.jpeg'
import moveinoutcleaning from '../move-in-out-cleaning.jpeg'
import apartmentcleaning from '../apartment-cleaning.jpeg'

const ServicesSection = () => {
    return (
        <section id="first-section-body" className="bg-white text-muted py-5 padding-top-0">
            <div className="container">
                <div className="row">
                    <div className="col text-center py-5">
                        <h2 className="display-4 fw-bold">Our Cleaning Services</h2>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-3 pb-5">
                        <h3 className="services-section-text blue text-md-start pb-4 ">Houses</h3>
                        <img src={housecleaning} className="img img-fluid" alt="House Cleaning CT"/>
                        <p className="text-start m-auto w-80 pt-4">All first time cleanings are at an hourly rate, being that the size and condition of every home we walk into is different.  Our first visit is more like detailed cleaning.</p>                        
                        <Link to="#" className="btn btn-blue p-3 mt-4">Learn More</Link>
                    </div>
                    <div className="col-md-3 pb-5">
                        <h3 className="services-section-text blue text-md-start pb-4">Apartments</h3>
                        <img src={apartmentcleaning} className="img img-fluid" alt="Apartment Cleaning CT"/>
                        <p className="text-start m-auto w-80 pt-4">We take pride in delivering first class apartment cleaning services that will meet your specific needs. Everyone is different, and no two apartments are alike.</p>
                        <Link to="#" className="btn btn-blue p-3 mt-4">Learn More</Link>
                    </div>
                    <div className="col-md-3 pb-5">
                        <h3 className="services-section-text blue text-md-start pb-4">Moving</h3>
                        <img src={moveinoutcleaning} className="img img-fluid" alt="Move In Out Cleaning CT"/>
                        <p className="text-start m-auto w-80 pt-4">When providing move-in and move-out services, our primary goal is to provide a hassle-free experience for clients. You can depend on us to meet your needs.</p>
                        <Link to="#" className="btn btn-blue p-3 mt-4">Learn More</Link>
                    </div>
                    <div className="col-md-3 pb-5">
                        <h3 className="services-section-text blue text-md-start pb-4">Construction</h3>
                        <img src={constructioncleaning} className="img img-fluid" alt="Post Construction Cleaning CT"/>
                        <p className="text-start m-auto w-80 pt-4">Have you just finished redoing your house, kitchen or bathroom? New Jersey Cleaning Services wants to save you time and energy. You can always count on us!</p>
                        <Link to="#" className="btn btn-blue p-3 mt-4">Learn More</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection

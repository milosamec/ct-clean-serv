import React from 'react'
import {Link} from 'react-router-dom'
import constructioncleaning from '../construction-cleaning.jpeg'
import housecleaning from '../house-cleaning.jpeg'
import moveinoutcleaning from '../move-in-out-cleaning.jpeg'
import apartmentcleaning from '../apartment-cleaning.jpeg'

const ServicesSection = () => {
    return (
        <section id="first-section-body" class="bg-white text-muted py-5 padding-top-0">
            <div class="container">
                <div class="row">
                    <div class="col text-center py-5">
                        <h2 class="display-4 fw-bold">Our Cleaning Services</h2>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col-md-3 pb-5">
                        <h3 class="services-section-text blue text-md-start pb-4 ">Houses</h3>
                        <img src={housecleaning} class="img img-fluid" alt="House Cleaning CT"/>
                        <p class="text-start m-auto w-80 pt-4">All first time cleanings are at an hourly rate, being that the size and condition of every home we walk into is different.  Our first visit is more like detailed cleaning.</p>                        
                        <Link class="btn btn-blue p-3 mt-4">Learn More</Link>
                    </div>
                    <div class="col-md-3 pb-5">
                        <h3 class="services-section-text blue text-md-start pb-4">Apartments</h3>
                        <img src={apartmentcleaning} class="img img-fluid" alt="Apartment Cleaning CT"/>
                        <p class="text-start m-auto w-80 pt-4">We take pride in delivering first class apartment cleaning services that will meet your specific needs. Everyone is different, and no two apartments are alike.</p>
                        <Link class="btn btn-blue p-3 mt-4">Learn More</Link>
                    </div>
                    <div class="col-md-3 pb-5">
                        <h3 class="services-section-text blue text-md-start pb-4">Moving</h3>
                        <img src={moveinoutcleaning} class="img img-fluid" alt="Move In Out Cleaning CT"/>
                        <p class="text-start m-auto w-80 pt-4">When providing move-in and move-out services, our primary goal is to provide a hassle-free experience for clients. You can depend on us to meet your needs.</p>
                        <Link class="btn btn-blue p-3 mt-4">Learn More</Link>
                    </div>
                    <div class="col-md-3 pb-5">
                        <h3 class="services-section-text blue text-md-start pb-4">Construction</h3>
                        <img src={constructioncleaning} class="img img-fluid" alt="Post Construction Cleaning CT"/>
                        <p class="text-start m-auto w-80 pt-4">Have you just finished redoing your house, kitchen or bathroom? New Jersey Cleaning Services wants to save you time and energy. You can always count on us!</p>
                        <Link class="btn btn-blue p-3 mt-4">Learn More</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection

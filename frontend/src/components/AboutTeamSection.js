import React from 'react'
import {Link} from 'react-router-dom'
import placeholder from '../placeholder.jpeg'
const AboutTeamSection = () => {
    return (
        <section class="section-about-team bg-white text-muted py-5">
            <div class="container">
                <div class="row">
                    <div id="img-alignment" class="col-md-6 align-items-right">
                        <img src={placeholder} class="img-fluid rounded mb-3 image-size-600" />
                    </div>
                    <div class="col-md-6">
                        <p class="about-team-blue fs-2 text blue pb-3"><strong>We understand that house cleaning is a very personal thing.</strong></p>
                        <p class="text-black p-text">That is why our team will do their best not to disappoint you, handling everything according to your specifications and requests. So many people so many tastes, this is why we customize our services to you and to your budget.</p>
                        <p class="text-black p-text">Our company provides you with free in-house consultations.</p>
                        <div class="d-flex">
                            <ul>
                                <li>
                                    <Link class="links about-team-blue fs-6 text" to="/services">House Cleaning</Link>
                                </li>
                                <li>
                                    <Link class="links about-team-blue fs-6 text" to="/services">Apartment Cleaning</Link>
                                </li>
                                <li>
                                    <Link class="links about-team-blue fs-6 text" to="/services">Construction clean-up</Link>
                                </li>
                                <li>
                                    <Link class="links about-team-blue fs-6 text" to="/services">Move in / Move out cleaning</Link>
                                </li>
                                <li>
                                    <Link class="links about-team-blue fs-6 text" to="/services">Seasonal Cleaning</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTeamSection

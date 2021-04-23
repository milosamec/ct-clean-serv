import React from 'react'
import Rating from '../components/Rating'
import avatar from '../avatar.png'
import google from '../google.png'
import googlereviews from '../reviews_google.jpeg'
import yelpreviews from '../reviews_yelp.jpeg'
import facebookreviews from '../reviews_facebook.jpeg'


const TestimonialsScreen = () => {

    // Date Related
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    let d = new Date()
    let currentMonth = monthNames[d.getMonth()]
    let currentMonthShort = currentMonth.slice(0, 3)
    let year = new Date().getFullYear()
    let day = new Date().getUTCDate()
    //
    return (
        <section id="section-testimonials" class="pb-5">
            <h1 class="h2-title text-center mb-5">Google Reviews</h1>
            <div class="container">
                <div class="row mx-auto testimonials-align-center">
                    <div class="col pb-5">
                        <div class="card" style={{width: '20rem'}}>
                            <div class="card-header d-flex p-text">
                                <img src={avatar} alt="Avatar" class="avatar w-25 mt-1" />
                                <div class="col testimonial-header-style mt-1 d-flex align-items-start">
                                    <h5 class="fw-light fs-5 blue">Name</h5>
                                    <p class="fw-light fs-6">{`${currentMonthShort} ${day}, ${year}`}</p>
                                </div>
                            </div>
                            <div class="card-body testimonials-align-left">
                                {<Rating />}
                                <p class="card-text p-text">What can I say these girls are professional, friendly, and thorough. I have absolutely no concerns about leaving them here while I am out. It is such a great feeling to walk around my home after they are gone and see how beautifully they have left it</p>
                                <div class="d-flex">
                                    <div class="w-100">
                                        <a href="#" class="d-flex links about-team-blue fs-6 text" style={{height: "25px", fontSize: "16px"}}><img src={google} class="img-fluid" style={{maxWidth: "10%"}} /><span className="mx-1" style={{fontSize: "14px", alignSelf: "center" }}>View on google</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col pb-5">
                        <div class="card" style={{width: '20rem'}}>
                            <div class="card-header d-flex p-text">
                                <img src={avatar} alt="Avatar" class="avatar w-25 mt-1" />
                                <div class="col testimonial-header-style mt-1 d-flex align-items-start">
                                    <h5 class="fw-light fs-5 blue">Name</h5>
                                    <p class="fw-light fs-6">{`${currentMonthShort} ${day}, ${year}`}</p>
                                </div>
                            </div>
                            <div class="card-body testimonials-align-left">
                                {<Rating />}
                                <p class="card-text p-text">What can I say these girls are professional, friendly, and thorough. I have absolutely no concerns about leaving them here while I am out. It is such a great feeling to walk around my home after they are gone and see how beautifully they have left it</p>
                                <div class="d-flex">
                                    <div class="w-100">
                                        <a href="#" class="d-flex links about-team-blue fs-6 text" style={{height: "25px", fontSize: "16px"}}><img src={google} class="img-fluid" style={{maxWidth: "10%"}} /><span className="mx-1" style={{fontSize: "14px", alignSelf: "center" }}>View on google</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col pb-5">
                        <div class="card" style={{width: '20rem'}}>
                            <div class="card-header d-flex p-text">
                                <img src={avatar} alt="Avatar" class="avatar w-25 mt-1" />
                                <div class="col testimonial-header-style mt-1 d-flex align-items-start">
                                    <h5 class="fw-light fs-5 blue">Name</h5>
                                    <p class="fw-light fs-6">{`${currentMonthShort} ${day}, ${year}`}</p>
                                </div>
                            </div>
                            <div class="card-body testimonials-align-left">
                                {<Rating />}
                                <p class="card-text p-text">What can I say these girls are professional, friendly, and thorough. I have absolutely no concerns about leaving them here while I am out. It is such a great feeling to walk around my home after they are gone and see how beautifully they have left it</p>
                                <div class="d-flex">
                                    <div class="w-100">
                                        <a href="#" class="d-flex links about-team-blue fs-6 text" style={{height: "25px", fontSize: "16px"}}><img src={google} class="img-fluid" style={{maxWidth: "10%"}} /><span className="mx-1" style={{fontSize: "14px", alignSelf: "center" }}>View on google</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mx-auto mb-5">
                        <div class="col">
                            <button class="btn btn-blue p-3" type="button">Load More Google Reviews</button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <h1 class="h2-title text-center mb-5">Yelp Reviews</h1>
                </div>
                <div class="row mx-auto testimonials-align-center">
                    <div class="col pb-5">
                        <div class="card" style={{width: '20rem'}}>
                            <div class="card-header d-flex p-text">
                                <img src={avatar} alt="Avatar" class="avatar w-25 mt-1" />
                                <div class="col testimonial-header-style mt-1 d-flex align-items-start">
                                    <h5 class="fw-light fs-5 blue">Name</h5>
                                    <p class="fw-light fs-6">{`${currentMonthShort} ${day}, ${year}`}</p>
                                </div>
                            </div>
                            <div class="card-body testimonials-align-left">
                                {<Rating />}
                                <p class="card-text p-text">What can I say these girls are professional, friendly, and thorough. I have absolutely no concerns about leaving them here while I am out. It is such a great feeling to walk around my home after they are gone and see how beautifully they have left it</p>
                                <div class="d-flex">
                                    <div class="w-100">
                                        <a href="#" class="d-flex links about-team-blue fs-6 text" style={{height: "25px", fontSize: "16px"}}><img src={google} class="img-fluid" style={{maxWidth: "10%"}} /><span className="mx-1" style={{fontSize: "14px", alignSelf: "center" }}>View on google</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col pb-5">
                        <div class="card" style={{width: '20rem'}}>
                            <div class="card-header d-flex p-text">
                                <img src={avatar} alt="Avatar" class="avatar w-25 mt-1" />
                                <div class="col testimonial-header-style mt-1 d-flex align-items-start">
                                    <h5 class="fw-light fs-5 blue">Name</h5>
                                    <p class="fw-light fs-6">{`${currentMonthShort} ${day}, ${year}`}</p>
                                </div>
                            </div>
                            <div class="card-body testimonials-align-left">
                                {<Rating />}
                                <p class="card-text p-text">What can I say these girls are professional, friendly, and thorough. I have absolutely no concerns about leaving them here while I am out. It is such a great feeling to walk around my home after they are gone and see how beautifully they have left it</p>
                                <div class="d-flex">
                                    <div class="w-100">
                                        <a href="#" class="d-flex links about-team-blue fs-6 text" style={{height: "25px", fontSize: "16px"}}><img src={google} class="img-fluid" style={{maxWidth: "10%"}} /><span className="mx-1" style={{fontSize: "14px", alignSelf: "center" }}>View on google</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col pb-5">
                        <div class="card" style={{width: '20rem'}}>
                            <div class="card-header d-flex p-text">
                                <img src={avatar} alt="Avatar" class="avatar w-25 mt-1" />
                                <div class="col testimonial-header-style mt-1 d-flex align-items-start">
                                    <h5 class="fw-light fs-5 blue">Name</h5>
                                    <p class="fw-light fs-6">{`${currentMonthShort} ${day}, ${year}`}</p>
                                </div>
                            </div>
                            <div class="card-body testimonials-align-left">
                                {<Rating />}
                                <p class="card-text p-text">What can I say these girls are professional, friendly, and thorough. I have absolutely no concerns about leaving them here while I am out. It is such a great feeling to walk around my home after they are gone and see how beautifully they have left it</p>
                                <div class="d-flex">
                                    <div class="w-100">
                                        <a href="#" class="d-flex links about-team-blue fs-6 text" style={{height: "25px", fontSize: "16px"}}><img src={google} class="img-fluid" style={{maxWidth: "10%"}} /><span className="mx-1" style={{fontSize: "14px", alignSelf: "center" }}>View on google</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mx-auto mb-5">
                        <div class="col">
                            <button class="btn btn-blue" type="button">Load More Yelp Reviews</button>
                        </div>
                    </div>
                </div>
                <div class="row mx-auto">
                    <div class="col-sm-12 text-center">
                        <h2 id="hero-title" className="h2-title p-3">If you are happy with our service, please take a minute to write a review.</h2>
                    </div>
                </div>
                <div class="row d-flex mx-auto text-center">
                    <div class="col-sm-4 pb-3">
                        <a href="#" alt="Google Reviews Image"><img className="img img-fluid" src={googlereviews}></img></a>
                    </div>
                    <div class="col-sm-4 pb-3">
                        <a href="#" alt="Yelp Reviews Image"><img className="img img-fluid" src={yelpreviews}></img></a>
                    </div>
                    <div class="col-sm-4 pb-3">
                        <a href="#" alt="Facebook Reviews Image"><img className="img img-fluid" src={facebookreviews}></img></a>
                    </div>
                </div>
                </div>
        </section>
    )
}

export default TestimonialsScreen

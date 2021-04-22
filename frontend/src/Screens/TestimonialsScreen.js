import React from 'react'
import Rating from '../components/Rating'
import avatar from '../avatar.png'
import google from '../google.png'
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
        <section id="section-testimonials">
            <h1 class="h2-title text-center mb-5">Testimonials</h1>
            <div class="container">
                <div class="row">
                    <div class="col pb-5">
                        <div class="card" style={{width: '20rem'}}>
                            <div class="card-header d-flex p-text">
                                {/* <div class="col"> */}
                                    <img src={avatar} alt="Avatar" class="avatar w-25 mt-1" />
                                {/* </div> */}
                                <div class="col testimonial-header-style mt-1">
                                    <h5 class="fw-light fs-5 blue">Name</h5>
                                    <p class="fw-light fs-6">{`${currentMonthShort} ${day}, ${year}`}</p>
                                </div>
                            </div>
                            <div class="card-body">
                                {<Rating />}
                                <p class="card-text p-text">What can I say these girls are professional, friendly, and thorough. I have absolutely no concerns about leaving them here while I am out. It is such a great feeling to walk around my home after they are gone and see how beautifully they have left it</p>
                                <div class="d-flex">
                                    <div class="w-50">
                                        <a href="" class="d-flex links about-team-blue fs-6 text" style={{height: "25px", fontSize: "16px"}}><img src={google} class="img-fluid" /><span style={{fontSize: "14px", alignSelf: "center" }}>View on google</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col pb-5">
                        <div class="card" style={{width: '20rem'}}>
                            <div class="card-header d-flex p-text">
                                    <img src={avatar} alt="Avatar" class="avatar w-25 mt-1" />
                                <div class="col testimonial-header-style mt-1">
                                    <h5 class="fw-light fs-5 blue">Name</h5>
                                    <p class="fw-light fs-6">{`${currentMonthShort} ${day}, ${year}`}</p>
                                </div>
                            </div>
                            <div class="card-body">
                                {<Rating />}
                                <p class="card-text p-text">What can I say these girls are professional, friendly, and thorough. I have absolutely no concerns about leaving them here while I am out. It is such a great feeling to walk around my home after they are gone and see how beautifully they have left it</p>
                                <div class="d-flex">
                                    <div class="w-50">
                                        <a href="" class="d-flex links about-team-blue fs-6 text" style={{height: "25px", fontSize: "16px"}}><img src={google} class="img-fluid" /><span style={{fontSize: "14px", alignSelf: "center"}}>View on google</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col pb-5">
                        <div class="card" style={{width: '20rem'}}>
                            <div class="card-header d-flex p-text">
                                    <img src={avatar} alt="Avatar" class="avatar w-25 mt-1" />
                                <div class="col testimonial-header-style mt-1">
                                    <h5 class="fw-light fs-5 blue">Name</h5>
                                    <p class="fw-light fs-6">{`${currentMonthShort} ${day}, ${year}`}</p>
                                </div>
                            </div>
                            <div class="card-body">
                                {<Rating />}
                                <p class="card-text p-text">What can I say these girls are professional, friendly, and thorough. I have absolutely no concerns about leaving them here while I am out. It is such a great feeling to walk around my home after they are gone and see how beautifully they have left it</p>
                                <div class="d-flex">
                                    <div class="w-50">
                                        <a href="" class="d-flex links about-team-blue fs-6 text" style={{height: "25px", fontSize: "16px"}}><img src={google} class="img-fluid" /><span style={{fontSize: "14px", alignSelf: "center"}}>View on google</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsScreen

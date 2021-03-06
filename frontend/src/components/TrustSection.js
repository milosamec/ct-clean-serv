import React from 'react'

const TrustSection = () => {
    return (
        <>
        <section className="section-trust mb-5">
            <div className="container mt-5 pb-5">
                <div className="row pb-5">
                    <div className="col-md-4">
                        <h2 className="h2-title display-4">The name you can trust </h2>
                    </div>
                    <div className="col-md-8">
                        <p className="p-text">We are committed to building long term relationships with our customers through our expertise and attention to every detail, while providing the most efficient and cost effective approach to all of your cleaning necessities . Our cleaning services are customized to fit your needs.</p>
                    </div>
                </div>
                <div className="col-md-12 text-center mb-5">
                    <button className="btn btn-blue p-4">BOOK US TODAY!!</button>
                </div>
                <div className="row text-center" style={{height: "300px"}}>
                    <div className="col-md-4 align-self-start p-text">
                        <h1>20,000+</h1>
                        <h3 className="h3-text">Finished Projects</h3>
                        <p>Connecticut Cleaning Services has an outstanding record in quality and service! </p>
                    </div>
                    <div className="col-md-4 align-self-center p-text">
                        <h1>20,000+</h1>
                        <h3 className="h3-text">Satisfied Customers</h3>
                        <p>Our team will do their best not to disappoint you, handling everything from A to Z.</p>
                    </div>
                    <div className="col-md-4 align-self-end p-text">
                        <h1>30,000+</h1>
                        <h3 className="h3-text">Free Quotes Sent</h3>
                        <p>Our company provides you with free in-house consultations.</p>
                    </div>
                </div>
            </div>
        </section>
        <div className="row py-5">
            <section id="trust-section-head">
                <div className="col py-5 align-items-center">
                    <h2 className="p-4 text-center text-white"><strong>Connecticut Cleaning Service</strong></h2>
                    <h3 className="p-1 text-center text-white">The Name You Can Trust</h3>
                </div>
            </section>
        </div>
        </>
    )
}

export default TrustSection

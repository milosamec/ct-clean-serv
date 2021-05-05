import React from 'react'

const Header = () => {
    return (
        <>
            <header id="home-section">
                <div className="dark-overlay">
                    <div className="home-inner container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h1 id="hero-title" className="display-3"><strong>Let Us Clean <br />Your House</strong></h1>
                                <p id="hero-info">Our dedication to quality services, together with professional care, ensures that your home or office impresses your family and guests from the minute they walk through your door. </p>
                            </div>

                            <div className="col-lg-4 align-self-center">
                                <div className="align-self-left">
                                    <button className="btn btn-blue">See Our Reviews</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header

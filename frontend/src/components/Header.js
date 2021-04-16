import React from 'react'

const Header = () => {
    return (
        <>
            <header id="home-section">
                <div class="dark-overlay">
                    <div class="home-inner container">
                        <div class="row">

                            <div class="col-lg-8">
                                <h1 id="hero-title" class="display-3"><strong>Let Us Clean <br />Your House</strong></h1>
                                <p id="hero-info">Our dedication to quality services, together with professional care, ensures that your home or office impresses your family and guests from the minute they walk through your door. </p>
                            </div>

                            <div class="col-lg-4 align-self-center">
                                <div class="align-self-left">
                                    <button class="btn btn-blue">See Our Reviews</button>
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

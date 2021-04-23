import React from 'react'

const ContactScreen = () => {
    return (
        <div id="section-contact">
            {/* PAGE HEADER */}
            <section id="contact">
                <header id="page-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 m-auto py-5 text-center">
                                <h1 class="h2-title text-center">Let Us Show You How Good Your Place Can Look!</h1>
                            </div>
                        </div>
                    </div>
                </header>
            </section>
            {/* CONTACT SECTION */}
            <section class="py-3">
                <div class="container">
                    <div class="row p-text">
                        <div class="col-md-4">
                            <div class="card p-4">
                                <div class="card-body">
                                    <h4>Get In Touch</h4>
                                    <p>If you require additional information please contact us and our staff of qualified professionals will be happy to assist you. If using the form to reach us, please expect a response within 24 hours. Thank you.</p>
                                    <h4>Address</h4>
                                    <p>67 Hospital Ave, Ste B St, Danbury CT, 06810</p>
                                    <h4>Email</h4>
                                    <a class="contact-link" href="mailto:connecticutcleaningservices@gmail.com">connecticutcleaningservices@gmail.com</a>
                                    <h4>Phone</h4>
                                    <a class="contact-link" href="tel:475-439-6043">(475) 439 6043</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card p-4">
                                <div class="card-body">
                                    <h3 class="text-center">Please fill out this form to contact us</h3>
                                    <hr />
                                    <div class="row">
                                        <div class="col-md-6 p-2">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="First Name"/>
                                            </div>
                                        </div>
                                        <div class="col-md-6 p-2">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Last Name"/>
                                            </div>
                                        </div>
                                        <div class="col-md-6 p-2">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div class="col-md-6 p-2">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Phone Number"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 p-2">
                                            <div class="form-group">
                                                <textarea class="form-control" placeholder="Message / Service Needed"/>
                                            </div>
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button class="btn btn-blue" type="button">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        </div>
    )
}

export default ContactScreen

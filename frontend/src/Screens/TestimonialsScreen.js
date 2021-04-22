import React from 'react'

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
    let month = new Date().getUTCMonth() + 1
    //
    return (
        <section id="section-testimonials">
            <div class="container">
                <div class="row">
                    <div class="col pb-5">
                        <div class="card" style={{width: '20rem'}}>
                            <div class="card-header d-flex">
                                <div class="col" style={{maxWidth: "fit-content"}}>
                                <img src="avatar.png" alt="Avatar" class="avatar" />
                                </div>
                                <div class="col">
                                    <h2>Name</h2>
                                    <p>{`${currentMonthShort} ${day}, ${year}`}</p>
                                </div>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title p-text">Card Title</h4>
                                <h6 class="card-subtitle text-muted p-text">Card subtitle</h6>
                                <p class="card-text p-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, quas.</p>
                                <a class="btn btn-outline-primary" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{width: '20rem'}}>
                            <div class="card-body">
                                <h4 class="card-title p-text">Card Title</h4>
                                <h6 class="card-subtitle text-muted p-text">Card subtitle</h6>
                                <p class="card-text p-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, quas.</p>
                                <a class="btn btn-outline-primary" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{width: '20rem'}}>
                            <div class="card-body">
                                <h4 class="card-title p-text">Card Title</h4>
                                <h6 class="card-subtitle text-muted p-text">Card subtitle</h6>
                                <p class="card-text p-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, quas.</p>
                                <a class="btn btn-outline-primary" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{width: '20rem'}}>
                            <div class="card-body">
                                <h4 class="card-title p-text">Card Title</h4>
                                <h6 class="card-subtitle text-muted p-text">Card subtitle</h6>
                                <p class="card-text p-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, quas.</p>
                                <a class="btn btn-outline-primary" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{width: '20rem'}}>
                            <div class="card-body">
                                <h4 class="card-title p-text">Card Title</h4>
                                <h6 class="card-subtitle text-muted p-text">Card subtitle</h6>
                                <p class="card-text p-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, quas.</p>
                                <a class="btn btn-outline-primary" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" style={{width: '20rem'}}>
                            <div class="card-body">
                                <h4 class="card-title p-text">Card Title</h4>
                                <h6 class="card-subtitle text-muted p-text">Card subtitle</h6>
                                <p class="card-text p-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, quas.</p>
                                <a class="btn btn-outline-primary" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1>Testimonials</h1>
        </section>
    )
}

export default TestimonialsScreen

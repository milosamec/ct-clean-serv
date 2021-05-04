import React from 'react'
import Rating from '../components/Rating'
import DateUtil from '../utils/DateUtil'
import yelp from '../yelp.png'
import avatar from '../avatar.png'

const YelpReviewCard = ({review}) => {
    // const {date, link, reviewerAvatar, reviewerDescription, reviewerName, reviewerRating} = review
    // Review Posted Date //
    console.log(review)
    let d = new Date()
    return (
        <>                
            <div class="col pb-5">
                <div class="card" style={{width: '20rem'}}>
                    <div class="card-header d-flex p-text">
                        <img src={review.user.image_url ? review.user.image_url : avatar} alt="Avatar" class="avatar w-25 mt-1" />
                        <div class="col testimonial-header-style mt-1 d-flex align-items-start">
                            <h5 class="fw-light fs-5 blue">{review.user.name}</h5>
                            <p class="fw-light fs-6">{<DateUtil date={d}/>}</p>
                        </div>
                    </div>
                    <div class="card-body testimonials-align-left">
                        {<Rating />}
                        <p class="card-text p-text">{review.text}</p>
                        <div class="d-flex">
                            <div class="w-100">
                                <a href="#" class="d-flex links about-team-blue fs-6 text" style={{height: "25px", fontSize: "16px"}}><img src={yelp} class="img-fluid" style={{maxWidth: "10%"}} /><span className="mx-1" style={{fontSize: "14px", alignSelf: "center" }}>View on Yelp</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default YelpReviewCard

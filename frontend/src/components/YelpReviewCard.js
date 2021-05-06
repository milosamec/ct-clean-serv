import React from 'react'
import Rating from '../components/Rating'
import DateUtil from '../utils/DateUtil'
import yelp from '../yelp.png'
import avatar from '../avatar.png'

const YelpReviewCard = ({review}) => {
    // const {date, link, reviewerAvatar, reviewerDescription, reviewerName, reviewerRating} = review
    // Review Posted Date //
    let d = new Date()
    return (
        <>                
            <div className="col-md-4 col-sm-12 pb-5 pb-5">
                <div className="card">
                    <div className="card-header d-flex p-text">
                        <img src={review.user.image_url ? review.user.image_url : avatar} alt={review.user.image_url} className="avatar w-25 mt-1"/>
                        <div className="col testimonial-header-style mt-1 d-flex align-items-start">
                            <h5 className="fw-light fs-5 blue">{review.user.name}</h5>
                            <p className="fw-light fs-6">{<DateUtil date={d}/>}</p>
                        </div>
                    </div>
                    <div className="card-body testimonials-align-left">
                        {<Rating />}
                        <p className="card-text p-text">{review.text}</p>
                        <div className="d-flex">
                            <div className="w-100">
                                <a href={review.url} className="d-flex links about-team-blue fs-6 text" style={{height: "25px", fontSize: "16px"}}><img src={yelp} className="img-fluid" alt={`${review.user.name} review`} style={{maxWidth: "10%"}} /><span className="mx-1" style={{fontSize: "14px", alignSelf: "center" }}>View on Yelp</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default YelpReviewCard

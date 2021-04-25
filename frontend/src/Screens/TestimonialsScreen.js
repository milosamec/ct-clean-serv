import React, {useState, useEffect} from 'react'
import GoogleReviewCard from '../components/GoogleReviewCard'
import YelpReviewCard from '../components/YelpReviewCard'
import avatar from '../avatar.png'
import googlereviews from '../reviews_google.jpeg'
import yelpreview from '../reviews_yelp.jpeg'
import facebookreviews from '../reviews_facebook.jpeg'

const TestimonialsScreen = () => {
    // Google Reviews
    let [googleReviews, setGoogleReviews] = useState([])
    let [yelpReviews, setYelpReviews] = useState([])
    let reviews = [
        {
            reviewerName: "John Smits",
            reviewerAvatar: avatar,
            reviewerRating: 5,
            reviewerDescription: "What can I say these girls are professional, friendly, and thorough. I have absolutely no concerns about leaving them here while I am out. It is such a great feeling to walk around my home after they are gone and see how beautifully they have left it",
            date: "",
            link: "https://google.com/",
        },
        {
            reviewerName: "John Smith",
            reviewerAvatar: avatar,
            reviewerRating: 5,
            reviewerDescription: "What can I say these girls are professional, friendly, and thorough. I have absolutely no concerns about leaving them here while I am out. It is such a great feeling to walk around my home after they are gone and see how beautifully they have left it",
            date: "",
            link: "https://google.com/",
        },
        {
            reviewerName: "John S",
            reviewerAvatar: avatar,
            reviewerRating: 5,
            reviewerDescription: "What can I say these girls are professional, friendly, and thorough. I have absolutely no concerns about leaving them here while I am out. It is such a great feeling to walk around my home after they are gone and see how beautifully they have left it",
            date: "",
            link: "https://google.com/",
        },
        {
            reviewerName: "Jane Smits",
            reviewerAvatar: avatar,
            reviewerRating: 5,
            reviewerDescription: "What can I say these girls are professional, friendly, and thorough. I have absolutely no concerns about leaving them here while I am out. It is such a great feeling to walk around my home after they are gone and see how beautifully they have left it",
            date: "",
            link: "https://google.com/",
        },
        {
            reviewerName: "Jan Smith",
            reviewerAvatar: avatar,
            reviewerRating: 5,
            reviewerDescription: "What can I say these girls are professional, friendly, and thorough. I have absolutely no concerns about leaving them here while I am out. It is such a great feeling to walk around my home after they are gone and see how beautifully they have left it",
            date: "",
            link: "https://google.com/",
        },
        {
            reviewerName: "Jon S",
            reviewerAvatar: avatar,
            reviewerRating: 5,
            reviewerDescription: "What can I say these girls are professional, friendly, and thorough. I have absolutely no concerns about leaving them here while I am out. It is such a great feeling to walk around my home after they are gone and see how beautifully they have left it",
            date: "",
            link: "https://google.com/",
        },
    ]

    let yelpreviews = [
        {
            reviewerName: "John Smith",
            reviewerAvatar: avatar,
            reviewerRating: 5,
            reviewerDescription: "What can I say these girls are professional, friendly, and thorough. I have absolutely no concerns about leaving them here while I am out. It is such a great feeling to walk around my home after they are gone and see how beautifully they have left it",
            date: "",
            link: "https://google.com/",
        },
        {
            reviewerName: "John Smith",
            reviewerAvatar: avatar,
            reviewerRating: 5,
            reviewerDescription: "What can I say these girls are professional, friendly, and thorough. I have absolutely no concerns about leaving them here while I am out. It is such a great feeling to walk around my home after they are gone and see how beautifully they have left it",
            date: "",
            link: "https://google.com/",
        },
        {
            reviewerName: "John Smith",
            reviewerAvatar: avatar,
            reviewerRating: 5,
            reviewerDescription: "What can I say these girls are professional, friendly, and thorough. I have absolutely no concerns about leaving them here while I am out. It is such a great feeling to walk around my home after they are gone and see how beautifully they have left it",
            date: "",
            link: "https://google.com/",
        },
        {
            reviewerName: "Jon Smith",
            reviewerAvatar: avatar,
            reviewerRating: 5,
            reviewerDescription: "What can I say these girls are professional, friendly, and thorough. I have absolutely no concerns about leaving them here while I am out. It is such a great feeling to walk around my home after they are gone and see how beautifully they have left it",
            date: "",
            link: "https://google.com/",
        },
        {
            reviewerName: "Jan Smit",
            reviewerAvatar: avatar,
            reviewerRating: 5,
            reviewerDescription: "What can I say these girls are professional, friendly, and thorough. I have absolutely no concerns about leaving them here while I am out. It is such a great feeling to walk around my home after they are gone and see how beautifully they have left it",
            date: "",
            link: "https://google.com/",
        },
        {
            reviewerName: "Jane Smart",
            reviewerAvatar: avatar,
            reviewerRating: 5,
            reviewerDescription: "What can I say these girls are professional, friendly, and thorough. I have absolutely no concerns about leaving them here while I am out. It is such a great feeling to walk around my home after they are gone and see how beautifully they have left it",
            date: "",
            link: "https://google.com/",
        },
    ]




    //////////////////////////////////
    // Date Related
    //////////////////////////////////
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let d = new Date()
    let currentMonth = monthNames[d.getMonth()]
    let currentMonthShort = currentMonth.slice(0, 3)
    let year = new Date().getFullYear()
    let day = new Date().getUTCDate()

    //////////////////////////////////
    // Load More Button Functionality
    //////////////////////////////////
    const reviewsPerPage = 3;
    let arrayForHoldingReviews = [];
    let arrayForYelpReviews = []

    const [reviewsToShow, setReviewsToShow] = useState([]);
    const [yelpReviewsToShow, setYelpReviewsToShow] = useState([])
    const [next, setNext] = useState(3);
    const [yelpNext, setYelpNext] = useState(3)
    const [showBtn, setShowBtn] = useState(true)
    const [showYelpBtn, setShowYelpBtn] = useState(true)


    // GOOGLE
    const loopWithSlice = (start, end) => {
        const slicedreviews = reviews.slice(start, end);
        if(reviewsToShow <= slicedreviews) {
            arrayForHoldingReviews = [...reviewsToShow, ...slicedreviews];
            setReviewsToShow(arrayForHoldingReviews);
        }
    };

    // YELP
    const loopYelpReviewsWithSlice = (start, end) => {
        const yelpslicedreviews = yelpreviews.slice(start, end)
        arrayForYelpReviews = [...yelpReviewsToShow, ...yelpslicedreviews]
        setYelpReviewsToShow(arrayForYelpReviews)
    }

    useEffect(() => {
        loopWithSlice(0, reviewsPerPage);
        loopYelpReviewsWithSlice(0, reviewsPerPage)
    }, []);

    const handleShowMorePosts = () => {
        loopWithSlice(next, next + reviewsPerPage);
        setNext(next + reviewsPerPage);
        if(next <= reviewsToShow.length) {
            setShowBtn(false)
        }
    };

    const handleShowMoreYelpReviews = () => {
        loopYelpReviewsWithSlice(yelpNext, yelpNext + reviewsPerPage);
        setYelpNext(yelpNext + reviewsPerPage);
        if(yelpNext <= yelpReviewsToShow.length) {
            setShowYelpBtn(false)
        }
    };
    /////////////////////////////////////////
    // End of Load More Button Functionality
    /////////////////////////////////////////




    return (
        <section id="section-testimonials" class="pb-5">
            {/* DISPLAY GOOGLE REVIEWS */}
            <h1 class="h2-title text-center mb-5">Google Reviews</h1>
            <div class="container">
                <div class="row mx-auto testimonials-align-center">
                    {/* {reviewsToShow.length && reviewsToShow.map((review) => ( */}
                        <GoogleReviewCard key={reviewsToShow} reviews={reviewsToShow}/>
                    {/* ))} */}
                    {next <= reviewsToShow.length && (
                        <div class="row mx-auto mb-5">
                            <div class="col">
                                <button id="loadMore" class="btn btn-blue p-3" onClick={handleShowMorePosts} style={{display: (showBtn ? 'block' : 'none') }}>Load More Google Reviews</button>
                            </div>
                    </div>
                    )}
                    {/* <div class="row mx-auto mb-5">
                        <div class="col">
                            <button id="loadMore" class="btn btn-blue p-3" onClick={handleShowMorePosts}>Load More Google Reviews</button>
                        </div>
                    </div> */}
                </div>

                {/* DISPLAY YELP REVIEWS */}
                <div class="row">
                    <h1 class="h2-title text-center mb-5">Yelp Reviews</h1>
                </div>
                <div class="row mx-auto testimonials-align-center">
                    {/* {yelpreviews.length && yelpreviews.map((review) => ( */}
                        <YelpReviewCard key={yelpReviewsToShow} yelpreviews={yelpReviewsToShow} />
                    {/* ))} */}
                    {yelpNext <= yelpReviewsToShow.length && (
                        <div class="row mx-auto mb-5">
                            <div class="col">
                                <button id="loadMoreYelp" class="btn btn-blue p-3" onClick={handleShowMoreYelpReviews} style={{display: (showYelpBtn ? 'block' : 'none') }}>Load More Yelp Reviews</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* LAST SECTION */}
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
                        <a href="#" alt="Yelp Reviews Image"><img className="img img-fluid" src={yelpreview}></img></a>
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

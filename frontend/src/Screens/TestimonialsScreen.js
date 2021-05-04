import React, {useState, useEffect} from 'react'
import axios from 'axios'
import GoogleReviewCard from '../components/GoogleReviewCard'
import YelpReviewCard from '../components/YelpReviewCard'
import avatar from '../avatar.png'
import googlereviews from '../reviews_google.jpeg'
import yelpreview from '../reviews_yelp.jpeg'
import facebookreviews from '../reviews_facebook.jpeg'
import * as api from '../hooks/api'



const TestimonialsScreen = () => {

    //////////////////////////////////
    // GOOGLE REVIEWS
    //////////////////////////////////
    // Google Reviews
    let [googleReviews, setGoogleReviews] = useState([])
    let [yelpReviews, setYelpReviews] = useState([])
    

  // Get Reviews from Google API
  function initMap() {
        const google = window.google;

        const request = {
          placeId: "ChIJnQSPBFT_54kR5I0F_wyoy_Q",
          fields: ["name", "formatted_address", "place_id", "geometry", "review", "rating"],
        };
        const map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: -33.866, lng: 151.196 },
          });
        const service = new google.maps.places.PlacesService(map);
        service.getDetails(request, callback);
        
        function callback(place, status) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            setGoogleReviews(place["reviews"])
          }
        }
  }
  

  useEffect(() => {
    initMap()
}, [])


    // https://api.yelp.com/v3/businesses/connecticut-cleaning-service-danbury-4/reviews

    useEffect(() => {
        const getYelpReviews = async () => {
            try {
                const data = await api.get('/businesses/connecticut-cleaning-service-danbury-4/reviews')
                const resp = await data.json()
                setYelpReviews(resp.reviews)
                console.log(yelpReviews)
            } catch (err) {
                console.error(err)
            }
        }
        getYelpReviews()
    }, [])




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
    const googleReviewsPerPage = 5;
    let arrayForHoldingReviews = [];
    let arrayForYelpReviews = []

    const [reviewsToShow, setReviewsToShow] = useState([]);
    const [yelpReviewsToShow, setYelpReviewsToShow] = useState([])
    const [next, setNext] = useState(2);
    const [yelpNext, setYelpNext] = useState(3)
    const [showBtn, setShowBtn] = useState(true)
    const [showYelpBtn, setShowYelpBtn] = useState(true)


    // GOOGLE
    const loopWithSlice = (start, end) => {
        const slicedreviews = googleReviews.slice(start, end);
        if(reviewsToShow.length <= slicedreviews.length) {
            arrayForHoldingReviews = [...reviewsToShow, ...slicedreviews];
            setReviewsToShow(arrayForHoldingReviews);
        }
    };

    // YELP
    const loopYelpReviewsWithSlice = (start, end) => {
        console.log("REVIEWS", yelpReviews)
        const yelpslicedreviews = yelpReviews.slice(start, end)
        arrayForYelpReviews = [...yelpReviewsToShow, ...yelpslicedreviews]
        setYelpReviewsToShow(arrayForYelpReviews)
    }

    useEffect(() => {
        loopWithSlice(0, googleReviewsPerPage);
    }, [googleReviews]);

    useEffect(() => {
        loopYelpReviewsWithSlice(0, reviewsPerPage)
    }, [yelpReviews]);

    // const handleShowMorePosts = () => {
    //     loopWithSlice(next, googleReviews.length);
    //     setNext(next + googleReviewsPerPage);
    //     if(next <= reviewsToShow.length) {
    //         setShowBtn(false)
    //     }
    // };

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
                                <a className="links" target="_blank" href="https://www.google.com/search?q=connecticut%20cleaning%20service&oq=connecticut+cleaning+service&aqs=chrome.0.69i59i457j0i22i30l3j69i60j69i61j69i60j69i65.2630j0j7&sourceid=chrome&ie=UTF-8&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14&tbm=lcl&sxsrf=ALeKk01CVNID_A4vHddSv2ysiii39Yi-yw:1620139571088&rflfq=1&num=10&rldimm=17639377139298307556&lqi=Chxjb25uZWN0aWN1dCBjbGVhbmluZyBzZXJ2aWNlSJz16uKHsICACFpAChBjbGVhbmluZyBzZXJ2aWNlEAEQAhgAGAEYAiIcY29ubmVjdGljdXQgY2xlYW5pbmcgc2VydmljZSoECAIQAZIBFmhvdXNlX2NsZWFuaW5nX3NlcnZpY2U&ved=2ahUKEwjM0PucorDwAhVmdt8KHXnBDNkQvS4wAHoECCUQSw&rlst=f#rlfi=hd:;si:17639377139298307556,l,Chxjb25uZWN0aWN1dCBjbGVhbmluZyBzZXJ2aWNlSJz16uKHsICACFpAChBjbGVhbmluZyBzZXJ2aWNlEAEQAhgAGAEYAiIcY29ubmVjdGljdXQgY2xlYW5pbmcgc2VydmljZSoECAIQAZIBFmhvdXNlX2NsZWFuaW5nX3NlcnZpY2U;mv:[[41.613704399999996,-73.0717416],[41.015469700000004,-73.5429915]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14">
                                    <button id="loadMore" class="btn btn-blue p-3" style={{display: (showBtn ? 'block' : 'none') }}>View More on Google</button>
                                </a>
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
                        {yelpReviewsToShow.length > 0 && yelpReviewsToShow.map((review) => (
                            <YelpReviewCard key={review.id} review={review} />
                        ))}
                    {yelpNext <= yelpReviewsToShow.length && (
                        <div class="row mx-auto mb-5">
                            <div class="col">
                                <a className="links" target="_blank" href="https://www.yelp.com/biz/connecticut-cleaning-service-danbury-4">
                                    <button id="loadMoreYelp" class="btn btn-blue p-3" style={{display: (showYelpBtn ? 'block' : 'none') }}>View More on Yelp</button>
                                </a>
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

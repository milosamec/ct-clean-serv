import React, {useState, useEffect, useRef} from 'react'
import GoogleReviewCard from '../components/GoogleReviewCard'
import YelpReviewCard from '../components/YelpReviewCard'
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
          if (status === google.maps.places.PlacesServiceStatus.OK) {
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
            } catch (err) {
                console.error(err)
            }
        }
        getYelpReviews()
    }, [])




    //////////////////////////////////
    // Date Related
    //////////////////////////////////


    //////////////////////////////////
    // Load More Button Functionality
    //////////////////////////////////
    const reviewsPerPage = 3;
    const googleReviewsPerPage = 5;

    const [reviewsToShow, setReviewsToShow] = useState([]);
    const [yelpReviewsToShow, setYelpReviewsToShow] = useState([])
    // const [next, setNext] = useState(2);
    // const [yelpNext, setYelpNext] = useState(3)
    // const [showBtn, setShowBtn] = useState(true)
    // const [showYelpBtn, setShowYelpBtn] = useState(true)


    // GOOGLE
    const loopWithSlice = useRef(() => {})
    loopWithSlice.current = (start, end) => {
        const slicedreviews = googleReviews.slice(start, end);
        if(reviewsToShow.length <= slicedreviews.length) {
            setReviewsToShow([...reviewsToShow, ...slicedreviews]);
        }
    }
    
    // YELP
    const loopYelpReviewsWithSlice = useRef(() => {})
    loopYelpReviewsWithSlice.current = (start, end) => {
        const yelpslicedreviews = yelpReviews.slice(start, end)
        setYelpReviewsToShow([...yelpReviewsToShow, ...yelpslicedreviews])
    }

    useEffect(() => {
        loopWithSlice.current(0, googleReviewsPerPage);
    }, [googleReviews, loopWithSlice]);

    useEffect(() => {
        loopYelpReviewsWithSlice.current(0, reviewsPerPage)
    }, [yelpReviews, loopYelpReviewsWithSlice]);

    // const handleShowMorePosts = () => {
    //     loopWithSlice(next, googleReviews.length);
    //     setNext(next + googleReviewsPerPage);
    //     if(next <= reviewsToShow.length) {
    //         setShowBtn(false)
    //     }
    // };

    // const handleShowMoreYelpReviews = () => {
    //     loopYelpReviewsWithSlice(yelpNext, yelpNext + reviewsPerPage);
    //     setYelpNext(yelpNext + reviewsPerPage);
    //     if(yelpNext <= yelpReviewsToShow.length) {
    //         setShowYelpBtn(false)
    //     }
    // };
    /////////////////////////////////////////
    // End of Load More Button Functionality
    /////////////////////////////////////////




    return (
        <section id="section-testimonials" className="pb-5">
            {/* DISPLAY GOOGLE REVIEWS */}
            <h1 className="h2-title text-center mb-5">Google Reviews</h1>
            <div className="container">
                <div className="row mx-auto testimonials-align-center">
                    {}
                    {reviewsToShow.length > 0 && reviewsToShow.map((googleReview) => (
                            <GoogleReviewCard key={googleReview.author_name} review={googleReview} />
                        ))}
                    {/* {reviewsToShow.length && reviewsToShow.map((review) => ( */}
                        {/* <GoogleReviewCard key={reviewsToShow} reviews={reviewsToShow}/> */}
                    {/* ))} */}
                    {reviewsToShow.length && (
                        <div className="row mx-auto mb-5">
                            <div className="col">
                                <a className="links" target="_blank" rel="noreferrer" href="https://www.google.com/search?q=connecticut%20cleaning%20service&oq=connecticut+cleaning+service&aqs=chrome.0.69i59i457j0i22i30l3j69i60j69i61j69i60j69i65.2630j0j7&sourceid=chrome&ie=UTF-8&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14&tbm=lcl&sxsrf=ALeKk01CVNID_A4vHddSv2ysiii39Yi-yw:1620139571088&rflfq=1&num=10&rldimm=17639377139298307556&lqi=Chxjb25uZWN0aWN1dCBjbGVhbmluZyBzZXJ2aWNlSJz16uKHsICACFpAChBjbGVhbmluZyBzZXJ2aWNlEAEQAhgAGAEYAiIcY29ubmVjdGljdXQgY2xlYW5pbmcgc2VydmljZSoECAIQAZIBFmhvdXNlX2NsZWFuaW5nX3NlcnZpY2U&ved=2ahUKEwjM0PucorDwAhVmdt8KHXnBDNkQvS4wAHoECCUQSw&rlst=f#rlfi=hd:;si:17639377139298307556,l,Chxjb25uZWN0aWN1dCBjbGVhbmluZyBzZXJ2aWNlSJz16uKHsICACFpAChBjbGVhbmluZyBzZXJ2aWNlEAEQAhgAGAEYAiIcY29ubmVjdGljdXQgY2xlYW5pbmcgc2VydmljZSoECAIQAZIBFmhvdXNlX2NsZWFuaW5nX3NlcnZpY2U;mv:[[41.613704399999996,-73.0717416],[41.015469700000004,-73.5429915]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14">
                                    <button id="loadMore" className="btn btn-blue p-3">View More on Google</button>
                                </a>
                            </div>
                    </div>
                    )}
                    {/* <div className="row mx-auto mb-5">
                        <div className="col">
                            <button id="loadMore" className="btn btn-blue p-3" onClick={handleShowMorePosts}>Load More Google Reviews</button>
                        </div>
                    </div> */}
                </div>

                {/* DISPLAY YELP REVIEWS */}
                <div className="row">
                    <h1 className="h2-title text-center mb-5">Yelp Reviews</h1>
                </div>
                <div className="row mx-auto testimonials-align-center">
                        {yelpReviewsToShow.length > 0 && yelpReviewsToShow.map((yelpReview) => (
                            <YelpReviewCard key={yelpReview.id} review={yelpReview} />
                        ))}
                    {yelpReviewsToShow.length && (
                        <div className="row mx-auto mb-5">
                            <div className="col">
                                <a className="links" target="_blank" rel="noreferrer" href="https://www.yelp.com/biz/connecticut-cleaning-service-danbury-4">
                                    <button id="loadMoreYelp" className="btn btn-blue p-3">View More on Yelp</button>
                                </a>
                            </div>
                        </div>
                    )}
                </div>

                {/* LAST SECTION */}
                <div className="row mx-auto">
                    <div className="col-sm-12 text-center">
                        <h2 id="hero-title" className="h2-title p-3">If you are happy with our service, please take a minute to write a review.</h2>
                    </div>
                </div>
                <div className="row d-flex mx-auto text-center">
                    <div className="col-sm-4 pb-3">
                        <img className="img img-fluid" src={googlereviews} alt="Google Reviews"></img>
                    </div>
                    <div className="col-sm-4 pb-3">
                        <img className="img img-fluid" src={yelpreview} alt="Yelp Reviews"></img>
                    </div>
                    <div className="col-sm-4 pb-3">
                        <img className="img img-fluid" src={facebookreviews} alt="Facebook Reviews"></img>
                    </div>
                </div>
                </div>
        </section>
    )
}

export default TestimonialsScreen

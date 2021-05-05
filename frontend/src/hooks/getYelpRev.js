import {useState, useEffect} from 'react'
import * as api from './api'

export function getYelpRev () {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        const getYelpReviews = async () => {
            try {
                const data = await api.get('/businesses/connecticut-cleaning-service-danbury-4/reviews')
                const resp = await data.json()
                setReviews(resp)
                console.log(data)
            } catch (err) {
                console.error(err)
            }
        }
        getYelpReviews()
    }, [])
    return reviews
}
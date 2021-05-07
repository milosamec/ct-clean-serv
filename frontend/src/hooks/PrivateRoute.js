import React, {useEffect} from 'react'
import {Route, Redirect, useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { USER_LOGIN_SUCCESS } from '../constants/userConstants'

const PrivateRoute = ({ component: Component, ...rest}) => {
    let history = useHistory()
    const {auth} = rest

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin


    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: authUser
            })
          });
    }, [])

    return (
        <Route {...rest} render={props => { return userInfo ? <Component {...props} /> : <Redirect to="/admin06810/login" />}} >
        </Route>
    )
}

export default PrivateRoute

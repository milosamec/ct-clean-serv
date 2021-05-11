import React, {useEffect} from 'react'
import {Route, Redirect, useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { USER_LOGIN_SUCCESS } from '../constants/userConstants'
import firebase from "firebase/app";
import "firebase/auth";

const PrivateRoute = ({ component: Component, ...rest}) => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {loading, userInfo} = userLogin

    useEffect(() => {
        firebase.auth().onAuthStateChanged(authUser => {
                if(authUser) {
                    dispatch({
                        type: USER_LOGIN_SUCCESS,
                        payload: authUser
                    })
                // }
                }
          });
    }, [])

    return (
        <Route {...rest} render={props => { return userInfo ? <Component {...props} /> : <Redirect to="/admin06810/login" />}} >
        </Route>
    )
}

export default PrivateRoute

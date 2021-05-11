import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from '../constants/userConstants'
import { MESSAGE_LIST_RESET } from '../constants/messageConstants'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-database'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const response = await firebase.auth().signInWithEmailAndPassword(email, password)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: response
        })

        localStorage.setItem('userInfo', JSON.stringify(response))

    } catch (error) {
        switch(error.code) {
            case 'auth/user-not-found':
                alert('User does not exist')
                break
            case 'auth-invalid-email':
                alert('Please enter an email address')
        }
    }
}




// export const register = (email, password) => async (dispatch) => {
//     console.log("REGISTER")
//     try {
//         dispatch({
//             type: USER_REGISTER_REQUEST
//         })


//         const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
//         if (response) {
//             console.log("RESp", response)
//             await firebase.database().ref('/users').child(response.user.uid).set({email: response.user.email, uid: response.user.uid})
//         }

        
//         dispatch({
//             type: USER_REGISTER_SUCCESS,
//             payload: response
//         })

//         dispatch({
//             type: USER_LOGIN_SUCCESS,
//             payload: response
//         })
        
//         localStorage.setItem('userInfo', JSON.stringify(response))

//     } catch (error) {
//         dispatch({
//             type: USER_LOGIN_FAIL,
//             payload: error.response && error.response.data.message ? error.response.data.message : error.message
//         })
//     }
// }

export const logout = () => (dispatch) => {
    firebase.auth().signOut()
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
    dispatch({ type: MESSAGE_LIST_RESET })
}
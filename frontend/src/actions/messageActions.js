import { MESSAGE_SAVE_REQUEST, MESSAGE_SAVE_SUCCESS, MESSAGE_SAVE_FAIL ,MESSAGE_LIST_REQUEST, MESSAGE_LIST_SUCCESS, MESSAGE_LIST_FAIL } from '../constants/messageConstants'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-database'
import {snapshotToArray} from '../hooks/firebaseHelpers'


export const saveMessage = (message) => async (dispatch) => {
    try {
        console.log("MESG", message)
        dispatch({ type: MESSAGE_SAVE_REQUEST })

        // Reference for messages table & SAVE
        let response = await firebase.database().ref('messages').push().set(message)

        dispatch({
            type: MESSAGE_SAVE_SUCCESS,
            payload: response
        })

    } catch (error) {
        dispatch({
            type: MESSAGE_SAVE_FAIL,
            payload: error
        })
        console.log(error)
    }
}

export const getMessages = () => async (dispatch) => {
    try {
        dispatch({ type: MESSAGE_LIST_REQUEST })

        const dbRef = firebase.database().ref();
        
        let messages = await dbRef.child("messages").get() 
        

        if(messages) {
            var messageArray = snapshotToArray(messages)
        }

        dispatch({
            type: MESSAGE_LIST_SUCCESS,
            payload: messageArray
        })

    } catch (error) {
        dispatch({
            type: MESSAGE_LIST_FAIL,
            payload: error
        })
        console.log(error)
    }
}

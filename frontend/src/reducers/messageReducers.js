import {
    MESSAGE_LIST_REQUEST,
    MESSAGE_LIST_SUCCESS,
    MESSAGE_LIST_RESET,
    MESSAGE_LIST_FAIL
} from '../constants/messageConstants'

export const messageListReducer = (state = {messages: []}, action) => {
    switch(action.type) {
        case 'MESSAGE_LIST_REQUEST':
            return { loading: true, messages: [] }
        case 'MESSAGE_LIST_SUCCESS':
            return { loading: false, messages: action.payload}
        case 'MESSAGE_LIST_FAIL':
            return { loading: false, error: action.payload }
        case 'MESSAGE_LIST_RESET':
            return {}
        default:
            return state
    }
}

export const messageSaveReducer = (state = {}, action) => {
    switch(action.type) {
        case 'MESSAGE_SAVE_REQUEST':
            return { loading: true, messages: [] }
        case 'MESSAGE_SAVE_SUCCESS':
            return { loading: false, messages: action.payload}
        case 'MESSAGE_SAVE_FAIL':
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
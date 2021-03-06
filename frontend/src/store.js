import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { messageListReducer, messageSaveReducer } from './reducers/messageReducers'
import { userRegisterReducer, userLoginReducer } from './reducers/userReducers'

const reducer = combineReducers({
    messageList: messageListReducer,
    messageSave: messageSaveReducer,
    // userRegister: userRegisterReducer,
    userLogin: userLoginReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;
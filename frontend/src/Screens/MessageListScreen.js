import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getMessages} from '../actions/messageActions'
const MessageListScreen = () => {

    const dispatch = useDispatch()

    const messageList = useSelector(state => state.messageList)
    const {loading, messages} = messageList

    useEffect(() => {
        dispatch(getMessages())
    },[])


    return (
        <div className="container pt-5">
            <h1 className="text-primary">Messages</h1>
        </div>
    )
}

export default MessageListScreen

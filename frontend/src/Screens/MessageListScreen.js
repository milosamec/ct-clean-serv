import React, {useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getMessages} from '../actions/messageActions'
import { MESSAGE_SAVE_RESET } from '../constants/messageConstants'

const MessageListScreen = ({history}) => {

    const dispatch = useDispatch()

    
    const messageList = useSelector(state => state.messageList)
    const {loading, messages} = messageList
    
    const messageSave = useSelector(state => state.messageSave)
    const {success: success} = messageSave

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        if(!userInfo) {
            history.push('/admin06810/login')
        }
        console.log("SUCCESS", success)
        if(userInfo || success) {
            dispatch(getMessages())
        }

    },[dispatch, history, userInfo, success])
    console.log("SUCCESS TWO", success)
    const tabledata = messages.map((row, index) => {
        return <tr key={index}><th scope="row" key={index}>{row.sentOn}</th><td>{row.firstName}</td><td>{row.phone}</td><td>{row.message}</td></tr>
    })

    return (
        <div id="section-messages">
            <div className="container">
                <h1 className="text-primary">Inbox</h1>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Message</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {messages && messages.length <= 0 ? <tr scope="row"><td>No Messages</td></tr> : messages.map((row, index) => {
                        return <tr key={index}><th scope="row" key={index}>{row.sentOn}</th><td>{row.firstName}</td><td>{row.phone}</td><td>{row.message}</td></tr>
                    })} */}
                    {loading ? <tr scope="row">Loading...</tr> : messages.length == 0 ? <tr scope="row">No Messages</tr> : tabledata}
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default MessageListScreen

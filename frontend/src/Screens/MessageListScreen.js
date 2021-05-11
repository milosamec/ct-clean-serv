import React, {useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getMessages} from '../actions/messageActions'

const MessageListScreen = ({history}) => {

    const dispatch = useDispatch()

    const messageList = useSelector(state => state.messageList)
    const {loading, messages} = messageList

    
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(() => {
        if(userInfo) {
            dispatch(getMessages())
        } else {
            history.push('/admin06810/login')
        }
    },[dispatch, history, userInfo])
    
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
                    {tabledata}
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default MessageListScreen

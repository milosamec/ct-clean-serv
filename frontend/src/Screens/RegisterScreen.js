import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
// import {register} from '../actions/userActions'


const RegisterScreen = ({ location, history }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const {loading, error, userInfo} = userRegister

    useEffect(() => {
        if (userInfo) {
            history.push('/dashboard')
        }
    }, [history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        // dispatch(register(email, password))
        setEmail('')
        setPassword('')
    }

    return (
        <div id="section-admin">
            <div className="container mb-5">
                <div className="row">
                    <h1 className="fs-1 text-center h2-title">Sign Up</h1>
                </div>
                <div className="row">
                    <form onSubmit={submitHandler}>
                        <div className="col-md-6 p-2 m-auto">
                            <div className="form-group pb-2">
                                <input type="text" name="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-md-6 p-2 m-auto">
                            <button className="btn btn-blue" type="submit" placeholder="Login">Login</button>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    )
}

export default RegisterScreen

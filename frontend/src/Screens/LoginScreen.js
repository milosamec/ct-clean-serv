import React, { useEffect, useState } from 'react'

const LoginScreen = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    return (
        <div id="section-admin">
            <div className="container mb-5">
                <div class="row">
                    <h1 className="fs-1 text-center h2-title">Sign In</h1>
                </div>
                <div className="row">
                    <form onSubmit="">
                        <div className="col-md-6 p-2 m-auto">
                            <div className="form-group">
                                <input type="text" name="username" className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <button className="btn btn-blue" type="submit" placeholder="Login">Login</button>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    )
}

export default LoginScreen

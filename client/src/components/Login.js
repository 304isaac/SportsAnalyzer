import React, { useEffect, useState } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import Axios from 'axios'

function Login () {

    Axios.defaults.withCredentials = true;

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loginStatus, setLoginStatus] = useState("")

    const login = () => {

        Axios.post('http://localhost:3001/login',
            {username: username,
            password: password}).then((response) => {
                if(response.data.message) {
                    setLoginStatus(response.data.message)
                }else{
                    setLoginStatus(response.data[0].username)
                }
            });
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if(response.data.loggedIn === true){
                setLoginStatus(response.data.user[0].username)
                console.log(response)
            }
        })
    }, []);

    return (
        <div className="loginWrapper">
            <div className="login-container">
                <h1 className="login-title">Login</h1>
                <form className="form">
                    <div className="input-group"> {/* success */}
                        <label for="email">Username</label>
                        <input type="text" className="username" onChange={(e) => {setUsername(e.target.value)}}/>
                    </div>

                    <div className="input-group"> {/* error */}
                        <label for="password">Password</label>
                        <input type="password" className="password" onChange={(e) => {setPassword(e.target.value)}}/>
                    </div>
                        <button onClick={login} className="login-button">Login</button>
                </form>

                <h2>Don't have an account? Click <span><Link to="/signup">here</Link></span> to signup.</h2>
                <h3>{loginStatus}</h3>
            </div>

            
        </div>
    )
}

export default Login;
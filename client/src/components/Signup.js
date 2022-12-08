import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import './Login.css'




 function Signup () {

    const [emailReg, setEmailReg] = useState("");
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const register = () => {
        Axios.post("http://localhost:3001/register",
            {email: emailReg,
            username: usernameReg,
            password: passwordReg}).then((response) => {
                console.log(response);
            });
    };
    
    return (
        <div className="loginWrapper">
            <div className="login-container">
                <h1 className="login-title">Sign Up</h1>
                <form className="form">
                    <div className="input-group"> {/* success */}
                        <label for="email">Email</label>
                        <input type="text" className="email" onChange={(e) => {setEmailReg(e.target.value); }}/>
                        <span className="msg">Valid email</span>
                    </div>

                    <div className="input-group"> {/* success */}
                        <label for="username">Username</label>
                        <input type="text" className="username" onChange={(e) => {setUsernameReg(e.target.value); }}/>
                    </div>

                    <div className="input-group"> {/* error */}
                        <label for="password">Password</label>
                        <input type="password" className="password" onChange={(e) => {setPasswordReg(e.target.value); }}/>
                        <span className="msg">Incorrect password</span>
                    </div>

                    <button onClick={register} className="login-button" >Sign Up</button>
                </form>

                <h2>Already have an account? Click <span><Link to="/login">here</Link></span> to login.</h2>
            </div>
        </div>
    )
}

export default Signup;
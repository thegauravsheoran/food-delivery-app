import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/frontend_assets/assets'

const LoginPopup = ({ setShowLogin }) => {

    const [currentState, setCurrentState] = useState('Sign Up')
    return (
        <div className='login-popup' id='login-popup'>
            <form className="login-popup-container">
                <div className='login-popup-title'>
                    <h2>{currentState}</h2>
                    <img src={assets.cross_icon} onClick={() => setShowLogin(false)}></img>
                </div>
                <div className='login-popup-input'>
                    {currentState === "Login" ? <></> : <input type='text' placeholder='Your Name' required></input>}
                    <input type='email' placeholder='Your Email' required></input>
                    <input type='password' placeholder='Your Password' required></input>
                </div>
                <button>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type='checkbox' required></input>
                    <p>I agree to the terms and conditions</p>

                </div>
                {currentState === "Login" ? <p>Create a new accout?<span onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p>
                    : <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup

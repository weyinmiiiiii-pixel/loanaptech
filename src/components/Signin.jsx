import React from "react";
import "./Signin.css";
function Signin()  {
    return (
    <div className="signin">
     <div className="signin-container">
     <h1>Create your account</h1>
    <form className="signin-form">
    <div className="form-section">
    <input type="text" placeholder="Full Name"/>
    <input type="email" placeholder="Email Address"/>
    <input type="number" placeholder="Phone Number"/>
    <input type="password" placeholder="Password"/>
    <input type="password" placeholder="Confirm Password"/>
                </div>
                <button type="click">Sign up</button>
                <h2>Already have an account? Login</h2>
            </form>
            </div>
        </div>
    );
}
export default Signin;
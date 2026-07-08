import React from "react";
import "./Signup.css";
function Signup()  {
    return ( 
    <div className="signup">
     <div className="signup-container">
     <h1>Create your account</h1>
    <form className="signup-form">
    <div className="form-section">
    <input type="text" placeholder="Full Name"/>
    <input type="email" placeholder="Email Address"/>
    <input type="number" placeholder="Phone Number"/>
    <input type="password" placeholder="Password"/>
    <input type="password" placeholder="Confirm Password"/>
                </div>
                <button type="submit">Sign up</button>
                <h2>Already have an account? Login</h2>
            </form>
            </div>
        </div>
    );
}
export default Signup;
import React from "react";
import "./Login.css";
function Login()  {
    return (
    <div className="login">
     <div className="login-container">
     <h1>Welcome Back</h1>
    <form className="login-form">
    <div className="form-section">
    <input type="email" placeholder="Email Address"/>
    <input type="password" placeholder="Password"/>
                </div>
                <button type="click">Login</button>
                <h2>Don't have an account? Sign up</h2>
            </form>
            </div>
        </div>
    );
}
export default Login;
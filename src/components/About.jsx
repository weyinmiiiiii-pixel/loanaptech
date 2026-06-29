import React from "react";
import "./About.css";
function About()  {
    return (
    <div className="about-page">
    <div className="about-container">
    <h1>About Us</h1>
    <p>We are a trusted platform dedicated to making loan access simple,fast and transparent.Our mission is to
     empower individuals ans small business with flexible financing options without the hassle of traditional
     banking bureucracy</p>
    <div className="features">
    <div className="feature">
    <h2>Fast Approval</h2>
    <p>Get decisions in minutes, not weeks</p>
     </div>
    <div className="feature">
    <h2>No hidden Fees</h2>
    <p>100% free to aply - no hidden charges</p>
     </div>
    <div className="feature">
    <h2>Secure & Private</h2>
    <p>Your data is encrypted and never shared </p>
     </div>
  </div>
        </div>
        </div>
    );
} 
export default About;
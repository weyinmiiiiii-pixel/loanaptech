import React from "react";
import "./Contact.css";
function Contact()  {
    return (
    <div className="contact">
    <div className="contact-container">
    <h1>Contact Us</h1>
     <p>We're here to help! Reach out any time.</p>
    <div className="contact-info">
    <div className="contact-item">
     <span style={{ color: 'blue' }}>Email:<p>support@loanapp.com</p></span>
      </div>
     <div className="contact-item">
         <span style={{ color: 'blue' }}>Phone:<p>(123) 456-7890</p></span>
         </div>
        </div>
        <div className="contact-item">
         <span style={{ color: 'blue' }}>Hours: <p>Monday - Friday:9:00AM - 6:00PM</p></span>
         </div>
         <form className="contact-form">
         <div className="form-section">
         <input type="text" id="name" placeholder="Your Name"/> 
         </div>
         <div className="form-section">
         <input type="email" id="email" placeholder="Your Email"/>
         </div>
        <div className="form-section">
        <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
        </div>
        <button type="submit">Send Message</button>
         </form>
            </div>
        </div>
    );
}
export default Contact;
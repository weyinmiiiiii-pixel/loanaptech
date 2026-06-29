import React from "react";
import "./Apply.css";
function Apply()  {
    return (
    <div className="apply">
     <div className="apply-container">
        <h1>Apply for Loan</h1>
        <form className="apply-form">
            <div className="form-section">
                <label htmlFor="fname">Full Name</label>
                <input type="text" id="name" placeholder="Joe Doe"/>

                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com"/>

                <label htmlFor="amount">Loan Amount</label>
                <input type="amount" id="amount" placeholder="50000"/>

                <label htmlFor="tenure">Loan Tenure</label>
                <input type="tenure" id="tenure" placeholder="Select tenure"/>

                <label htmlFor="purpose">Purpose of Loan</label>
                <textarea id="purpose" placeholder="e.g ., Home Renovations, Business expansion,Education ..." rows="5" required></textarea>
            </div>
            <button type="click">Submit Application</button>
        </form>     
        </div>
     </div>
    );
}
export default Apply;
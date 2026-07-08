import React from "react";
import {Link} from "react-router-dom";
import "./Home.css";
function Home()  {
    return (
    <div className="home">
     <div className="home-container">
        <h1>Welcome to LoanAptech</h1>
        <p>Get instant personal loans up to $50,000 with low interest rates and flexible<br></br> repayment options</p>
        <Link to="/apply" className="apply-button">Apply Now,It's Free</Link>
        <div className="card-container">
            <div className="card">
                <h2>Lightning <br></br>Fast</h2>
                <h3>Lightning Fast Approval</h3>
                <p>Get decision in under 10 minutes.</p>
            </div>
            <div className="card">
                <h2>No <br></br>Paperwork</h2>
                <h3>No paperwork required</h3>
                <p>100% digital & hassle-free process.</p>
            </div>
            <div className="card">
                <h2>Best <br></br>Rates</h2>
                <h3>Lowest Interest Rates</h3>
                <p>Starting from just 8.99% p.a</p>
                </div>
        </div>
        <p>Already applied?
            <Link to="/loan-status" className="status-link">Check Loan Status .</Link>
            <Link to="/dashboard" className="dashboard-link">Go to Dashboard</Link>
        </p>
        </div>
        </div>
    );
    }
    export default Home;
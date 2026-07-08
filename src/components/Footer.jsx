import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <h1>LoanAptech</h1>
        <p>Your trusted partner for fast, transparent and affordable loans</p>
      </div>

      <div className="footer-section">
        <h2>Quick Links</h2>
        <Link to="/home">Home</Link>
        <Link to="/loan">Loan Product</Link>
        <Link to="/apply">Apply Now</Link>
        <Link to="/about">About Us</Link>
      </div>

      <div className="footer-section">
        <h2>Support</h2>
        <Link to="/contact">Contact Us</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/term">Terms of Service</Link>
      </div>

      <div className="footer-section">
        <h2>Get In Touch</h2>
        <a href="mailto:support@loanaptech.com">support@loanaptech.com</a>
        <a href="tel:+15551234567">+1(555)123-4567</a>
        <p>Mon-Fri; 9AM-6PM EST</p>
      </div>

      <div className="footer-item">
        <p>&copy; {currentYear} LoanAptech. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
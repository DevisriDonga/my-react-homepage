import React from "react";
import PayPal from "../../assets/paypal.png";
import Visa from "../../assets/creditcards-no-paypal.png";
import brandtree from "../../assets/braintree-badge-dark.png"
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>Customer Service</h3>
          <ul>
            <li>Help Center</li>
            <li>Order Status</li>
            <li>Returns & Replacements</li>
            <li>International Shipping</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Shopping</h3>
          <ul>
            <li>On Sale Items</li>
            <li>Our Brands</li>
            <li>Trade Customers</li>
            <li>View Your Cart</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Company Info</h3>
          <ul>
            <li>About Us</li>
            <li>Partners</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Affiliate Program</li>
            <li>Contact Us</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Customer Support</h3>
          <div className="div_a">Ref # R101702020</div>
          <p>
            <strong>Already Order?</strong>
            <br />
            File a Return or Replacement <a href="#">here</a>.
            <br />
            View Your Order Status <a href="#">here</a>.
            <br />
            For anything else, visit us at our <a href="#">HelpDesk</a>.
          </p>
          <p>
            <strong>Ready to Order?</strong>
            <br />
            Talk with our Sales Associate. <span><FaRegArrowAltCircleRight /></span>
            <br />
            Online Chat Available from Monday - Friday: 6:00 a.m. to 4:00 p.m. PST
            <br />
            Saturday & Sunday: 6:00 a.m. to 3:00 p.m. PST
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 CanadaLightingExperts. All Rights Reserved.</p>
        <div className="footer-payments">
          <img
            src={PayPal}
            alt="PayPal"
          />
          
          <img
            src={Visa}
            alt="Visa"
          />
            
            <img src={brandtree}/>        
             </div>
      </div>
    </div>
  );
}

export default Footer;

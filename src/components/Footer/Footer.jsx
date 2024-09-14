import "./Footer.css";

// React Icons
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="main-footer-container">
      <div className="footer-container">
        <div className="footer-item">
          <h6 className="item-heading text-third">Company Info</h6>
          <h6 className="item-list">About Us</h6>
          <h6 className="item-list">Career</h6>
          <h6 className="item-list">We are hiring</h6>
          <h6 className="item-list">Blog</h6>
        </div>
        <div className="footer-item">
          <h6 className="item-heading text-third">Legal</h6>
          <h6 className="item-list">About Us</h6>
          <h6 className="item-list">Career</h6>
          <h6 className="item-list">We are hiring</h6>
          <h6 className="item-list">Blog</h6>
        </div>
        <div className="footer-item">
          <h6 className="item-heading text-third">Features</h6>
          <h6 className="item-list">Business Marketing</h6>
          <h6 className="item-list">User Analytic</h6>
          <h6 className="item-list">Live Chat</h6>
          <h6 className="item-list">Unlimited Support</h6>
        </div>
        <div className="footer-item">
          <h6 className="item-heading text-third">Resources</h6>
          <h6 className="item-list">iOS and Android</h6>
          <h6 className="item-list">Watch a Demo</h6>
          <h6 className="item-list">Customers</h6>
          <h6 className="item-list">Api</h6>
        </div>
        <div className="footer-item">
          <h6 className="item-heading text-third">Get In Touch</h6>
          <h6 className="item-list">
            <FaPhoneAlt color="#96ba7b" /> &nbsp; (480) 555-0103
          </h6>
          <h6 className="item-list">
            <FaLocationDot color="#96ba7b" /> &nbsp; 4517 Washington Ave,
            Manchester kentucky 39495
          </h6>
          <h6 className="item-list">
            <MdEmail color="#96ba7b" /> &nbsp; debra.holt@example.com
          </h6>
        </div>
      </div>
    </div>
  );
}

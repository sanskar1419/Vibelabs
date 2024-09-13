import "./SocialFooter.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function SocialFooter() {
  return (
    <div className="social-footer-container bg-first">
      <div className="social-main-container">
        <div className="company-rights">
          Made with love by Figmaland All Right Reserved
        </div>
        <div className="social-container">
          <FaFacebook color="#96ba7b" />
          <FaInstagram color="#96ba7b" />
          <FaTwitter color="#96ba7b" />
        </div>
      </div>
    </div>
  );
}

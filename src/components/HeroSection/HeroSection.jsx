import "./HeroSection.css";
import heroImag from "../../assets/hero-image.png";

export default function HeroSection() {
  return (
    <div className="hero-container bg-first">
      <div className="hero-left">
        <h6 className="hero-sub-heading">Welcome</h6>
        <h2 className="hero-heading">Best Learning Opportunities</h2>
        <h6 className="hero-para">
          Our goal is to make online education work for everyone
        </h6>
        <div className="hero-button-container">
          <button className="btn-color">Join Us</button>
          <button className="btn-outline">Learn More</button>
        </div>
      </div>
      <div className="hero-right">
        <img alt="hero" src={heroImag} />
      </div>
    </div>
  );
}

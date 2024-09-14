import Carousel from "react-bootstrap/Carousel";
import team10 from "../../assets/team10.jpg";
import team2 from "../../assets/team2.jpg";
import team3 from "../../assets/team3.jpg";
import team4 from "../../assets/team4.jpg";
import team5 from "../../assets/team5.jpg";
import team6 from "../../assets/team6.jpg";
import team7 from "../../assets/team7.jpg";
import team8 from "../../assets/team8.jpg";
import team9 from "../../assets/team9.jpg";
import "./TeamCarousel1000.css";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function TeamCarousel1000() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade keyboard wrap>
      <Carousel.Item>
        <div className="carousel-wrapper">
          <div className="card shadow-lg">
            <div className="image-container">
              <img src={team2} className="" alt="..." />
            </div>
            <div className="card-body d-flex justify-content-center flex-column align-items-center">
              <h5 className="card-title">Jullian Jamison</h5>
              <p className="card-text">Profession</p>
              <div className="team-social-container">
                <FaFacebook color="#96ba7b" />
                <FaInstagram color="#96ba7b" />
                <FaTwitter color="#96ba7b" />
              </div>
            </div>
          </div>
          <div className="card shadow-lg">
            <div className="image-container">
              <img src={team3} className="" alt="..." />
            </div>
            <div className="card-body d-flex justify-content-center flex-column align-items-center">
              <h5 className="card-title">Jullian Jamison</h5>
              <p className="card-text">Profession</p>
              <div className="team-social-container">
                <FaFacebook color="#96ba7b" />
                <FaInstagram color="#96ba7b" />
                <FaTwitter color="#96ba7b" />
              </div>
            </div>
          </div>
          <div className="card shadow-lg">
            <div className="image-container">
              <img src={team4} className="" alt="..." />
            </div>
            <div className="card-body d-flex justify-content-center flex-column align-items-center">
              <h5 className="card-title">Jullian Jamison</h5>
              <p className="card-text">Profession</p>
              <div className="team-social-container">
                <FaFacebook color="#96ba7b" />
                <FaInstagram color="#96ba7b" />
                <FaTwitter color="#96ba7b" />
              </div>
            </div>
          </div>
          <div className="card shadow-lg">
            <div className="image-container">
              <img src={team5} className="" alt="..." />
            </div>
            <div className="card-body d-flex justify-content-center flex-column align-items-center">
              <h5 className="card-title">Jullian Jamison</h5>
              <p className="card-text">Profession</p>
              <div className="team-social-container">
                <FaFacebook color="#96ba7b" />
                <FaInstagram color="#96ba7b" />
                <FaTwitter color="#96ba7b" />
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-wrapper">
          <div className="card shadow-lg">
            <div className="image-container">
              <img src={team2} className="" alt="..." />
            </div>
            <div className="card-body d-flex justify-content-center flex-column align-items-center">
              <h5 className="card-title">Jullian Jamison</h5>
              <p className="card-text">Profession</p>
              <div className="team-social-container">
                <FaFacebook color="#96ba7b" />
                <FaInstagram color="#96ba7b" />
                <FaTwitter color="#96ba7b" />
              </div>
            </div>
          </div>
          <div className="card shadow-lg">
            <div className="image-container">
              <img src={team7} className="" alt="..." />
            </div>
            <div className="card-body d-flex justify-content-center flex-column align-items-center">
              <h5 className="card-title">Jullian Jamison</h5>
              <p className="card-text">Profession</p>
              <div className="team-social-container">
                <FaFacebook color="#96ba7b" />
                <FaInstagram color="#96ba7b" />
                <FaTwitter color="#96ba7b" />
              </div>
            </div>
          </div>
          <div className="card shadow-lg">
            <div className="image-container">
              <img src={team8} className="" alt="..." />
            </div>
            <div className="card-body d-flex justify-content-center flex-column align-items-center">
              <h5 className="card-title">Jullian Jamison</h5>
              <p className="card-text">Profession</p>
              <div className="team-social-container">
                <FaFacebook color="#96ba7b" />
                <FaInstagram color="#96ba7b" />
                <FaTwitter color="#96ba7b" />
              </div>
            </div>
          </div>
          <div className="card shadow-lg">
            <div className="image-container">
              <img src={team9} className="" alt="..." />
            </div>
            <div className="card-body d-flex justify-content-center flex-column align-items-center">
              <h5 className="card-title">Jullian Jamison</h5>
              <p className="card-text">Profession</p>
              <div className="team-social-container">
                <FaFacebook color="#96ba7b" />
                <FaInstagram color="#96ba7b" />
                <FaTwitter color="#96ba7b" />
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-wrapper">
          <div className="card shadow-lg">
            <div className="image-container">
              <img src={team6} className="" alt="..." />
            </div>
            <div className="card-body d-flex justify-content-center flex-column align-items-center">
              <h5 className="card-title">Jullian Jamison</h5>
              <p className="card-text">Profession</p>
              <div className="team-social-container">
                <FaFacebook color="#96ba7b" />
                <FaInstagram color="#96ba7b" />
                <FaTwitter color="#96ba7b" />
              </div>
            </div>
          </div>
          <div className="card shadow-lg">
            <div className="image-container">
              <img src={team4} className="" alt="..." />
            </div>
            <div className="card-body d-flex justify-content-center flex-column align-items-center">
              <h5 className="card-title">Jullian Jamison</h5>
              <p className="card-text">Profession</p>
              <div className="team-social-container">
                <FaFacebook color="#96ba7b" />
                <FaInstagram color="#96ba7b" />
                <FaTwitter color="#96ba7b" />
              </div>
            </div>
          </div>
          <div className="card shadow-lg">
            <div className="image-container">
              <img src={team2} className="" alt="..." />
            </div>
            <div className="card-body d-flex justify-content-center flex-column align-items-center">
              <h5 className="card-title">Jullian Jamison</h5>
              <p className="card-text">Profession</p>
              <div className="team-social-container">
                <FaFacebook color="#96ba7b" />
                <FaInstagram color="#96ba7b" />
                <FaTwitter color="#96ba7b" />
              </div>
            </div>
          </div>
          <div className="card shadow-lg">
            <div className="image-container">
              <img src={team3} className="" alt="..." />
            </div>
            <div className="card-body d-flex justify-content-center flex-column align-items-center">
              <h5 className="card-title">Jullian Jamison</h5>
              <p className="card-text">Profession</p>
              <div className="team-social-container">
                <FaFacebook color="#96ba7b" />
                <FaInstagram color="#96ba7b" />
                <FaTwitter color="#96ba7b" />
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default TeamCarousel1000;

{
  /* <div className="card">
<img src={team10} className="card-img-top" alt="..." />
<div className="card-body">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </p>
  <a href="#" className="btn btn-primary">
    Go somewhere
  </a>
</div>
</div> */
}

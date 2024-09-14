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
import "./TeamCarousel.css";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import useWindowDimensions from "../../hooks/useWindowsDimenssion";
import TeamCarousel1000 from "../TeamCarousel1000/TeamCarousel1000";
import TeamCarousel700 from "../TeamCarousel700/TeamCarousel700";
import TeamCarouselL700 from "../TeamCarouselL700/TeamCarouselL700";

function IndividualIntervalsExample() {
  const { height, width } = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {width >= 1200 ? (
        <TeamCarousel1000 />
      ) : width >= 700 ? (
        <TeamCarousel700 />
      ) : (
        <TeamCarouselL700 />
      )}
    </>
  );
}

export default IndividualIntervalsExample;

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

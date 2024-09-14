import "./TeamCarousel.css";
import { useState } from "react";

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

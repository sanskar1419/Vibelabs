import IndividualIntervalsExample from "../TeamCarousel/TeamCarousel";
import "./TeamSection.css";

export default function TeamSection() {
  return (
    <div className="team-main-container">
      <div className="team-container">
        <div className="team-section-container">
          <div className="team-subheading">Team</div>
          <div className="team-heading">Get Quality Education</div>
          <div className="team-para">
            Problem trying to resolve the conflict between the two major realms
            of Chemical physics: Newtonian Mechanics
          </div>
        </div>
        <div className="team-info-container">
          <IndividualIntervalsExample />
        </div>
      </div>
    </div>
  );
}

import "./WebsiteInfo.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaTv } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function WebsiteInfo() {
  return (
    <div className="info-main-container">
      <div className="info-container">
        <div className="info-left-container">
          <div className="left-line"></div>
          <div className="info-left-heading">Affordable Packages</div>
          <div className="info-left-para">
            Problem trying to resolve the conflict between the two major realms
            of Chemical physics: Newtonian Mechanics
          </div>
          <div className="left-button-container">
            Learn More{" "}
            <div className="right-arrow">
              <MdKeyboardArrowRight color="#96ba7b" />
            </div>
          </div>
        </div>
        <div className="info-right-container">
          <Card
            style={{
              width: "45%",
              border: "none",
              cursor: "pinter",
              marginBottom: "0.8rem",
            }}
            className=" shadow-lg"
          >
            <Card.Body>
              <div className="item-image">
                <FaTv color="white" />
              </div>
              <Card.Title
                className="card-title"
                style={{ fontSize: "1rem", fontWeight: "600" }}
              >
                Certified Teacher
              </Card.Title>
              <div className="right-line"></div>
              <Card.Text style={{ fontSize: "0.8rem", color: "#737373" }}>
                The gradual accumulation of information about
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "45%",
              border: "none",
              cursor: "pinter",
              marginBottom: "0.8rem",
            }}
            className=" shadow-lg "
            id="card-container"
          >
            <Card.Body>
              <div className="item-image">
                <FaTv color="white" />
              </div>
              <Card.Title
                className="card-title"
                style={{ fontSize: "1rem", fontWeight: "600" }}
              >
                Certified Teacher
              </Card.Title>
              <div className="right-line"></div>
              <Card.Text style={{ fontSize: "0.8rem", color: "#737373" }}>
                The gradual accumulation of information about
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

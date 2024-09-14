import "./Newsletter.css";

// Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Newsletter() {
  return (
    <div className="newsletter-main-container bg-first">
      <div className="newsletter-container">
        <div className="newsletter-subheading">Newsletter</div>
        <div className="newsletter-heading">Watch our Courses</div>
        <div className="newsletter-para">
          Problem trying to resolve the conflict between the two major realms of
          Chemical physics: Newtonian Mechanics
        </div>
        <form style={{ width: "100%" }}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Your Email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={{
                fontSize: "0.8rem",
                outline: "none",
                width: "",
              }}
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />
            <Button
              type="submit"
              id="button-addon2"
              style={{
                backgroundColor: "#96ba7b",
                outline: "none",
                border: "none",
                fontSize: "0.7rem",
              }}
            >
              Subscribe
            </Button>
          </InputGroup>
        </form>
      </div>
    </div>
  );
}

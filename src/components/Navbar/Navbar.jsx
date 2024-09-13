// Styling Import
import "./Navbar.css";

// Bootstrap
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaLongArrowAltRight } from "react-icons/fa";

import { Link, Outlet } from "react-router-dom";

export default function MainNavbar() {
  return (
    <>
      <Navbar expand="lg" className="bg-first" fixed="top">
        <Container className="navbar-container" fluid>
          <Link style={{ textDecoration: "none" }} to="/">
            <Navbar.Brand
              style={{
                fontSize: "1rem",
                fontWeight: "600",
                letterSpacing: "2px",
              }}
            >
              VIB<span className="logo bg-third">LABS</span>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 no-scrollbar"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Product</Nav.Link>
              <Nav.Link href="/">Pricing</Nav.Link>
              <Nav.Link href="/">Product</Nav.Link>
            </Nav>
            <Nav className="">
              <Nav.Link
                className=""
                style={{ marginRight: "20px", color: "#96ba7b" }}
                href="/"
              >
                Login
              </Nav.Link>
              <Button
                className=" btn-sm display-1 align-items-center justify-content-center"
                style={{
                  background: "#96ba7b",
                  outline: "none ",
                  border: "none",
                }}
              >
                Join Us &nbsp; <FaLongArrowAltRight />
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

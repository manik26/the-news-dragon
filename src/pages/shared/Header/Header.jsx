import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img className="m-2" src={logo} alt="" />
        <p>
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY ")}</p>
      </div>
      <div className="d-flex bg-secondary">
        <Button variant="danger">Latest</Button>
        <Marquee>
          <p className="text-light pt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ut
            aperiam sapiente repellat cupiditate dolorem.
          </p>
        </Marquee>
      </div>
      {/* navbar header pat  */}
      <div className="my-3">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>

              <Nav>
                <Nav.Link className="pt-3" href="#deets">
                  profile
                </Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  <Button variant="dark">Login</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default Header;

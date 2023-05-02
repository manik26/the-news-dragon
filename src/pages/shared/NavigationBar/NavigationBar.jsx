import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/">Home</Link>

              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Career">Career</Nav.Link>
            </Nav>

            <Nav>
              {user && (
                <Nav.Link href="#deets">
                  {/* {user.displayName} */}
                  <FaUser></FaUser>
                </Nav.Link>
              )}
              {user ? (
                <Link>
                  <Button variant="dark">Logout</Button>
                </Link>
              ) : (
                <Link to="/login">
                  <Button variant="dark">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;

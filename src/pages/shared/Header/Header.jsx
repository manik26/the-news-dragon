import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
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
      <div className="my-3"></div>
    </Container>
  );
};

export default Header;

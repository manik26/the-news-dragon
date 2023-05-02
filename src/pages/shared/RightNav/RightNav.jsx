import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaBroadcastTower,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Qzone from "../Footer/Qzone/Qzone";

const RightNav = () => {
  return (
    <>
      {/* login pat....! */}
      <div className="text-center">
        <h4>Login With</h4>
        <div>
          <Button variant="outline-secondary my-2">
            <FaGoogle /> Login with google
          </Button>
          <Button variant="outline-success">
            <FaGithub></FaGithub> Login with gitHub
          </Button>
        </div>
      </div>
      {/* find pat.....!  */}
      <div className="text-center my-4">
        <h4>Find Us On</h4>
        <div>
          <ListGroup>
            <ListGroup.Item>
              <FaFacebookF></FaFacebookF> Facebook
            </ListGroup.Item>
            <ListGroup.Item>
              <FaTwitter></FaTwitter> Twitter
            </ListGroup.Item>
            <ListGroup.Item>
              <FaInstagram></FaInstagram> instagram
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>

      <Qzone></Qzone>

      <div className="text-center ">
        <h2 className="p-1">Create an Amazing Newspaper </h2>
        <p className="p-3">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <Button variant="danger"> Learn More</Button>
      </div>
    </>
  );
};

export default RightNav;

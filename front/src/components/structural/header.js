import React, {Component} from 'react';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">
          <img
            src="../../ib-logo.svg"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="IB Discord Team"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#">Commands</Nav.Link>
          <Nav.Link href="#">Data Processing</Nav.Link>
          <Nav.Link href="#">Configuration</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

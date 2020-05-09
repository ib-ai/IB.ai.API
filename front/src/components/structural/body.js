import React, {Component} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Sidebar from "./sidebar";
import Container from "react-bootstrap/Container";
import TestData from "../data_display/test_data";

export default class Body extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="sidebarColour" xs={2} sm={2} md={2} lg={2} xl={2}>
            <Sidebar />
          </Col>
          <Col className="leftColour">
            <p>Lefty column</p>
            <TestData />
          </Col>
          <Col className="rightColour">
            <p>Right column</p>
            <h1>Some content</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

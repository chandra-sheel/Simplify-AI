import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Button, Nav } from "react-bootstrap";

class Display extends Component {
  render() {
    const { header, title, text, theLink } = this.props;
    return (
      <div>
        <Card
          style={{ backgroundColor: "rgb(38 50 67)", color: "grey" }}
          className="text-center"
        >
          <Card.Header as="h4">{header}</Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Nav.Link href={theLink}>
              <Button variant="secondary" style={{ color: "#1d283e" }}>
                Get Started
              </Button>
            </Nav.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default Display;

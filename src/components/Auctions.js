import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Auctions = () => {
  return (
    <Container>
      <Row>
        <Col md={12} sm={12} xs={6} xl={6}>
          <h3>Hot Auctions</h3>
        </Col>
        <Col md={12} sm={12} xs={6} xl={6}>
          <p>View All</p>
        </Col>
      </Row>
    </Container>
  );
};
export default Auctions;

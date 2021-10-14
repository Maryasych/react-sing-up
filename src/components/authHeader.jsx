import { Col, Row } from "react-bootstrap";

const AuthHeader = () => {
  return (
    <Row>
      <Col className="d-flex flex-column align-items-center justify-content-center pb-4">
        <div className="logo"></div>
        <span className="fw-bold">Sing Up with email</span>
      </Col>
    </Row>
  );
};

export { AuthHeader };

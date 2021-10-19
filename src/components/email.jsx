import { Col, Row } from "react-bootstrap";
import { ErrorMessage } from "./errorMessage";

const Email = (props) => {
  return (
    <Row>
      <Col>
        <span className="fw-bold">Email</span>
        <input
          type="text"
          name="email"
          className={`w-100 custom-form-control rounded-16 p-3 mt-2 ${
            props.inputFieldStates[props.emailField]
          }`}
          placeholder="johnsmith@mail.com"
          required
          onFocus={() => props.setEmailFieldState(1)}
          onBlur={() => props.setEmailFieldState(0)}
          onChange={(e) => props.setValue("email", e.target.value)}
        ></input>
        <ErrorMessage message={props.emailErrCode} />
      </Col>
    </Row>
  );
};

export { Email };

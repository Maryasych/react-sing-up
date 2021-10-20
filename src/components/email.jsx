import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import { ErrorMessage } from "./errorMessage";
import { InputField } from "./InputField";

const Email = (props) => {
  return (
    <Fragment>
      <Row>
        <Col>
          <span className="fw-bold">Email</span>
          <InputField
            name="email"
            fieldOutlineState={props.emailField}
            placeholder="johnsmith@mail.com"
            setFieldState={props.setEmailFieldState}
            setValue={props.setValue}
            fieldName="email"
            inputFieldState={props.inputFieldStates}
            optionalClasses="w-100 mt-2"
          />
        </Col>
      </Row>
      <ErrorMessage message={props.emailErrCode} />
    </Fragment>
  );
};

export { Email };

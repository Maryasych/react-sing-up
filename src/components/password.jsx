import { Fragment, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ErrorMessage } from "./errorMessage";

const Password = (props) => {
  let pass = useRef();
  let confirmPass = useRef();
  let [visiblePass, setPassVisibility] = useState(false);
  let [visibleConfirmPass, setConfirmPassVisibility] = useState(false);

  const setInputFocus = ({ current }) => current.focus();

  return (
    <Fragment>
      <Row className="mb-3">
        <Col>
          <span className="fw-bold">Create password</span>
          <div className="input-group password w-100 mt-2">
            <input
              ref={pass}
              type={`${visiblePass ? "text" : "password"}`}
              className={` custom-form-control rounded-16 p-3 ${
                props.inputFieldStates[props.passwordField]
              }`}
              placeholder="******"
              name="password"
              required
              aria-describedby="create-password"
              onFocus={() => props.setPasswordFieldState(1)}
              onBlur={() => props.setPasswordFieldState(0)}
              onChange={(e) => props.setValue("pass1", e.target.value)}
            />
            <span
              className={`input-group-text rounded-16 show ${
                props.inputFieldStates[props.passwordField]
              }`}
              id="create-password"
              onClick={() => {
                setInputFocus(pass);
                setPassVisibility(!visiblePass);
              }}
            ></span>
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <span className="fw-bold">Confirm password</span>
          <div className="input-group password w-100 mt-2">
            <input
              ref={confirmPass}
              type={`${visibleConfirmPass ? "text" : "password"}`}
              className={` custom-form-control rounded-16 p-3 ${
                props.inputFieldStates[props.passwordConfirmField]
              }`}
              placeholder="******"
              required
              aria-describedby="create-password"
              onFocus={() => props.setPasswordConfirmFieldState(1)}
              onBlur={() => props.setPasswordConfirmFieldState(0)}
              onChange={(e) => props.setValue("pass2", e.target.value)}
            />
            <span
              className={`input-group-text rounded-16 show ${
                props.inputFieldStates[props.passwordConfirmField]
              }`}
              id="create-password"
              onClick={() => {
                setInputFocus(confirmPass);
                setConfirmPassVisibility(!visibleConfirmPass);
              }}
            ></span>
          </div>
          <ErrorMessage message={props.passwordErrCode} />
        </Col>
      </Row>
    </Fragment>
  );
};

export { Password };

import { Fragment, useState } from "react";
import { Row } from "react-bootstrap";
import { InputFieldWithTypeChange } from "./InputFieldGroup";
import { ErrorMessage } from "./errorMessage";

const Password = (props) => {
  let [isPassText, setPassVisibility] = useState(false);
  let [isConfirmPassText, setConfirmPassVisibility] = useState(false);

  const setFocus = ({ current }) => current.focus();

  return (
    <Fragment>
      <Row className="mb-3">
        <InputFieldWithTypeChange
          label="Create password"
          isText={isPassText}
          changeValueVisibility={setPassVisibility}
          setFocus={setFocus}
          inputFieldState={props.inputFieldStates}
          fieldOutlineState={props.passwordOutline}
          setFieldState={props.setPasswordFieldState}
          setValue={props.setValue}
          fieldName="pass1"
          placeholder="******"
        />
      </Row>
      <Row className="mb-3">
        <InputFieldWithTypeChange
          label="Confirm password"
          isText={isConfirmPassText}
          changeValueVisibility={setConfirmPassVisibility}
          setFocus={setFocus}
          inputFieldState={props.inputFieldStates}
          fieldOutlineState={props.passwordConfirmOutline}
          setFieldState={props.setPasswordConfirmFieldState}
          setValue={props.setValue}
          fieldName="pass2"
          placeholder="******"
          name="password"
        />
      </Row>
      <ErrorMessage message={props.passwordErrCode} />
    </Fragment>
  );
};

export { Password };

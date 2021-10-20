import { useRef } from "react";
import { Col } from "react-bootstrap";
import { InputField } from "./InputField";

export const InputFieldWithTypeChange = (props) => {
  console.log(props);
  let {
    label,
    isText,
    setFocus,
    changeValueVisibility,
    inputFieldState,
    fieldOutlineState,
    setFieldState,
    fieldName,
    placeholder,
    name = "",
    setValue,
  } = props;

  let elem = useRef();

  return (
    <Col>
      <span className="fw-bold">{label}</span>
      <div className="input-group password w-100 mt-2">
        <InputField
          elem={elem}
          isText={isText}
          fieldName={fieldName}
          setFieldState={setFieldState}
          inputFieldState={inputFieldState}
          fieldOutlineState={fieldOutlineState}
          placeholder={placeholder}
          name={name}
          setValue={setValue}
        />
        <span
          className={`input-group-text rounded-16 show ${inputFieldState[fieldOutlineState]}`}
          id={fieldName}
          onClick={() => {
            setFocus(elem);
            changeValueVisibility(!isText);
          }}
        ></span>
      </div>
    </Col>
  );
};

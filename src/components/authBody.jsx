import { GenderSelector } from "./genderSelector";
import { Email } from "./email";
import { Password } from "./password";
import { useState } from "react";
import { SubmitBtnContainer } from "./SubmitBtnContainer";

const inputFieldStates = {
  0: "normal",
  1: "active",
  2: "error",
};

const AuthBody = () => {
  let [userData, setData] = useState({
    gender: "",
    email: "",
    password: "",
    pass1: "",
    pass2: "",
  }); // modify in setValue func only!

  let [genderErrCode, setGenderErrCode] = useState("");

  let [emailField, setEmailFieldState] = useState(0);
  let [emailErrCode, setEmailErrCode] = useState("");

  let [passwordOutline, setPasswordFieldState] = useState(0);
  let [passwordConfirmOutline, setPasswordConfirmFieldState] = useState(0);

  let [passwordErrCode, setPasswordErrCode] = useState("");

  const setValue = (prop, value) => {
    let temp = userData;
    temp[prop] = value;
    setData(temp);
    temp = null;
  };

  const verifyGender = (value) => {
    if (value === "") {
      setGenderErrCode("Gender selection required");
      return false;
    } else {
      setGenderErrCode("");
      return true;
    }
  };

  const verifyEmail = (value) => {
    value.trim();
    if (/\S+@\S+\.\S+/.test(value)) {
      setValue("email", value);
      setEmailErrCode("");
      return true;
    } else {
      setEmailFieldState(2);
      setEmailErrCode("Invalid email");
      return false;
    }
  };

  const verifyPassword = (pass1, pass2) => {
    pass1.trim();
    pass2.trim();
    console.log(pass1, pass2);
    if (pass1 !== pass2) {
      setPasswordFieldState(2);
      setPasswordConfirmFieldState(2);
      setPasswordErrCode("Password mismatch");
      return false;
    } else if (pass1.length < 6) {
      setPasswordFieldState(2);
      setPasswordConfirmFieldState(2);
      setPasswordErrCode("Password length cannot be less than 6 characters");
      return false;
    } else {
      setValue("password", pass1);
      setPasswordErrCode("");
      return true;
    }
  };

  const verifyForm = (e) => {
    let genderValidated = verifyGender(userData.gender);
    let emailValidated = verifyEmail(userData.email);
    let passwordValidated = verifyPassword(userData.pass1, userData.pass2);
    if (!(genderValidated && emailValidated && passwordValidated)) {
      e.preventDefault();
    }
  };

  return (
    <form onSubmit={(e) => verifyForm(e)}>
      <GenderSelector
        setData={setData}
        userData={userData}
        genderErrCode={genderErrCode}
      />
      <Email
        inputFieldStates={inputFieldStates}
        setValue={setValue}
        emailErrCode={emailErrCode}
        emailField={emailField}
        setEmailFieldState={setEmailFieldState}
      />
      <Password
        inputFieldStates={inputFieldStates}
        setValue={setValue}
        passwordErrCode={passwordErrCode}
        passwordOutline={passwordOutline}
        setPasswordFieldState={setPasswordFieldState}
        passwordConfirmOutline={passwordConfirmOutline}
        setPasswordConfirmFieldState={setPasswordConfirmFieldState}
      />
      <SubmitBtnContainer />
    </form>
  );
};

export { AuthBody };

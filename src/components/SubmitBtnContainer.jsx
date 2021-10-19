import { useState } from "react";
import { SubmitBtn } from "./SubmitBtn";

export const SubmitBtnContainer = () => {
  let [submitBntBg, setSubmitBtnBg] = useState(0);
  const bntBgColorStates = {
    0: "normal",
    1: "hover",
    2: "pressed",
  };

  return (
    <SubmitBtn
      submitBntBg={submitBntBg}
      setBGColor={setSubmitBtnBg}
      bntBgColorStates={bntBgColorStates}
    />
  );
};

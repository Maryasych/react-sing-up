export const SubmitBtn = (props) => {
  let { submitBntBg, setBGColor, bntBgColorStates } = props;
  return (
    <input
      type="submit"
      className={`btn text-white fw-bolder rounded-16 w-100 p-4 mt-2 custom-btn ${bntBgColorStates[submitBntBg]}`}
      id="btnradio1"
      autoComplete="off"
      value="Sing Up"
      onMouseOver={() => {
        setBGColor(1);
      }}
      onMouseLeave={() => {
        setBGColor(0);
      }}
      onMouseDown={() => {
        setBGColor(2);
      }}
      onMouseUp={() => {
        setBGColor(1);
      }}
    />
  );
};

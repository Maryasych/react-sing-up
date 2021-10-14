import { Row } from "react-bootstrap";
import { ErrorMessage } from "./errorMessage";
import { ReactComponent as MaleSVG } from "../svg/male.svg";
import { ReactComponent as FemaleSVG } from "../svg/female.svg";
import { ReactComponent as OtherSVG } from "../svg/other.svg";

const GenderSelector = (props) => {
  const setGender = ({ value }) => {
    let temp = props.userData;
    temp.gender = value;
    props.setData(temp);
  };
  return (
    <Row className="mb-3">
      <span className="fw-bold pb-2">Gender</span>
      <div
        className="btn-group d-flex justify-content-between"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <div className="d-flex justify-content-between mt-2">
          <input
            type="radio"
            className="btn-check"
            name="gender"
            id="btnradio1"
            autoComplete="off"
            value="male"
            onChange={(e) => setGender(e.target)}
          />
          <label
            className="pb-1 btn btn-border-gray rounded-16 d-flex flex-column align-items-center justify-content-center gender-custom-btn"
            htmlFor="btnradio1"
          >
            <MaleSVG />
            Male
          </label>
        </div>

        <div className="d-flex justify-content-between mt-2">
          <input
            type="radio"
            className="btn-check"
            name="gender"
            id="btnradio2"
            autoComplete="off"
            value="female"
            onChange={(e) => setGender(e.target)}
          />
          <label
            className="pb-1 btn btn-border-gray rounded-16 d-flex flex-column align-items-center justify-content-center gender-custom-btn"
            htmlFor="btnradio2"
          >
            <FemaleSVG />
            Female
          </label>
        </div>

        <div className="d-flex justify-content-between mt-2">
          <input
            type="radio"
            className="btn-check"
            name="gender"
            id="btnradio3"
            autoComplete="off"
            value="other"
            onChange={(e) => setGender(e.target)}
          />
          <label
            className="pb-1 btn btn-border-gray rounded-16 d-flex flex-column align-items-center justify-content-center gender-custom-btn"
            htmlFor="btnradio3"
          >
            <OtherSVG />
            Other
          </label>
        </div>
      </div>
      <ErrorMessage message={props.genderErrCode} />
    </Row>
  );
};

export { GenderSelector };

import { Row } from "react-bootstrap";

const AuthFooter = () => {
  return (
    <Row className="mt-3 text-center">
      <span>
        Already have an account?
        <a
          href="#foo"
          className="text-normal"
          onClick={(e) => e.preventDefault()}
        >
          {` Log in`}
        </a>
      </span>
      <span>
        Review privacy and disclosures?
        <a
          href="#foo"
          className="text-normal"
          onClick={(e) => e.preventDefault()}
        >
          {` here`}
        </a>
      </span>
    </Row>
  );
};

export { AuthFooter };

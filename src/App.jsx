import { Container } from "react-bootstrap";
import { AuthHeader } from "./components/authHeader";
import { AuthBody } from "./components/authBody";
import { AuthFooter } from "./components/authFooter";

function App() {
  return (
    <Container
      fluid
      className="main-bg min-vh-100 min-vw-100 d-flex align-items-center"
    >
      <Container className="login-form col-sm-6 rounded-16">
        <AuthHeader />
        <AuthBody />
        <AuthFooter />
      </Container>
    </Container>
  );
}

export default App;

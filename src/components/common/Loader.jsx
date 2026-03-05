import { Spinner, Container } from "react-bootstrap";

const Loader = ({ message = "Loading..." }) => {
  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "60vh" }}
    >
      <Spinner animation="border" variant="primary" />
      <p className="mt-3 text-muted">{message}</p>
    </Container>
  );
};

export default Loader;
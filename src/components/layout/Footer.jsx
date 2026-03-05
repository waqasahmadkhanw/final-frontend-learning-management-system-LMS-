import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#212529",
        color: "#fff",
        padding: "20px 0",
        marginTop: "auto",
        marginTop: "20px",
      }}
    >
      <Container className="text-center">
        <p className="mb-0">
          © {new Date().getFullYear()} LMS Pro | MERN Stack Final Project | Develpoer : Waqas Ahmad Khan
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
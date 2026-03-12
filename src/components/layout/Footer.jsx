
import { Container, Row, Col, Badge } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg,#111827,#1f2937)",
        color: "#fff",
        marginTop: "auto",
        paddingTop: "40px",
        borderTop: "1px solid rgba(255,255,255,0.08)"
      }}
    >
      <Container>

        <Row className="gy-4 align-items-center">

          {/* Project Info */}
          <Col md={4} className="text-center text-md-start">
            <h5 className="fw-bold mb-2">
              LMS Pro
              <Badge
                bg="primary"
                className="ms-2 px-2 py-1"
                style={{ fontSize: "11px" }}
              >
                MERN
              </Badge>
            </h5>

            <p
              style={{
                fontSize: "14px",
                opacity: "0.75",
                maxWidth: "260px"
              }}
              className="mb-0"
            >
              A modern Learning Management System built with the MERN stack,
              designed for scalable online education.
            </p>
          </Col>

          {/* Contact */}
          <Col md={4} className="text-center">
            <h6 className="fw-bold mb-3">Connect</h6>

            <div className="d-flex justify-content-center gap-4">

              <a
                href="mailto:waqas.ahmad10@gmail.com"
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  transition: "0.3s"
                }}
                className="footer-icon"
              >
                <FaEnvelope />
              </a>

              <a
                href="tel:+923441683991"
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  transition: "0.3s"
                }}
                className="footer-icon"
              >
                <FaPhone />
              </a>

              <a
                href="https://github.com/waqasahmadkhanw?tab=repositories"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  transition: "0.3s"
                }}
                className="footer-icon"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  transition: "0.3s"
                }}
                className="footer-icon"
              >
                <FaLinkedin />
              </a>

            </div>
          </Col>

          {/* Developer */}
          <Col md={4} className="text-center text-md-end">
            <p className="mb-1 fw-semibold">
              © {new Date().getFullYear()} LMS Pro
            </p>

            <p
              style={{ fontSize: "14px", opacity: "0.8" }}
              className="mb-0"
            >
              Developed by:
              <span className="fw-bold ms-1 text-info">
                Waqas Ahmad Khan <br />
               
               MERN stack|| Gen Ai with JS || Devops Engineer
              </span>
              
            </p>
          </Col>

        </Row>

        {/* Divider */}
        <hr
          style={{
            borderColor: "rgba(255,255,255,0.08)",
            margin: "30px 0 15px"
          }}
        />

        {/* Bottom line */}
        <Row>
          <Col className="text-center">
            <p
              style={{
                fontSize: "13px",
                opacity: "0.65"
              }}
              className="mb-2"
            >
              Built for modern learning • Secure • Scalable • Fast
            </p>
          </Col>
        </Row>

      </Container>

      {/* Hover Style */}
      <style>
        {`
          .footer-icon:hover{
            transform: translateY(-3px) scale(1.1);
            color:#60a5fa !important;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;

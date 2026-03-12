
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const About = () => {
  return (
    <Container className="py-5">

      {/* Title */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">About Our Learning Management System</h2>
        <p className="text-muted">
          A modern MERN-stack platform designed to deliver a seamless online
          learning experience for students, instructors, and administrators.
        </p>
      </div>

      {/* Role Sections */}
      <Row className="g-4 mb-5">

        <Col md={4}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              <h5 className="fw-bold mb-3">🎓 For Students</h5>
              <p className="text-muted">
                Students can browse and enroll in courses, track their learning
                progress, and manage their profiles from a clean dashboard.
                Learning becomes organized, engaging, and accessible from any
                device.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              <h5 className="fw-bold mb-3">👨‍🏫 For Instructors</h5>
              <p className="text-muted">
                Instructors can create, edit, and manage courses with lessons,
                upload materials, and interact with students efficiently in a
                structured teaching environment.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              <h5 className="fw-bold mb-3">🛠 For Administrators</h5>
              <p className="text-muted">
                Admins have full control over the system. They manage users,
                oversee courses, and analyze platform activity using analytics
                dashboards with role-based security.
              </p>
            </Card.Body>
          </Card>
        </Col>

      </Row>

      {/* Technology Stack */}
      <Card className="shadow-sm border-0 mb-5">
        <Card.Body>
          <h4 className="fw-bold mb-3">⚙ Technology & Features</h4>

          <div className="mb-3">
            <strong>Frontend:</strong>{" "}
            <Badge bg="primary" className="me-2">React</Badge>
            <Badge bg="primary" className="me-2">React Router</Badge>
            <Badge bg="primary" className="me-2">Axios</Badge>
            <Badge bg="primary">React Bootstrap</Badge>
          </div>

          <div className="mb-3">
            <strong>Backend:</strong>{" "}
            <Badge bg="dark">Node.js</Badge>{" "}
            <Badge bg="dark">Express.js</Badge>
          </div>

          <div className="mb-3">
            <strong>Database:</strong>{" "}
            <Badge bg="success">MongoDB</Badge>{" "}
            <Badge bg="success">Mongoose</Badge>
          </div>

          <div className="mb-3">
            <strong>Security:</strong>{" "}
            <Badge bg="warning" text="dark">JWT Authentication</Badge>{" "}
            <Badge bg="warning" text="dark">Bcrypt Password Hashing</Badge>{" "}
            <Badge bg="warning" text="dark">Role-Based Access</Badge>
          </div>

          <div>
            <strong>Other Features:</strong>{" "}
            <Badge bg="secondary" className="me-2">REST APIs</Badge>
            <Badge bg="secondary" className="me-2">Responsive UI</Badge>
            <Badge bg="secondary">Protected Routes</Badge>
          </div>
        </Card.Body>
      </Card>

      {/* Mission */}
      <Card className="shadow-sm border-0 mb-5">
        <Card.Body>
          <h4 className="fw-bold mb-3"> Our Mission</h4>
          <p className="text-muted">
            Our goal is to bridge the gap between students and instructors by
            providing a secure, scalable, and user-friendly platform for online
            learning. Whether learning new skills or teaching courses, our LMS
            delivers a smooth and professional experience.
          </p>

          <ul className="text-muted">
            <li>Intuitive dashboards for all user roles</li>
            <li>Secure authentication and authorization</li>
            <li>Easy course creation and management</li>
            <li>Accessible on desktop and mobile devices</li>
            <li>Industry-standard MERN architecture</li>
          </ul>
        </Card.Body>
      </Card>

      {/* Submission Section */}
      <Card className="shadow-sm border-0 bg-light">
        <Card.Body className="text-center">
          <h5 className="fw-bold">Submitted By</h5>
          <p className="mb-1">Waqas Ahmad Khan</p>

          <p className="text-muted small">
            I confirm that this project is my own work and I have not copied it
            from any unauthorized source.
          </p>

          <p className="mb-0">
            <strong>Student Name:</strong> waqasahmad <br />
            <strong>Signature:</strong> waqas___ahmad <br />
            <strong>Date:</strong> 10-03-2026
          </p>
        </Card.Body>
      </Card>

    </Container>
  );
};

export default About;
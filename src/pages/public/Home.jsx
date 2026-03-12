
import { useContext } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Badge,
  Card
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ background: "#f8f9fa" }}>

      {/* HERO SECTION */}
      <div
        style={{
          background:
            "linear-gradient(135deg,#1e3c72 0%,#2a5298 100%)",
          color: "white"
        }}
      >
        <Container className="py-5">

          <Row className="align-items-center gy-4">

            <Col md={6}>

              <Badge bg="light" text="dark" className="mb-3 px-3 py-2">
                 Modern LMS Platform
              </Badge>

              <h1 className="fw-bold display-4 mb-3">
                 Dear instructor. note:for admin 
                 Eamil:waqasahmadkhan Password:123456
                 Learn. Build. Grow.
              </h1>

              <p className="fs-5 mb-4">

                {!user
                  ? "A professional Learning Management System built with MERN Stack. Discover courses, learn industry skills, and grow your career."
                  : `Welcome back, ${user.name}! Continue learning and upgrade your skills.`}

              </p>

              <div className="d-flex gap-3 flex-wrap">

                {!user ? (
                  <>
                    <Button
                      as={Link}
                      to="/register"
                      variant="light"
                      size="lg"
                      className="fw-semibold"
                    >
                      Get Started
                    </Button>

                    <Button
                      as={Link}
                      to="/login"
                      variant="outline-light"
                      size="lg"
                    >
                      Login
                    </Button>
                  </>
                ) : (
                  <Button
                    as={Link}
                    to="/courses"
                    variant="light"
                    size="lg"
                  >
                    Browse Courses
                  </Button>
                )}

              </div>

            </Col>

            <Col md={6} className="text-center">

              <img
                src="https://img.freepik.com/free-vector/online-learning-concept-illustration_114360-4765.jpg"
                alt="LMS Learning"
                className="img-fluid"
                style={{
                  maxHeight: "360px",
                  borderRadius: "12px"
                }}
              />

            </Col>

          </Row>

        </Container>
      </div>

      {/* STATS SECTION */}

      <Container className="py-5">

        <Row className="text-center g-4">

          <Col md={3}>
            <Card className="border-0 shadow-sm p-4">
              <h2 className="fw-bold text-primary">100+</h2>
              <p className="text-muted mb-0">Courses</p>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="border-0 shadow-sm p-4">
              <h2 className="fw-bold text-success">5000+</h2>
              <p className="text-muted mb-0">Students</p>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="border-0 shadow-sm p-4">
              <h2 className="fw-bold text-danger">50+</h2>
              <p className="text-muted mb-0">Instructors</p>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="border-0 shadow-sm p-4">
              <h2 className="fw-bold text-warning">24/7</h2>
              <p className="text-muted mb-0">Learning</p>
            </Card>
          </Col>

        </Row>

      </Container>

      {/* FEATURES */}

      <Container className="pb-5">

        <div className="text-center mb-5">

          <h2 className="fw-bold">
            Why Choose Our LMS?
          </h2>

          <p className="text-muted">
            A modern learning platform built with industry
            technologies.
          </p>

        </div>

        <Row className="g-4">

          <Col md={4}>
            <Card className="border-0 shadow-sm h-100 text-center p-4">
              <h3>📚</h3>
              <h5 className="fw-bold">
                Professional Courses
              </h5>
              <p className="text-muted">
                Learn real-world skills from experienced
                instructors.
              </p>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-0 shadow-sm h-100 text-center p-4">
              <h3>🔐</h3>
              <h5 className="fw-bold">
                Secure Platform
              </h5>
              <p className="text-muted">
                JWT authentication and role-based access
                control ensure security.
              </p>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-0 shadow-sm h-100 text-center p-4">
              <h3>📈</h3>
              <h5 className="fw-bold">
                Career Growth
              </h5>
              <p className="text-muted">
                Gain knowledge, improve skills, and advance
                your career.
              </p>
            </Card>
          </Col>

        </Row>

      </Container>

      {/* CTA SECTION */}

      <div
        style={{
          background: "#212529",
          color: "white"
        }}
      >
        <Container className="py-5 text-center">

          <h2 className="fw-bold mb-3">
            Start Your Learning Journey Today
          </h2>

          <p className="mb-4">
            Join thousands of students learning new skills
            online.
          </p>

          <Button
            as={Link}
            to="/courses"
            variant="light"
            size="lg"
          >
            Explore Courses
          </Button>

        </Container>
      </div>

    </div>
  );
};

export default Home;
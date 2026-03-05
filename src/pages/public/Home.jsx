
import { useContext } from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="bg-light">
      <Container className="py-5">

        <Row className="align-items-center gy-4">

          {/* ===== Left Section ===== */}
          <Col md={6}>

            {/* Platform Badge */}
            <Badge bg="dark" className="mb-3 px-3 py-2">
               Modern LMS Platform
            </Badge>

            {/* Hero Title */}
            <h1 className="fw-bold display-5 mb-3">
              Learn Build Grow.
            </h1>

            {/* Personalized Message */}
            <p className="text-muted mb-4 fs-5">
              {!user
                ? "A professional Learning Management System built with the MERN Stack. Discover courses, learn new skills, and grow your career."
                : `Welcome back, ${user.name}! Continue learning and upgrade your skills today.`}
            </p>

            {/* ===== Call-to-Action Buttons ===== */}
            <div className="d-flex gap-3 flex-wrap">
              {!user ? (
                <>
                  <Button as={Link} to="/register" variant="dark" size="lg">
                    Register
                  </Button>
                  <Button as={Link} to="/login" variant="outline-dark" size="lg">
                    Login
                  </Button>
                </>
              ) : (
                <Button as={Link} to="/courses" variant="dark" size="lg">
                  Browse Courses
                </Button>
              )}
            </div>

          </Col>

          {/* ===== Right Section ===== */}
          <Col md={6} className="text-center">
            <img
              src="https://img.freepik.com/free-vector/online-learning-concept-illustration_114360-4765.jpg"
              alt="LMS Learning"
              className="img-fluid hero-img"
            />
          </Col>

        </Row>

      </Container>
    </div>
  );
};

export default Home;
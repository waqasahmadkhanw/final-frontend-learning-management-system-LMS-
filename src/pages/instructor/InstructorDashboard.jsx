
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const InstructorDashboard = ({ user }) => {
  return (
    <Container className="py-5">

      {/* ===== Header Section ===== */}
      <div className="mb-5">
        <h2 className="fw-bold">
          👋 Welcome back, {user?.name}
        </h2>
        <p className="text-muted mb-0">
          Manage your courses and grow your students.
        </p>
      </div>

      {/* ===== Dashboard Cards ===== */}
      <Row className="g-4">

        {/* Create Course */}
        <Col lg={4} md={6}>
          <Card className="shadow-sm border-0 h-100 dashboard-card">
            <Card.Body className="text-center d-flex flex-column">
              <div className="fs-1 mb-3">➕</div>
              <Card.Title className="fw-semibold">
                Create Course
              </Card.Title>
              <Card.Text className="text-muted flex-grow-1">
                Build and publish a new course for your students.
              </Card.Text>
              <Button
                as={Link}
                to="/create-course"
                variant="dark"
              >
                Go to Creator
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Manage Courses */}
        <Col lg={4} md={6}>
          <Card className="shadow-sm border-0 h-100 dashboard-card">
            <Card.Body className="text-center d-flex flex-column">
              <div className="fs-1 mb-3">📚</div>
              <Card.Title className="fw-semibold">
                Manage Courses
              </Card.Title>
              <Card.Text className="text-muted flex-grow-1">
                Edit, update, or delete your existing courses.
              </Card.Text>
              <Button
                as={Link}
                to="/instructor/manage-courses"
                variant="dark"
              >
                Manage Now
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Upload Lessons */}
        <Col lg={4} md={6}>
          <Card className="shadow-sm border-0 h-100 dashboard-card">
            <Card.Body className="text-center d-flex flex-column">
              <div className="fs-1 mb-3">🎥</div>
              <Card.Title className="fw-semibold">
                Upload Lessons
              </Card.Title>
              <Card.Text className="text-muted flex-grow-1">
                Add videos, materials, and lessons to your courses.
              </Card.Text>
              <Button
                as={Link}
                to="/instructor/manage-courses"
                variant="dark"
              >
                Upload Now
              </Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
};

export default InstructorDashboard;

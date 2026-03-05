import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const StudentDashboard = ({ user }) => {
  return (
    <Container className="py-5">
      <h2 className="mb-4">Welcome, {user.name}</h2>
      <Row>
        <Col md={4}>
          <Card className="shadow-sm text-center p-3">
            <Card.Title>My Courses</Card.Title>
            <Card.Text>View all your enrolled courses</Card.Text>
            <Link to="/my-courses" className="btn btn-dark">
              Go
            </Link>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm text-center p-3">
            <Card.Title>Profile</Card.Title>
            <Card.Text>Update your personal details</Card.Text>
            <Link to="/update-user-details" className="btn btn-dark">
              Go
            </Link>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm text-center p-3">
            <Card.Title>Change Password</Card.Title>
            <Card.Text>Secure your account</Card.Text>
            <Link to="/change-password" className="btn btn-dark">
              Go
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentDashboard;
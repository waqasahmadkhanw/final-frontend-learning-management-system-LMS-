// import { Container, Row, Col, Card } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const StudentDashboard = ({ user }) => {
//   return (
//     <Container className="py-5">
//       <h2 className="mb-4">Welcome, {user.name}</h2>
//       <Row>
//         <Col md={4}>
//           <Card className="shadow-sm text-center p-3">
//             <Card.Title>My Courses</Card.Title>
//             <Card.Text>View all your enrolled courses</Card.Text>
//             <Link to="/my-courses" className="btn btn-dark">
//               Go
//             </Link>
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card className="shadow-sm text-center p-3">
//             <Card.Title>Profile</Card.Title>
//             <Card.Text>Update your personal details</Card.Text>
//             <Link to="/update-user-details" className="btn btn-dark">
//               Go
//             </Link>
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card className="shadow-sm text-center p-3">
//             <Card.Title>Change Password</Card.Title>
//             <Card.Text>Secure your account</Card.Text>
//             <Link to="/change-password" className="btn btn-dark">
//               Go
//             </Link>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default StudentDashboard;

import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const StudentDashboard = ({ user }) => {
  return (
    <Container className="py-5">

      {/* Welcome Section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Welcome, {user.name}</h2>
        <p className="text-muted">
          Manage your courses and account settings from your dashboard
        </p>
      </div>

      <Row className="g-4">

        {/* My Courses */}
        <Col md={4}>
          <Card className="border-0 shadow-sm text-center h-100 p-4 rounded-4">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="fw-semibold mb-3">
                My Courses
              </Card.Title>

              <Card.Text className="text-muted flex-grow-1">
                View all your enrolled courses and continue learning.
              </Card.Text>

              <Link
                to="/my-courses"
                className="btn btn-dark mt-3"
              >
                Go
              </Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Profile */}
        <Col md={4}>
          <Card className="border-0 shadow-sm text-center h-100 p-4 rounded-4">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="fw-semibold mb-3">
                Profile
              </Card.Title>

              <Card.Text className="text-muted flex-grow-1">
                Update your personal details and account information.
              </Card.Text>

              <Link
                to="/update-user-details"
                className="btn btn-dark mt-3"
              >
                Go
              </Link>
            </Card.Body>
          </Card>
        </Col>

        {/* Change Password */}
        <Col md={4}>
          <Card className="border-0 shadow-sm text-center h-100 p-4 rounded-4">
            <Card.Body className="d-flex flex-column">
              <Card.Title className="fw-semibold mb-3">
                Change Password
              </Card.Title>

              <Card.Text className="text-muted flex-grow-1">
                Keep your account secure by updating your password.
              </Card.Text>

              <Link
                to="/change-password"
                className="btn btn-dark mt-3"
              >
                Go
              </Link>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
};

export default StudentDashboard;
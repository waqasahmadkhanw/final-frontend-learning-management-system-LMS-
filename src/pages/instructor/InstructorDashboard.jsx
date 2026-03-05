
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
                to={`/instructor/manage-courses/${user?._id}`}
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

// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const DashboardCard = ({ icon, title, text, link, buttonText }) => {
//   return (
//     <Card className="shadow-sm border-0 h-100 dashboard-card">
//       <Card.Body className="text-center d-flex flex-column">
//         <div className="fs-1 mb-3">{icon}</div>

//         <Card.Title className="fw-semibold">
//           {title}
//         </Card.Title>

//         <Card.Text className="text-muted flex-grow-1">
//           {text}
//         </Card.Text>

//         <Button as={Link} to={link} variant="dark">
//           {buttonText}
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// };

// const InstructorDashboard = ({ user }) => {

//   if (!user) return null;

//   return (
//     <Container className="py-5">

//       {/* ===== Header ===== */}
//       <div className="mb-5">
//         <h2 className="fw-bold">
//           👋 Welcome back, {user.name}
//         </h2>
//         <p className="text-muted">
//           Manage your courses and grow your students.
//         </p>
//       </div>

//       {/* ===== Dashboard Cards ===== */}
//       <Row className="g-4">

//         <Col lg={4} md={6}>
//           <DashboardCard
//             icon="➕"
//             title="Create Course"
//             text="Build and publish a new course for your students."
//             link="/create-course"
//             buttonText="Create Now"
//           />
//         </Col>

//         <Col lg={4} md={6}>
//           <DashboardCard
//             icon="📚"
//             title="Manage Courses"
//             text="Edit, update, or delete your existing courses."
//             link={`/instructor/manage-courses/${user._id}`}
//             buttonText="Manage Now"
//           />
//         </Col>

//         <Col lg={4} md={6}>
//           <DashboardCard
//             icon="🎥"
//             title="Upload Lessons"
//             text="Add videos, materials, and lessons to your courses."
//             link="/instructor/create-lesson"
//             buttonText="Upload Now"
//           />
//         </Col>

//       </Row>

//     </Container>
//   );
// };

// export default InstructorDashboard;
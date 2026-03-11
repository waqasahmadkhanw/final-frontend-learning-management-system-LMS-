
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import Loader from "../../components/common/Loader";
// import { getAnalytics } from "../../api/admin.api";

// const AdminDashboard = () => {
//   const [analytics, setAnalytics] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchAnalytics();
//   }, []);

//   const fetchAnalytics = async () => {
//     try {
//       const { data } = await getAnalytics();
//       console.log("dashboard data",data)
//       setAnalytics(data.data);
//     } catch (error) {
//       toast.error("Failed to load analytics");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) return <Loader message="Loading Admin Dashboard..." />;

//   return (
//     <Container fluid className="py-4 px-4">

//       {/* ===== Page Header ===== */}
//       <div className="mb-4">
//         <h3 className="fw-bold">Admin Dashboard</h3>
//         <p className="text-muted">
//           Monitor platform performance and manage system data.
//         </p>
//       </div>

//       {/* ===== Analytics Cards ===== */}
//       <Row className="g-4">

//         <Col md={4}>
//           <Card className="shadow-sm border-0 text-center p-3">
//             <Card.Body>
//               <h6 className="text-muted">Total Users</h6>
//               <h2 className="fw-bold text-primary">
//                 {analytics.totalUsers}
//               </h2>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col md={4}>
//           <Card className="shadow-sm border-0 text-center p-3">
//             <Card.Body>
//               <h6 className="text-muted">Total Courses</h6>
//               <h2 className="fw-bold text-success">
//                 {analytics.totalCourses}
//               </h2>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col md={4}>
//           <Card className="shadow-sm border-0 text-center p-3">
//             <Card.Body>
//               <h6 className="text-muted">Total Enrollments</h6>
//               <h2 className="fw-bold text-danger">
//                 {analytics.totalEnrollments}
//               </h2>
//             </Card.Body>
//           </Card>
//         </Col>

//       </Row>

//       {/* ===== Quick Actions Section ===== */}
//       <Row className="mt-5 g-4">

//         <Col md={4}>
//           <Card className="shadow-sm border-0 p-4 text-center">
//             <h5>Manage Users</h5>
//             <p className="text-muted">
//               View, delete and manage platform users.
//             </p>
//             <Button
//               variant="dark"
//               onClick={() => navigate("/admin/users")}
//             >
//               Go to Users
//             </Button>
//           </Card>
//         </Col>

//         <Col md={4}>
//           <Card className="shadow-sm border-0 p-4 text-center">
//             <h5>Manage Courses</h5>
//             <p className="text-muted">
//               Review and control all courses.
//             </p>
//             <Button
//               variant="dark"
//               onClick={() => navigate("/admin/manage-courses")}
//             >
//               Go to Courses
//             </Button>
//           </Card>
//         </Col>

//         <Col md={4}>
//           <Card className="shadow-sm border-0 p-4 text-center">
//             <h5>Create Instructor</h5>
//             <p className="text-muted">
//               Add new instructors to the platform.
//             </p>
//             <Button
//               variant="dark"
//               onClick={() => navigate("/admin/create-instructor")}
//             >
//               Create Instructor
//             </Button>
//           </Card>
//         </Col>

//       </Row>

//     </Container>
//   );
// };

// export default AdminDashboard;

import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/common/Loader";
import { getAnalytics } from "../../api/admin.api";

const AdminDashboard = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const { data } = await getAnalytics();
      setAnalytics(data.data);
    } catch {
      toast.error("Failed to load analytics");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader message="Loading Admin Dashboard..." />;

  return (
    <div style={{ background: "#f6f8fb", minHeight: "100vh" }}>
      <Container fluid>

        <Row>

          {/* ===== Sidebar ===== */}
          <Col md={2} className="bg-dark text-white vh-100 p-4">

            <h5 className="fw-bold mb-4">Admin Panel</h5>

            <Nav className="flex-column">

              <Nav.Link
                className="text-white mb-2"
                onClick={() => navigate("/admin/dashboard")}
              >
                📊 Dashboard
              </Nav.Link>

              <Nav.Link
                className="text-white mb-2"
                onClick={() => navigate("/admin/users")}
              >
                👥 Users
              </Nav.Link>

              <Nav.Link
                className="text-white mb-2"
                onClick={() => navigate("/admin/manage-courses")}
              >
                📚 Courses
              </Nav.Link>

              <Nav.Link
                className="text-white mb-2"
                onClick={() => navigate("/admin/create-instructor")}
              >
                👨‍🏫 Create Instructor
              </Nav.Link>

            </Nav>

          </Col>

          {/* ===== Main Content ===== */}
          <Col md={10} className="p-4">

            {/* Header */}
            <div className="mb-5">
              <h3 className="fw-bold">📊 Admin Dashboard</h3>
              <p className="text-muted">
                Monitor platform performance and system activity
              </p>
            </div>

            {/* ===== Analytics Cards ===== */}
            <Row className="g-4 mb-5">

              <Col md={4}>
                <Card className="border-0 shadow-lg text-center p-4">
                  <h6 className="text-muted">Total Users</h6>
                  <h2 className="fw-bold text-primary">
                    {analytics.totalUsers}
                  </h2>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="border-0 shadow-lg text-center p-4">
                  <h6 className="text-muted">Total Courses</h6>
                  <h2 className="fw-bold text-success">
                    {analytics.totalCourses}
                  </h2>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="border-0 shadow-lg text-center p-4">
                  <h6 className="text-muted">Total Enrollments</h6>
                  <h2 className="fw-bold text-danger">
                    {analytics.totalEnrollments}
                  </h2>
                </Card>
              </Col>

            </Row>

            {/* ===== Quick Actions ===== */}
            <Row className="g-4">

              <Col md={4}>
                <Card className="border-0 shadow-lg text-center p-4">
                  <div style={{ fontSize: "40px" }}>👥</div>
                  <h5 className="mt-3">Manage Users</h5>
                  <p className="text-muted">
                    View and manage platform users.
                  </p>
                  <Button
                    variant="dark"
                    onClick={() => navigate("/admin/users")}
                  >
                    Go to Users
                  </Button>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="border-0 shadow-lg text-center p-4">
                  <div style={{ fontSize: "40px" }}>📚</div>
                  <h5 className="mt-3">Manage Courses</h5>
                  <p className="text-muted">
                    Review and control courses.
                  </p>
                  <Button
                    variant="dark"
                    onClick={() => navigate("/admin/manage-courses")}
                  >
                    Go to Courses
                  </Button>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="border-0 shadow-lg text-center p-4">
                  <div style={{ fontSize: "40px" }}>👨‍🏫</div>
                  <h5 className="mt-3">Create Instructor</h5>
                  <p className="text-muted">
                    Add instructors to the platform.
                  </p>
                  <Button
                    variant="dark"
                    onClick={() => navigate("/admin/create-instructor")}
                  >
                    Create Instructor
                  </Button>
                </Card>
              </Col>

            </Row>

          </Col>

        </Row>

      </Container>
    </div>
  );
};

export default AdminDashboard;
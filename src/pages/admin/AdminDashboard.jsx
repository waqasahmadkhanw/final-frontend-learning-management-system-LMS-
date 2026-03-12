
// import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
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
//       setAnalytics(data.data);
//     } catch {
//       toast.error("Failed to load analytics");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) return <Loader message="Loading Admin Dashboard..." />;

//   return (
//     <div style={{ background: "#f6f8fb", minHeight: "100vh" }}>
//       <Container fluid>

//         <Row>

//           {/* ===== Sidebar ===== */}
//           <Col md={2} className="bg-dark text-white vh-100 p-4">

//             <h5 className="fw-bold mb-4">Admin Panel</h5>

//             <Nav className="flex-column">

//               <Nav.Link
//                 className="text-white mb-2"
//                 onClick={() => navigate("/admin/dashboard")}
//               >
//                 📊 Dashboard
//               </Nav.Link>

//               <Nav.Link
//                 className="text-white mb-2"
//                 onClick={() => navigate("/admin/users")}
//               >
//                 👥 Users
//               </Nav.Link>

//               <Nav.Link
//                 className="text-white mb-2"
//                 onClick={() => navigate("/admin/manage-courses")}
//               >
//                 📚 Courses
//               </Nav.Link>

//               <Nav.Link
//                 className="text-white mb-2"
//                 onClick={() => navigate("/admin/create-instructor")}
//               >
//                 👨‍🏫 Create Instructor
//               </Nav.Link>

//             </Nav>

//           </Col>

//           {/* ===== Main Content ===== */}
//           <Col md={10} className="p-4">

//             {/* Header */}
//             <div className="mb-5">
//               <h3 className="fw-bold">📊 Admin Dashboard</h3>
//               <p className="text-muted">
//                 Monitor platform performance and system activity
//               </p>
//             </div>

//             {/* ===== Analytics Cards ===== */}
//             <Row className="g-4 mb-5">

//               <Col md={4}>
//                 <Card className="border-0 shadow-lg text-center p-4">
//                   <h6 className="text-muted">Total Users</h6>
//                   <h2 className="fw-bold text-primary">
//                     {analytics.totalUsers}
//                   </h2>
//                 </Card>
//               </Col>

//               <Col md={4}>
//                 <Card className="border-0 shadow-lg text-center p-4">
//                   <h6 className="text-muted">Total Courses</h6>
//                   <h2 className="fw-bold text-success">
//                     {analytics.totalCourses}
//                   </h2>
//                 </Card>
//               </Col>

//               <Col md={4}>
//                 <Card className="border-0 shadow-lg text-center p-4">
//                   <h6 className="text-muted">Total Enrollments</h6>
//                   <h2 className="fw-bold text-danger">
//                     {analytics.totalEnrollments}
//                   </h2>
//                 </Card>
//               </Col>

//             </Row>

//             {/* ===== Quick Actions ===== */}
//             <Row className="g-4">

//               <Col md={4}>
//                 <Card className="border-0 shadow-lg text-center p-4">
//                   <div style={{ fontSize: "40px" }}>👥</div>
//                   <h5 className="mt-3">Manage Users</h5>
//                   <p className="text-muted">
//                     View and manage platform users.
//                   </p>
//                   <Button
//                     variant="dark"
//                     onClick={() => navigate("/admin/users")}
//                   >
//                     Go to Users
//                   </Button>
//                 </Card>
//               </Col>

//               <Col md={4}>
//                 <Card className="border-0 shadow-lg text-center p-4">
//                   <div style={{ fontSize: "40px" }}>📚</div>
//                   <h5 className="mt-3">Manage Courses</h5>
//                   <p className="text-muted">
//                     Review and control courses.
//                   </p>
//                   <Button
//                     variant="dark"
//                     onClick={() => navigate("/admin/manage-courses")}
//                   >
//                     Go to Courses
//                   </Button>
//                 </Card>
//               </Col>

//               <Col md={4}>
//                 <Card className="border-0 shadow-lg text-center p-4">
//                   <div style={{ fontSize: "40px" }}>👨‍🏫</div>
//                   <h5 className="mt-3">Create Instructor</h5>
//                   <p className="text-muted">
//                     Add instructors to the platform.
//                   </p>
//                   <Button
//                     variant="dark"
//                     onClick={() => navigate("/admin/create-instructor")}
//                   >
//                     Create Instructor
//                   </Button>
//                 </Card>
//               </Col>

//             </Row>

//           </Col>

//         </Row>

//       </Container>
//     </div>
//   );
// };

// export default AdminDashboard;
import { Container, Row, Col, Card, Button, Nav, Image } from "react-bootstrap";
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
    <div
      style={{
        background: "linear-gradient(135deg,#f8fafc,#eef2ff)",
        minHeight: "100vh",
      }}
    >
      <Container fluid>
        <Row>

          {/* ===== Sidebar ===== */}
          <Col
            md={2}
            className="vh-100 p-4"
            style={{
              background: "linear-gradient(180deg,#0f172a,#1e293b)",
              color: "#fff",
            }}
          >
            <h5 className="fw-bold mb-4">⚡ Admin Panel</h5>

            <Nav className="flex-column">

              <Nav.Link
                className="text-white mb-2 sidebar-link"
                onClick={() => navigate("/admin/dashboard")}
              >
                📊 Dashboard
              </Nav.Link>

              <Nav.Link
                className="text-white mb-2 sidebar-link"
                onClick={() => navigate("/admin/users")}
              >
                👥 Users
              </Nav.Link>

              <Nav.Link
                className="text-white mb-2 sidebar-link"
                onClick={() => navigate("/admin/manage-courses")}
              >
                📚 Courses
              </Nav.Link>

              <Nav.Link
                className="text-white mb-2 sidebar-link"
                onClick={() => navigate("/admin/create-instructor")}
              >
                👨‍🏫 Create Instructor
              </Nav.Link>

            </Nav>
          </Col>

          {/* ===== Main Content ===== */}
          <Col md={10} className="p-5">

            {/* ===== Hero Header ===== */}
            <Card
              className="border-0 shadow-lg mb-5"
              style={{
                background: "linear-gradient(135deg,#4f46e5,#6366f1)",
                color: "white",
                borderRadius: "16px",
              }}
            >
              <Card.Body className="d-flex justify-content-between align-items-center">

                <div>
                  <h5 className="fw-light mb-1">👋 Welcome Back, Admin</h5>

                  <h3 className="fw-bold">Admin Dashboard</h3>

                  <p className="opacity-75 mb-0">
                    Monitor platform performance and manage LMS operations.
                  </p>
                </div>

                {/* <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                  width={80}
                  rounded
                /> */}

              </Card.Body>
            </Card>

            {/* ===== Analytics Cards ===== */}
            <Row className="g-4 mb-5">

              <Col md={4}>
                <Card className="border-0 shadow-lg text-center p-4 dashboard-card">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    width={60}
                    className="mb-3 mx-auto"
                  />
                  <h6 className="text-muted">Total Users</h6>
                  <h2 className="fw-bold text-primary">
                    {analytics.totalUsers}
                  </h2>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="border-0 shadow-lg text-center p-4 dashboard-card">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
                    width={60}
                    className="mb-3 mx-auto"
                  />
                  <h6 className="text-muted">Total Courses</h6>
                  <h2 className="fw-bold text-success">
                    {analytics.totalCourses}
                  </h2>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="border-0 shadow-lg text-center p-4 dashboard-card">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
                    width={60}
                    className="mb-3 mx-auto"
                  />
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
                <Card className="border-0 shadow-lg text-center p-4 dashboard-card">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                    width={70}
                    className="mb-3 mx-auto"
                  />
                  <h5 className="fw-bold">Manage Users</h5>
                  <p className="text-muted">
                    View and manage platform users.
                  </p>
                  <Button
                    variant="dark"
                    className="rounded-pill px-4"
                    onClick={() => navigate("/admin/users")}
                  >
                    Go to Users
                  </Button>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="border-0 shadow-lg text-center p-4 dashboard-card">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
                    width={70}
                    className="mb-3 mx-auto"
                  />
                  <h5 className="fw-bold">Manage Courses</h5>
                  <p className="text-muted">
                    Review and control courses.
                  </p>
                  <Button
                    variant="dark"
                    className="rounded-pill px-4"
                    onClick={() => navigate("/admin/manage-courses")}
                  >
                    Go to Courses
                  </Button>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="border-0 shadow-lg text-center p-4 dashboard-card">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
                    width={70}
                    className="mb-3 mx-auto"
                  />
                  <h5 className="fw-bold">Create Instructor</h5>
                  <p className="text-muted">
                    Add instructors to the platform.
                  </p>
                  <Button
                    variant="dark"
                    className="rounded-pill px-4"
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

      {/* ===== UI Effects ===== */}
      <style>
        {`
        .dashboard-card{
          transition:0.25s;
          border-radius:16px;
        }

        .dashboard-card:hover{
          transform:translateY(-8px);
          box-shadow:0 20px 40px rgba(0,0,0,0.15);
        }

        .sidebar-link:hover{
          background:rgba(255,255,255,0.1);
          border-radius:6px;
          padding-left:10px;
          transition:0.2s;
        }
        `}
      </style>
    </div>
  );
};

export default AdminDashboard;



import { Container, Row, Col, Card, Button } from "react-bootstrap";
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
      console.log("dashboard data",data)
      setAnalytics(data.data);
    } catch (error) {
      toast.error("Failed to load analytics");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader message="Loading Admin Dashboard..." />;

  return (
    <Container fluid className="py-4 px-4">

      {/* ===== Page Header ===== */}
      <div className="mb-4">
        <h3 className="fw-bold">Admin Dashboard</h3>
        <p className="text-muted">
          Monitor platform performance and manage system data.
        </p>
      </div>

      {/* ===== Analytics Cards ===== */}
      <Row className="g-4">

        <Col md={4}>
          <Card className="shadow-sm border-0 text-center p-3">
            <Card.Body>
              <h6 className="text-muted">Total Users</h6>
              <h2 className="fw-bold text-primary">
                {analytics.totalUsers}
              </h2>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm border-0 text-center p-3">
            <Card.Body>
              <h6 className="text-muted">Total Courses</h6>
              <h2 className="fw-bold text-success">
                {analytics.totalCourses}
              </h2>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow-sm border-0 text-center p-3">
            <Card.Body>
              <h6 className="text-muted">Total Enrollments</h6>
              <h2 className="fw-bold text-danger">
                {analytics.totalEnrollments}
              </h2>
            </Card.Body>
          </Card>
        </Col>

      </Row>

      {/* ===== Quick Actions Section ===== */}
      <Row className="mt-5 g-4">

        <Col md={4}>
          <Card className="shadow-sm border-0 p-4 text-center">
            <h5>Manage Users</h5>
            <p className="text-muted">
              View, delete and manage platform users.
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
          <Card className="shadow-sm border-0 p-4 text-center">
            <h5>Manage Courses</h5>
            <p className="text-muted">
              Review and control all courses.
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
          <Card className="shadow-sm border-0 p-4 text-center">
            <h5>Create Instructor</h5>
            <p className="text-muted">
              Add new instructors to the platform.
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

    </Container>
  );
};

export default AdminDashboard;
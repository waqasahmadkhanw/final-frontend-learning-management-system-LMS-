
import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import Loader from "../../components/common/Loader";
import { getAnalytics } from "../../api/admin.api";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const Analytics = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getAnalytics();
      setData(res.data.data);
    } catch {
      toast.error("Failed to fetch analytics");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader message="Loading analytics..." />;

  // Example chart data (you can replace with backend data later)
  const chartData = [
    { name: "Jan", users: 20, courses: 5, enrollments: 30 },
    { name: "Feb", users: 40, courses: 8, enrollments: 60 },
    { name: "Mar", users: 60, courses: 12, enrollments: 100 },
    { name: "Apr", users: 80, courses: 16, enrollments: 140 },
    { name: "May", users: 120, courses: 20, enrollments: 200 }
  ];

  return (
    <div style={{ background: "#f6f8fb", minHeight: "100vh" }}>
      <Container className="py-5">

        {/* Header */}
        <div className="mb-5 text-center">
          <h3 className="fw-bold">📊 Platform Analytics</h3>
          <p className="text-muted">
            Monitor platform growth and performance
          </p>
        </div>

        {/* ===== Analytics Cards ===== */}
        <Row className="g-4 mb-5">

          <Col md={4}>
            <Card className="border-0 shadow-lg text-center p-4 rounded-4">
              <div style={{ fontSize: "40px" }}>👥</div>
              <h6 className="text-muted mt-2">Total Users</h6>
              <h2 className="fw-bold text-primary">
                {data.totalUsers}
              </h2>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-0 shadow-lg text-center p-4 rounded-4">
              <div style={{ fontSize: "40px" }}>📚</div>
              <h6 className="text-muted mt-2">Total Courses</h6>
              <h2 className="fw-bold text-success">
                {data.totalCourses}
              </h2>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-0 shadow-lg text-center p-4 rounded-4">
              <div style={{ fontSize: "40px" }}>🎓</div>
              <h6 className="text-muted mt-2">Total Enrollments</h6>
              <h2 className="fw-bold text-danger">
                {data.totalEnrollments}
              </h2>
            </Card>
          </Col>

        </Row>

        {/* ===== Charts Section ===== */}

        <Row className="g-4">

          <Col md={12}>
            <Card className="border-0 shadow-lg rounded-4 p-4">
              <h5 className="mb-4">User Growth</h5>

              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <Line type="monotone" dataKey="users" stroke="#4e73df" />
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>

            </Card>
          </Col>

          <Col md={12}>
            <Card className="border-0 shadow-lg rounded-4 p-4">
              <h5 className="mb-4">Course Growth</h5>

              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <Line type="monotone" dataKey="courses" stroke="#1cc88a" />
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>

            </Card>
          </Col>

          <Col md={12}>
            <Card className="border-0 shadow-lg rounded-4 p-4">
              <h5 className="mb-4">Enrollments Growth</h5>

              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <Line type="monotone" dataKey="enrollments" stroke="#e74a3b" />
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>

            </Card>
          </Col>

        </Row>

      </Container>
    </div>
  );
};

export default Analytics;
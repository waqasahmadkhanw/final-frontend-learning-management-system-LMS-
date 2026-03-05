import { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
// import { getAnalytics } from "../../api/admin.api";
import { toast } from "react-toastify";
import Loader from "../../components/common/Loader";
import { getAnalytics } from "../../api/admin.api";

const Analytics = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getAnalytics();
      console.log("get analytics data",res)
      setData(res.data.data);
    } catch {
      toast.error("Failed to fetch analytics");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader message="Loading analytics..." />;

  return (
    <Container className="py-5">
      <Card className="shadow p-4 text-center">
        <h4>Platform Overview</h4>
        <p>Total Users: {data.totalUsers}</p>
        <p>Total Courses: {data.totalCourses}</p>
        <p>Total Enrollments: {data.totalEnrollments}</p>
      </Card>
    </Container>
  );
};

export default Analytics;
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { getAllCourses, deleteCourse } from "../../api/course.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/common/Loader";

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const { data } = await getAllCourses();
      console.log("courses data",data.data)
      setCourses(data.data);
    } catch {
      toast.error("Failed to fetch courses");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await deleteCourse(id);
      toast.success("Course deleted");
      fetchCourses();
    } catch {
      toast.error("Delete failed");
    }
  };

  if (loading) return <Loader message="Loading courses..." />;

  return (
    <Container className="py-5">
      <h3 className="mb-4">Manage Courses</h3>
      <Row>
        {courses.map((course) => (
          <Col md={4} key={course._id} className="mb-3">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>
                  {course.description.substring(0, 80)}...
                </Card.Text>
                <Button
                  variant="dark"
                  className="me-2"
                  onClick={() => navigate(`/instructor/edit-course//${course._id}`)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(course._id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ManageCourses;
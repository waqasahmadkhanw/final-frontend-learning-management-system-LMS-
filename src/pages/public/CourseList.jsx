
import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Alert,
  Badge
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllCourses } from "../../api/course.api";
import Loader from "../../components/common/Loader";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);

      const response = await getAllCourses();
      const courseData = response?.data?.data || [];

      setCourses(courseData);
    } catch (err) {
      console.error("Fetch Courses Error:", err);
      setError("Failed to fetch courses");
      toast.error("Failed to fetch courses");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader message="Loading courses..." />;

  if (error)
    return (
      <Container className="py-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );

  return (
    <Container className="py-5">

      {/* ===== Header ===== */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">📚 All Courses</h2>
        <Badge bg="secondary">{courses.length} Courses</Badge>
      </div>

      {courses.length === 0 ? (
        <Alert variant="info">
          No courses available at the moment.
        </Alert>
      ) : (
        <Row className="g-4">

          {courses.map((course) => (

            <Col lg={4} md={6} key={course._id}>
              <Card className="course-card border-0 shadow-sm h-100">

                <Card.Body className="d-flex flex-column">

                  {/* Course Title */}
                  <Card.Title className="fw-semibold mb-2">
                    {course.title}
                  </Card.Title>

                  {/* Description */}
                  <Card.Text className="text-muted flex-grow-1">
                    {course.description
                      ? course.description.length > 90
                        ? course.description.substring(0, 90) + "..."
                        : course.description
                      : "No description available."}
                  </Card.Text>

                  {/* Instructor */}
                  <div className="mb-2">
                    <small className="text-muted">
                      Instructor:{" "}
                      <strong>
                        {course.instructor?.name || "Unknown"}
                      </strong>
                    </small>
                  </div>

                  {/* Price */}
                  <div className="mb-3">
                    <span className="fw-bold text-primary">
                      Rs. {course.price || 0}
                    </span>
                  </div>

                  {/* Button */}
                  <Button
                    as={Link}
                    to={`/courses/${course._id}`}
                    variant="dark"
                    size="sm"
                    className="mt-auto"
                  >
                    View Details
                  </Button>

                </Card.Body>
              </Card>
            </Col>

          ))}

        </Row>
      )}
    </Container>
  );
};

export default CourseList;
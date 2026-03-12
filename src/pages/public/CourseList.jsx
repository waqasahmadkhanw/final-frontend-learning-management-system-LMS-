
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
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      </Container>
    );

  return (
    <Container className="py-5">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h2 className="fw-bold">📚 Explore Courses</h2>
        <Badge bg="dark" className="px-3 py-2 rounded-pill">
          {courses.length} Courses
        </Badge>
      </div>

      {courses.length === 0 ? (
        <Alert variant="info" className="text-center">
          No courses available at the moment.
        </Alert>
      ) : (
        <Row className="g-4">

          {courses.map((course) => (

            <Col lg={4} md={6} key={course._id}>

              <Card
                className="border-0 shadow-sm h-100 rounded-4"
                style={{
                  transition: "all 0.3s ease",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform =
                    "translateY(-6px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform =
                    "translateY(0px)")
                }
              >

                {/* Course Image */}
                <Card.Img
                  variant="top"
                  src={
                    course.image ||
                    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                  }
                  style={{
                    height: "180px",
                    objectFit: "cover"
                  }}
                />

                <Card.Body className="d-flex flex-column p-4">

                  {/* Category */}
                  <div className="mb-2">
                    <Badge bg="primary">
                      {course.category || "General"}
                    </Badge>
                  </div>

                  {/* Title */}
                  <Card.Title className="fw-bold">
                    {course.title}
                  </Card.Title>

                  {/* Description */}
                  <Card.Text
                    className="text-muted flex-grow-1"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {course.description
                      ? course.description.length > 100
                        ? course.description.substring(0, 100) + "..."
                        : course.description
                      : "No description available."}
                  </Card.Text>

                  {/* Instructor */}
                  <div className="mb-2">
                    <small className="text-muted">
                      👨‍🏫 Instructor:
                      <strong className="ms-1">
                        {course.instructor?.name || "Unknown"}
                      </strong>
                    </small>
                  </div>

                  {/* Price + Button */}
                  <div className="d-flex justify-content-between align-items-center mt-3">

                    <span className="fw-bold text-success fs-5">
                      Rs. {course.price || 0}
                    </span>

                    <Button
                      as={Link}
                      to={`/courses/${course._id}`}
                      variant="dark"
                      size="sm"
                      className="rounded-pill px-3"
                    >
                      View Details →
                    </Button>

                  </div>

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
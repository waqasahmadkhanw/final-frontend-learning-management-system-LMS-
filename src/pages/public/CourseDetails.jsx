
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Card,
  Button,
  Alert,
  Row,
  Col,
  Badge
} from "react-bootstrap";
import { toast } from "react-toastify";
import { getCourseById } from "../../api/course.api";
import { enrollCourse } from "../../api/enrollment.api";
import Loader from "../../components/common/Loader";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [enrolling, setEnrolling] = useState(false);

  useEffect(() => {
    fetchCourse();
  }, [id]);

  const fetchCourse = async () => {
    try {
      setLoading(true);
      const response = await getCourseById(id);

      const courseData = response?.data?.data || null;

      if (!courseData) {
        setError("Course not found");
        return;
      }

      setCourse(courseData);
    } catch (err) {
      console.error("Fetch Course Error:", err);
      setError("Failed to load course");
      toast.error("Course not found");
    } finally {
      setLoading(false);
    }
  };

  const handleEnroll = async () => {
    if (!course?._id) return;

    try {
      setEnrolling(true);
      await enrollCourse(course._id);
      toast.success("Successfully enrolled!");
    } catch (err) {
      console.error("Enroll Error:", err);
      toast.error(
        "Enrollment failed. You are not authorized or already enrolled."
      );
    } finally {
      setEnrolling(false);
    }
  };

  if (loading) return <Loader message="Loading course..." />;

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

      <Row className="justify-content-center">

        <Col md={10} lg={8}>

          <Card className="shadow-lg border-0 rounded-4">

            <Card.Body className="p-5">

              {/* Title */}
              <h2 className="fw-bold mb-3">
                {course?.title || "Untitled Course"}
              </h2>

              {/* Instructor + Category */}
              <div className="mb-3 d-flex gap-2">

                <Badge bg="primary">
                  Instructor: {course?.instructor?.name || "Unknown"}
                </Badge>

                <Badge bg="secondary">
                  {course?.category || "General"}
                </Badge>

                <Badge bg="success">
                  Rs. {course?.price || "Free"}
                </Badge>

              </div>

              <hr />

              {/* Description */}
              <div className="mb-4">

                <h5 className="fw-semibold mb-3">
                  Course Description
                </h5>

                <p
                  className="text-muted"
                  style={{ lineHeight: "1.7" }}
                >
                  {course?.description ||
                    "No description available."}
                </p>

              </div>

              {/* Enroll Button */}
              <div className="d-flex justify-content-end">

                <Button
                  variant="success"
                  size="lg"
                  onClick={handleEnroll}
                  disabled={enrolling}
                  className="px-5 rounded-pill fw-semibold"
                >
                  {enrolling ? "Enrolling..." : "Enroll Now"}
                </Button>

              </div>

            </Card.Body>

          </Card>

        </Col>

      </Row>

    </Container>
  );
};

export default CourseDetails;


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Button, Alert, Row, Col } from "react-bootstrap";
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
      console.log("course by id", response);

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
      toast.error("Enrollment failed .You are not authorized to enroll or Your already have this course");
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
        <Col md={8} lg={7}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body className="p-5">

              {/* Course Title */}
              <h2 className="fw-bold mb-3">
                {course?.title || "Untitled Course"}
              </h2>

              <hr />

              {/* Description */}
              <p className="text-muted mb-4" style={{ lineHeight: "1.7" }}>
                {course?.description || "No description available."}
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: "1.7" }}>
               Rs. {course?.price || "No description available."}
              </p>
    
              {/* Enroll Button */}
              <div className="d-flex justify-content-end">
                <Button
                  variant="success"
                  size="lg"
                  onClick={handleEnroll}
                  disabled={enrolling}
                  className="px-4"
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

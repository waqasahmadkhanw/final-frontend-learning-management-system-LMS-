
import { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import { Container, Card, Button, Alert } from "react-bootstrap";
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
      console.log("courese by id",response)

      // Handle API response safely
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
      toast.error("Enrollment failed");
    } finally {
      setEnrolling(false);
    }
  };

  if (loading) return <Loader message="Loading course..." />;

  if (error)
    return (
      <Container className="py-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );

  return (
    <Container className="py-5">
      <Card className="shadow">
        <Card.Body>
          <Card.Title className="fw-bold">{course?.title || "Untitled Course"}</Card.Title>
          <Card.Text>{course?.description || "No description available."}</Card.Text>
          <Button
            variant="success"
            onClick={handleEnroll}
            disabled={enrolling}
          >
            {enrolling ? "Enrolling..." : "Enroll Now"}
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CourseDetails;





import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/common/Loader";
import { deleteCourse, getAllCourses, getInstructorCourses, } from "../../api/course.api";

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  // Fetch Instructor Courses
  const fetchCourses = async () => {
    setLoading(true);

    try {
      const response = await getAllCourses();

      const instructorCourses = response?.data?.data || [];

      setCourses(instructorCourses);

    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch instructor courses");
    } finally {
      setLoading(false);
    }
  };

  // Delete Course
  const handleDelete = async (courseId) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    try {
      await deleteCourse(courseId);

      toast.success("Course deleted successfully");

      // Update state without refetch
      setCourses((prevCourses) =>
        prevCourses.filter((course) => course._id !== courseId)
      );

    } catch (error) {
      console.error(error);
      toast.error("Failed to delete course");
    }
  };

  if (loading) return <Loader message="Loading courses..." />;

  return (
    <Container className="py-5">

      <h3 className="mb-4">Manage Courses</h3>

      {/* If Instructor Has No Courses */}
      {courses.length === 0 ? (

        <div className="text-center py-5">
          <h5>No courses found</h5>

          <p className="text-muted">
            You haven't created any courses yet.
          </p>

          <Button
            variant="dark"
            onClick={() => navigate("/create-course")}
          >
            Create Your First Course
          </Button>
        </div>

      ) : (

        <Row>
          {courses.map((course) => (
            <Col md={4} key={course._id} className="mb-3">

              <Card className="shadow-sm h-100">

                {/* {course.thumbnail && (
                  <Card.Img
                    variant="top"
                    src={course.thumbnail}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                )} */}

                <Card.Body>

                  <Card.Title>
                    {course.title}
                  </Card.Title>

                  <Card.Text>
                    {course.description?.substring(0, 80)}...
                  </Card.Text>

                  <Button
                    variant="dark"
                    className="me-2"
                    onClick={() =>
                      navigate(`/instructor/edit-course/${course._id}`)
                    }
                  >
                    Edit
                  </Button>

                  <Button
                    variant="secondary"
                    className="me-2"
                    onClick={() =>
                      navigate(`/lessons/create-lesson/${course._id}`)
                    }
                  >
                    Add Lesson
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

      )}

    </Container>
  );
};

export default ManageCourses;
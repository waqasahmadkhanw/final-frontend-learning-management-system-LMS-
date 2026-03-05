import { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getLessonsByCourse, deleteLesson } from "../../api/lesson.api";
import { toast } from "react-toastify";
import Loader from "../../components/common/Loader";

const ManageLessons = () => {
  const { courseId } = useParams();
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLessons();
  }, []);

  const fetchLessons = async () => {
    try {
      const { data } = await getLessonsByCourse(courseId);
      setLessons(data.data);
    } catch {
      toast.error("Failed to load lessons");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this lesson?")) return;

    try {
      await deleteLesson(id);
      toast.success("Lesson deleted");
      fetchLessons();
    } catch {
      toast.error("Delete failed");
    }
  };

  if (loading) return <Loader message="Loading lessons..." />;

  return (
    <Container className="py-5">
      <h3>Manage Lessons</h3>
      {lessons.map((lesson) => (
        <Card key={lesson._id} className="mb-3 shadow-sm">
          <Card.Body>
            <Card.Title>{lesson.title}</Card.Title>
            <Button
              variant="danger"
              onClick={() => handleDelete(lesson._id)}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default ManageLessons;
import { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/common/Loader";
import { getLessonById } from "../../api/lesson.api";

const LessonDetails = () => {
  const { id } = useParams();
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLesson();
  }, []);

  const fetchLesson = async () => {
    try {
      const { data } = await getLessonById(id);
      console.log("geettted data",data.data)
      setLesson(data.data);
    } catch {
      toast.error("Failed to load lesson");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader message="Loading lesson..." />;
  if (!lesson) return null;

  return (
    <Container className="py-5">
      <Card className="shadow">
        <Card.Body>
          <Card.Title>{lesson.title}</Card.Title>
          <Card.Text>{lesson.content}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LessonDetails;
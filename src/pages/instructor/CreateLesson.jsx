import { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { createLesson } from "../../api/lesson.api";
import { toast } from "react-toastify";

const CreateLesson = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createLesson({ ...formData, course: courseId });
      toast.success("Lesson created successfully!");
      navigate("/instructor/manage-courses");
    } catch (error) {
      toast.error(error.response?.data?.message || "Creation failed");
    }
  };

  return (
    <Container className="py-5">
      <Card className="shadow mx-auto" style={{ maxWidth: "600px" }}>
        <Card.Body>
          <h4>Create Lesson</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              className="mb-3"
              placeholder="Lesson Title"
              name="title"
              onChange={handleChange}
              required
            />
            <Form.Control
              as="textarea"
              rows={4}
              className="mb-3"
              placeholder="Lesson Content"
              name="content"
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="dark" className="w-100">
              Create Lesson
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CreateLesson;
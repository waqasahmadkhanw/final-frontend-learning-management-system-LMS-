import { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import { createCourse } from "../../api/course.api";
import { useNavigate } from "react-router-dom";

const CreateCourse = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCourse(formData);
      console.log("creation course ",formData)
      toast.success("Course created successfully!");
      navigate("/manage-courses");
    } catch (error) {
      toast.error(error.response?.data?.message || "Creation failed");
    }
  };

  return (
    <Container className="py-5">
      <Card className="shadow mx-auto" style={{ maxWidth: "600px" }}>
        <Card.Body>
          <h4 className="mb-3">Create Course</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              className="mb-3"
              placeholder="Title"
              name="title"
              onChange={handleChange}
              required
            />
            <Form.Control
              className="mb-3"
              placeholder="Description"
              name="description"
              onChange={handleChange}
              as="textarea"
              rows={3}
              required
            />
            <Form.Control
              className="mb-3"
              placeholder="Category"
              name="category"
              onChange={handleChange}
              required
            />
            <Form.Control
              className="mb-3"
              placeholder="Price"
              name="price"
              type="number"
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="dark" className="w-100">
              Create
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CreateCourse;
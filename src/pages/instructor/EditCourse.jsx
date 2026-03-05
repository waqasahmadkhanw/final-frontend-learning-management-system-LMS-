import { useEffect, useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
// import { getSingleCourse, updateCourse } from "../../api/course.api";
import { toast } from "react-toastify";
import Loader from "../../components/common/Loader";
import { getCourseById, updateCourse } from "../../api/course.api";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
  });

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {
      const { data } = await getCourseById(id);
      setFormData(data.data);
    } catch (error) {
      toast.error("Failed to load course");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCourse(id, formData);
      toast.success("Course updated successfully!");
      navigate("/instructor/manage-courses");
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    }
  };

  if (loading) return <Loader message="Loading course..." />;

  return (
    <Container className="py-5">
      <Card className="shadow mx-auto" style={{ maxWidth: "600px" }}>
        <Card.Body>
          <h4>Edit Course</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              className="mb-3"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <Form.Control
              as="textarea"
              rows={3}
              className="mb-3"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <Form.Control
              className="mb-3"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            />
            <Form.Control
              type="number"
              className="mb-3"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="dark" className="w-100">
              Update Course
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EditCourse;
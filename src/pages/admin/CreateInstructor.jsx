
import { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { createInstructor } from "../../api/admin.api"; // ✅ correct import
import { toast } from "react-toastify";

const CreateInstructor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createInstructor(formData); // ✅ correct function call
      toast.success("Instructor created successfully");
      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      toast.error(error.response?.data?.message || "Creation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <Card className="shadow mx-auto" style={{ maxWidth: "500px" }}>
        <Card.Body>
          <h4 className="mb-4">Create Instructor</h4>

          <Form onSubmit={handleSubmit}>
            <Form.Control
              className="mb-3"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <Form.Control
              className="mb-3"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <Form.Control
              className="mb-3"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <Button
              type="submit"
              variant="dark"
              className="w-100"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Instructor"}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CreateInstructor;
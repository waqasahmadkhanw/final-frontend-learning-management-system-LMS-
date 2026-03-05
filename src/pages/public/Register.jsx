import { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import { registerUser } from "../../api/user.api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      console.log("register user data",formData)
      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <Container className="py-5">
      <Card className="shadow mx-auto" style={{ maxWidth: "400px" }}>
        <Card.Body>
          <h4 className="mb-3">Register</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              className="mb-3"
              placeholder="Full Name"
              name="name"
              onChange={handleChange}
              required
            />
            <Form.Control
              className="mb-3"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              required
            />
            <Form.Control
              className="mb-3"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="dark" className="w-100">
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;
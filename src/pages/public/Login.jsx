
import { useState, useContext } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import { loginUser } from "../../api/user.api";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser(formData);
      setUser(data.user);
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <Container className="py-5">
      <Card className="shadow mx-auto" style={{ maxWidth: "400px" }}>
        <Card.Body>
          <h4 className="mb-3">Login</h4>
          <Form onSubmit={handleSubmit}>
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
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
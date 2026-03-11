// import { useState } from "react";
// import { Container, Form, Button, Card } from "react-bootstrap";
// import { toast } from "react-toastify";
// import { registerUser } from "../../api/user.api";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerUser(formData);
//       console.log("register user data",formData)
//       toast.success("Registration successful!");
//       navigate("/login");
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <Container className="py-5">
//       <Card className="shadow mx-auto" style={{ maxWidth: "400px" }}>
//         <Card.Body>
//           <h4 className="mb-3">Register</h4>
//           <Form onSubmit={handleSubmit}>
//             <Form.Control
//               className="mb-3"
//               placeholder="Full Name"
//               name="name"
//               onChange={handleChange}
//               required
//             />
//             <Form.Control
//               className="mb-3"
//               type="email"
//               placeholder="Email"
//               name="email"
//               onChange={handleChange}
//               required
//             />
//             <Form.Control
//               className="mb-3"
//               type="password"
//               placeholder="Password"
//               name="password"
//               onChange={handleChange}
//               required
//             />
//             <Button type="submit" variant="dark" className="w-100">
//               Register
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default Register;
import { useState } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Row,
  Col,
  InputGroup
} from "react-bootstrap";
import { toast } from "react-toastify";
import { registerUser } from "../../api/user.api";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await registerUser(formData);

      toast.success("Registration successful!");

      navigate("/login");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Registration failed"
      );

    }

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#1e3c72 0%,#2a5298 100%)",
        display: "flex",
        alignItems: "center"
      }}
    >

      <Container>

        <Row className="shadow-lg rounded-4 overflow-hidden bg-white">

          {/* LEFT SIDE - IMAGE / INFO */}

          <Col
            md={6}
            className="d-none d-md-flex flex-column justify-content-center align-items-center text-center p-5"
            style={{
              background:
                "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
              color: "white"
            }}
          >

            <h2 className="fw-bold mb-3">
              Join Our LMS Platform
            </h2>

            <p className="mb-4">
              Start learning today and upgrade your
              professional skills with industry-level courses.
            </p>

            <img
              src="https://img.freepik.com/free-vector/online-learning-concept-illustration_114360-4765.jpg"
              alt="Learning"
              className="img-fluid"
              style={{ maxHeight: "260px" }}
            />

          </Col>

          {/* RIGHT SIDE - FORM */}

          <Col md={6} className="p-5">

            <div className="mb-4 text-center">

              <h3 className="fw-bold">
                Create Account
              </h3>

              <p className="text-muted mb-0">
                Register to start learning
              </p>

            </div>

            <Form onSubmit={handleSubmit}>

              <Form.Group className="mb-3">

                <Form.Label>Full Name</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </Form.Group>

              <Form.Group className="mb-3">

                <Form.Label>Email</Form.Label>

                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </Form.Group>

              <Form.Group className="mb-4">

                <Form.Label>Password</Form.Label>

                <InputGroup>

                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />

                  <Button
                    variant="outline-secondary"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>

                </InputGroup>

              </Form.Group>

              <Button
                type="submit"
                variant="dark"
                className="w-100 py-2 fw-semibold"
              >
                Register
              </Button>

            </Form>

            <div className="text-center mt-4">

              <small className="text-muted">
                Already have an account?
              </small>

              <br />

              <Link
                to="/login"
                className="fw-semibold text-decoration-none"
              >
                Login here
              </Link>

            </div>

          </Col>

        </Row>

      </Container>

    </div>

  );

};

export default Register;
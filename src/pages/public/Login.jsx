
// import { useState, useContext } from "react";
// import { Container, Form, Button, Card } from "react-bootstrap";
// import { toast } from "react-toastify";
// import { loginUser } from "../../api/user.api";
// import { AuthContext } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const { setUser } = useContext(AuthContext);

//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   // handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.email || !formData.password) {
//       return toast.error("Please fill all fields");
//     }

//     try {
//       setLoading(true);

//       const { data } = await loginUser(formData);

//       // set logged in user
//       setUser(data?.user);

//       toast.success("Login successful!");

//       // redirect to home
//       navigate("/");
//     } catch (error) {
//       toast.error(
//         error?.response?.data?.message || "Login failed. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container className="py-5">
//       <Card className="shadow mx-auto" style={{ maxWidth: "400px" }}>
//         <Card.Body>

//           <h4 className="mb-4 text-center fw-bold">Login</h4>

//           <Form onSubmit={handleSubmit}>

//             <Form.Control
//               className="mb-3"
//               type="email"
//               placeholder="Enter your email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />

//             <Form.Control
//               className="mb-3"
//               type="password"
//               placeholder="Enter your password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />

//             <Button
//               type="submit"
//               variant="dark"
//               className="w-100"
//               disabled={loading}
//             >
//               {loading ? "Logging in..." : "Login"}
//             </Button>

//           </Form>

//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default Login;

//------ IMPROVED LOGICAL CODE FOR PRODUTCION-------//
import { useState, useContext } from "react";
import { Container, Form, Button, Card, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { loginUser } from "../../api/user.api";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // ===============================
  // Handle input change
  // ===============================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ===============================
  // Handle login submit
  // ===============================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return toast.error("Please fill all fields");
    }

    try {

      setLoading(true);

      const response = await loginUser(formData);
      const data = response?.data;

      console.log("Login API response:", data);

      // Validate response
      if (!data?.data) {
        throw new Error("Invalid server response");
      }

      const user = data.data.user;
      const accessToken = data.data.accessToken;

      // Save token for Axios interceptor
      if (accessToken) {
        localStorage.setItem("accessToken",accessToken));
      }

      // Save user to context
      setUser(user);

      toast.success(data.message || "Login successful!");

      // ===============================
      // Role based navigation
      // ===============================

      const routes = {
        admin: "/admin/dashboard",
        instructor: "/instructor/dashboard",
        student: "/",
      };

      navigate(routes[user?.role] || "/");

    } catch (error) {

      console.error("Login Error:", error);

      toast.error(
        error?.response?.data?.message ||
        error?.message ||
        "Login failed. Please try again."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <Container className="py-5">

      <Card className="shadow mx-auto" style={{ maxWidth: "420px" }}>
        <Card.Body>

          <h4 className="mb-4 text-center fw-bold">
            Login to your account
          </h4>

          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button
              type="submit"
              variant="dark"
              className="w-100"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner
                    animation="border"
                    size="sm"
                    className="me-2"
                  />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </Button>

          </Form>

        </Card.Body>
      </Card>

    </Container>
  );
};

export default Login;

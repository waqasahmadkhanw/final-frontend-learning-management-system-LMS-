
// //------ IMPROVED LOGICAL CODE FOR PRODUTCION-------//
// import { useState, useContext } from "react";
// import { Container, Form, Button, Card, Spinner, InputGroup } from "react-bootstrap";
// import { toast } from "react-toastify";
// import { loginUser } from "../../api/user.api";
// import { AuthContext } from "../../context/AuthContext";
// import { useNavigate, Link } from "react-router-dom";
// import { FaEnvelope, FaLock } from "react-icons/fa";

// const Login = () => {

//   const navigate = useNavigate();
//   const { setUser } = useContext(AuthContext);

//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   // ===============================
//   // Handle input change
//   // ===============================
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // ===============================
//   // Handle login submit
//   // ===============================
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.email || !formData.password) {
//       return toast.error("Please fill all fields");
//     }

//     try {

//       setLoading(true);

//       const response = await loginUser(formData);
//       const data = response?.data;

//       console.log("Login API response:", data);

//       if (!data?.data) {
//         throw new Error("Invalid server response");
//       }

//       const user = data.data.user;
//       const accessToken = data.data.accessToken;

//       console.log("LOgin user token extration", accessToken)

//       if (accessToken) {
//         localStorage.setItem("accessToken", accessToken);
//       }

//       setUser(user);

//       toast.success(data.message || "Login successful!");

//       const routes = {
//         admin: "/admin/dashboard",
//         instructor: "/instructor/dashboard",
//         student: "/",
//       };

//       navigate(routes[user?.role] || "/");

//     } catch (error) {

//       console.error("Login Error:", error);

//       toast.error(
//         error?.response?.data?.message ||
//         error?.message ||
//         "Login failed. Please try again."
//       );

//     } finally {

//       setLoading(false);

//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg,#1f2937,#111827)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "20px"
//       }}
//     >

//       <Container>

//         <Card
//           className="shadow-lg mx-auto border-0"
//           style={{
//             maxWidth: "420px",
//             borderRadius: "14px"
//           }}
//         >
//           <Card.Body className="p-4">

//             <div className="text-center mb-4">
//               <h3 className="fw-bold mb-1">Welcome Back</h3>
//               <p className="text-muted mb-0">
//                 Login to continue to <strong>LMS Pro</strong>
//               </p>
//             </div>

//             <Form onSubmit={handleSubmit}>

//               <Form.Group className="mb-3">
//                 <InputGroup>
//                   <InputGroup.Text>
//                     <FaEnvelope />
//                   </InputGroup.Text>
//                   <Form.Control
//                     type="email"
//                     placeholder="Enter your email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </InputGroup>
//               </Form.Group>

//               <Form.Group className="mb-4">
//                 <InputGroup>
//                   <InputGroup.Text>
//                     <FaLock />
//                   </InputGroup.Text>
//                   <Form.Control
//                     type="password"
//                     placeholder="Enter your password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                   />
//                 </InputGroup>
//               </Form.Group>

//               <Button
//                 type="submit"
//                 variant="dark"
//                 className="w-100 rounded-pill fw-semibold"
//                 disabled={loading}
//               >
//                 {loading ? (
//                   <>
//                     <Spinner
//                       animation="border"
//                       size="sm"
//                       className="me-2"
//                     />
//                     Logging in...
//                   </>
//                 ) : (
//                   "Login"
//                 )}
//               </Button>

//             </Form>

//             <div className="text-center mt-4">
//               <small className="text-muted">
//                 Don't have an account?{" "}
//                 <Link to="/register" className="fw-semibold">
//                   Register
//                 </Link>
//               </small>
//             </div>

//           </Card.Body>
//         </Card>

//       </Container>

//     </div>
//   );
// };

// export default Login;


//------ FINAL IMPROVED LOGIN (PRODUCTION READY) -------//
import { useState, useContext, useEffect } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Spinner,
  InputGroup,
} from "react-bootstrap";
import { toast } from "react-toastify";
import { loginUser } from "../../api/user.api";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // 🔥 Redirect if already logged in
  useEffect(() => {
    if (user) {
      if (user.role === "admin") navigate("/admin/users");
      else if (user.role === "instructor")
        navigate("/instructor/manage-courses");
      else navigate("/student/my-courses");
    }
  }, [user, navigate]);

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
  // Validation
  // ===============================
  const validateForm = () => {
    if (!formData.email || !formData.password) {
      toast.error("Please fill all fields");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Invalid email format");
      return false;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }

    return true;
  };

  // ===============================
  // Handle login submit
  // ===============================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const response = await loginUser(formData);
      const data = response?.data;

      console.log("Login API response:", data);

      if (!data?.data) {
        throw new Error("Invalid server response");
      }

      const userData = data.data.user;
      const accessToken = data.data.accessToken;

      // 🔥 Store token safely
      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
      }

      setUser(userData);

      toast.success(data.message || "Login successful!");

      // 🔥 CORRECT ROLE-BASED NAVIGATION (IMPORTANT)
      if (userData.role === "admin") {
        navigate("/admin/users");
      } else if (userData.role === "instructor") {
        navigate("/instructor/manage-courses");
      } else {
        navigate("/student/my-courses");
      }
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
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#1f2937,#111827)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Container>
        <Card
          className="login-card shadow-lg mx-auto border-0"
          style={{
            maxWidth: "420px",
            borderRadius: "14px",
          }}
        >
          <Card.Body className="p-4">
            <div className="text-center mb-4">
              <h3 className="fw-bold mb-1">Welcome Back</h3>
              <p className="text-muted mb-0">
                Login to continue to <strong>LMS Pro</strong>
              </p>
            </div>

            <Form onSubmit={handleSubmit}>
              {/* Email */}
              <Form.Group className="mb-3">
                <InputGroup>
                  <InputGroup.Text>
                    <FaEnvelope />
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-4">
                <InputGroup>
                  <InputGroup.Text>
                    <FaLock />
                  </InputGroup.Text>

                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />

                  <Button
                    variant="light"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </Button>
                </InputGroup>
              </Form.Group>

              {/* Submit */}
              <Button
                type="submit"
                variant="dark"
                className="w-100 rounded-pill fw-semibold"
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

            {/* Footer */}
            <div className="text-center mt-4">
              <small className="text-muted">
                Don't have an account?{" "}
                <Link to="/register" className="fw-semibold">
                  Register
                </Link>
              </small>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Login;


// import {
//   Navbar,
//   Nav,
//   Container,
//   Button,
//   NavDropdown
// } from "react-bootstrap";
// import { useContext } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";

// const AppNavbar = () => {
//   const { user, handleLogout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   return (
//     <Navbar
//       bg="dark"
//       variant="dark"
//       expand="lg"
//       sticky="top"
//       className="shadow-sm"
//     >
//       <Container>
//         {/* ===== Brand ===== */}
//         <Navbar.Brand
//           as={Link}
//           to="/"
//           style={{ fontWeight: "700", letterSpacing: "1px" }}
//         >
//           🎓 LMS Pro
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="main-navbar" />
//         <Navbar.Collapse id="main-navbar">

//           {/* ================= LEFT SIDE ================= */}
//           <Nav className="me-auto">

//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             <Nav.Link as={Link} to="/about">About</Nav.Link>
//             <Nav.Link as={Link} to="/courses">Courses</Nav.Link>

//             {/* ===== Instructor Panel (Improved) ===== */}
//             {user?.role === "instructor" && (
//               <NavDropdown
//                 title="Instructor Panel"
//                 id="instructor-dropdown"
//               >
//                 <NavDropdown.Item
//                   as={Link}
//                   to="/instructor/dashboard"
//                 >
//                   📊 Dashboard
//                 </NavDropdown.Item>

//                 <NavDropdown.Divider />

//                 <NavDropdown.Item
//                   as={Link}
//                   to="/create-course"
//                 >
//                   ➕ Create Course
//                 </NavDropdown.Item>

//                 <NavDropdown.Item
//                   as={Link}
//                   to="/courses"
//                 >
//                   📚 My Courses
//                 </NavDropdown.Item>

//                 <NavDropdown.Item
//                   as={Link}
//                   to="/instructor/manage-students"
//                 >
//                  👨‍🎓 Manage Students later will be handle
//                 </NavDropdown.Item>

//                 <NavDropdown.Divider />

//                 <NavDropdown.Item
//                   as={Link}
//                   to="/instructor/analytics"
//                 >
//                   📈 Analytics later will be handle
//                 </NavDropdown.Item>
//               </NavDropdown>



//             )}

//             {/* ===== Admin Panel (UNCHANGED) ===== */}
//             {user?.role === "admin" && (
//               <NavDropdown title="Admin Panel" id="admin-dropdown">
//                 <NavDropdown.Item
//                   as={Link}
//                   to="/admin/dashboard"
//                 >
//                   Dashboard
//                 </NavDropdown.Item>

//                 <NavDropdown.Item
//                   as={Link}
//                   to="/admin/users"
//                 >
//                   Manage Users
//                 </NavDropdown.Item>

//                 <NavDropdown.Item
//                   as={Link}
//                   to="/admin/manage-courses"
//                 >
//                   Manage Courses
//                 </NavDropdown.Item>

//                 <NavDropdown.Item
//                   as={Link}
//                   to="/admin/create-instructor"
//                 >
//                   Create Instructor
//                 </NavDropdown.Item>

//                 <NavDropdown.Item
//                   as={Link}
//                   to="/admin/analytics"
//                 >
//                   Analytics
//                 </NavDropdown.Item>
//               </NavDropdown>
//             )}

//           </Nav>

//           {/* ================= RIGHT SIDE ================= */}
//           <Nav>

//             {!user && (
//               <>
//                 <Nav.Link as={Link} to="/login">
//                   Login
//                 </Nav.Link>

//                 <Button
//                   variant="outline-light"
//                   className="ms-2"
//                   onClick={() => navigate("/register")}
//                 >
//                   Register
//                 </Button>
//               </>
//             )}

//             {user && (
//               <>
//                 {/* Student Quick Access */}
//                 {user.role === "student" && (
//                   <Nav.Link as={Link} to="/my-courses">
//                     My Courses
//                   </Nav.Link>
//                 )}

//                 {/* User Dropdown */}
//                 <NavDropdown
//                   title={`👤 ${user.name}`}
//                   align="end"
//                   id="user-dropdown"
//                 >
//                   <NavDropdown.Item
//                     as={Link}
//                     to="/update-user-details"
//                   >
//                     Update Profile
//                   </NavDropdown.Item>

//                   <NavDropdown.Item
//                     as={Link}
//                     to="/change-password"
//                   >
//                     Change Password
//                   </NavDropdown.Item>

//                   <NavDropdown.Divider />

//                   <NavDropdown.Item
//                     onClick={handleLogout}
//                     className="text-danger"
//                   >
//                     Logout
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               </>
//             )}

//           </Nav>

//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default AppNavbar;
import {
  Navbar,
  Nav,
  Container,
  Button,
  NavDropdown
} from "react-bootstrap";
import { useContext } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const AppNavbar = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="shadow"
      style={{
        paddingTop: "12px",
        paddingBottom: "12px",
        backdropFilter: "blur(10px)"
      }}
    >
      <Container>

        {/* ===== Brand ===== */}
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            fontWeight: "700",
            fontSize: "20px",
            letterSpacing: "1px"
          }}
        >
          🎓 <span style={{ color: "#0d6efd" }}>LMS</span> Pro
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">

          {/* ================= LEFT SIDE ================= */}
          <Nav className="me-auto align-items-center">

            <Nav.Link
              as={Link}
              to="/"
              className={isActive("/") ? "fw-bold text-info" : "fw-medium"}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/about"
              className={isActive("/about") ? "fw-bold text-info" : "fw-medium"}
            >
              About
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/courses"
              className={isActive("/courses") ? "fw-bold text-info" : "fw-medium"}
            >
              Courses
            </Nav.Link>

            {/* ===== Instructor Panel ===== */}
            {user?.role === "instructor" && (
              <NavDropdown
                title="Instructor Panel"
                id="instructor-dropdown"
              >
                <NavDropdown.Item as={Link} to="/instructor/dashboard">
                  📊 Dashboard
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item as={Link} to="/create-course">
                  ➕ Create Course
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/courses">
                  📚 My Courses
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/instructor/manage-students"
                >
                  👨‍🎓 Manage Students later will be handle
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item
                  as={Link}
                  to="/instructor/analytics"
                >
                  📈 Analytics later will be handle
                </NavDropdown.Item>
              </NavDropdown>
            )}

            {/* ===== Admin Panel ===== */}
            {user?.role === "admin" && (
              <NavDropdown title="Admin Panel" id="admin-dropdown">
                <NavDropdown.Item as={Link} to="/admin/dashboard">
                  Dashboard
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/admin/users">
                  Manage Users
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/admin/manage-courses">
                  Manage Courses
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/admin/create-instructor">
                  Create Instructor
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/admin/analytics">
                  Analytics
                </NavDropdown.Item>
              </NavDropdown>
            )}

          </Nav>

          {/* ================= RIGHT SIDE ================= */}
          <Nav className="align-items-center">

            {!user && (
              <>
                <Nav.Link as={Link} to="/login" className="fw-medium">
                  Login
                </Nav.Link>

                <Button
                  variant="primary"
                  className="ms-2 px-4 rounded-pill fw-medium"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Button>
              </>
            )}

            {user && (
              <>
                {/* Student Quick Access */}
                {user.role === "student" && (
                  <Nav.Link
                    as={Link}
                    to="/my-courses"
                    className="fw-medium"
                  >
                    My Courses
                  </Nav.Link>
                )}

                {/* User Dropdown */}
                <NavDropdown
                  align="end"
                  id="user-dropdown"
                  title={
                    <span className="d-inline-flex align-items-center">
                      <span
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          background: "#0d6efd",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "14px",
                          marginRight: "6px"
                        }}
                      >
                        {user.name?.charAt(0).toUpperCase()}
                      </span>
                      {user.name}
                    </span>
                  }
                >
                  <NavDropdown.Item as={Link} to="/update-user-details">
                    Update Profile
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/change-password">
                    Change Password
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Item
                    onClick={handleLogout}
                    className="text-danger"
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;



// import { Nav } from "react-bootstrap";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { useNavigate, useLocation } from "react-router-dom";
// import {
//   FaHome,
//   FaBook,
//   FaUserGraduate,
//   FaChalkboardTeacher,
//   FaUsers,
//   FaChartBar,
//   FaPlus
// } from "react-icons/fa";

// const Sidebar = () => {
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();

//   if (!user) return null;

//   const isActive = (path) => location.pathname === path;

//   const linkStyle = (path) => ({
//     cursor: "pointer",
//     padding: "12px 16px",
//     borderRadius: "8px",
//     marginBottom: "6px",
//     background: isActive(path)
//       ? "linear-gradient(90deg,#0d6efd,#0a58ca)"
//       : "transparent",
//     fontWeight: isActive(path) ? "600" : "400",
//     transition: "all 0.2s ease"
//   });

//   const iconStyle = { marginRight: "10px" };

//   return (
//     <div
//       style={{
//         width: "260px",
//         minHeight: "100vh",
//         background: "#1f1f1f",
//         padding: "22px",
//         color: "white",
//         position: "sticky",
//         top: 0,
//         borderRight: "1px solid rgba(255,255,255,0.05)"
//       }}
//     >
//       {/* Logo */}
//       <h4
//         className="text-center mb-4"
//         style={{
//           fontWeight: "700",
//           letterSpacing: "1px"
//         }}
//       >
//         🎓 <span style={{ color: "#0d6efd" }}>LMS</span> Pro
//       </h4>

//       <Nav className="flex-column">

//         {/* COMMON */}
//         <Nav.Link
//           style={linkStyle("/")}
//           className="text-white d-flex align-items-center"
//           onClick={() => navigate("/")}
//         >
//           <FaHome style={iconStyle} />
//           Dashboard
//         </Nav.Link>

//         <Nav.Link
//           style={linkStyle("/courses")}
//           className="text-white d-flex align-items-center"
//           onClick={() => navigate("/courses")}
//         >
//           <FaBook style={iconStyle} />
//           Browse Courses
//         </Nav.Link>

//         {/* ================= STUDENT ================= */}
//         {user.role === "student" && (
//           <>
//             <hr className="text-secondary" />
//             <small
//               className="text-uppercase text-secondary"
//               style={{ fontSize: "11px", letterSpacing: "1px" }}
//             >
//               Student
//             </small>

//             <Nav.Link
//               style={linkStyle("/my-courses")}
//               className="text-white d-flex align-items-center"
//               onClick={() => navigate("/my-courses")}
//             >
//               <FaUserGraduate style={iconStyle} />
//               My Courses
//             </Nav.Link>
//           </>
//         )}

//         {/* ================= INSTRUCTOR ================= */}
//         {user.role === "instructor" && (
//           <>
//             <hr className="text-secondary" />
//             <small
//               className="text-uppercase text-secondary"
//               style={{ fontSize: "11px", letterSpacing: "1px" }}
//             >
//               Instructor
//             </small>

//             <Nav.Link
//               style={linkStyle("/create-course")}
//               className="text-white d-flex align-items-center"
//               onClick={() => navigate("/create-course")}
//             >
//               <FaPlus style={iconStyle} />
//               Create Course
//             </Nav.Link>

//             <Nav.Link
//               style={linkStyle("/instructor/manage-courses")}
//               className="text-white d-flex align-items-center"
//               onClick={() => navigate("/instructor/manage-courses")}
//             >
//               <FaChalkboardTeacher style={iconStyle} />
//               Manage Courses
//             </Nav.Link>
//           </>
//         )}

//         {/* ================= ADMIN ================= */}
//         {user.role === "admin" && (
//           <>
//             <hr className="text-secondary" />
//             <small
//               className="text-uppercase text-secondary"
//               style={{ fontSize: "11px", letterSpacing: "1px" }}
//             >
//               Admin Panel
//             </small>

//             <Nav.Link
//               style={linkStyle("/admin/dashboard")}
//               className="text-white d-flex align-items-center"
//               onClick={() => navigate("/admin/dashboard")}
//             >
//               <FaHome style={iconStyle} />
//               Dashboard
//             </Nav.Link>

//             <Nav.Link
//               style={linkStyle("/admin/users")}
//               className="text-white d-flex align-items-center"
//               onClick={() => navigate("/admin/users")}
//             >
//               <FaUsers style={iconStyle} />
//               Manage Users
//             </Nav.Link>

//             <Nav.Link
//               style={linkStyle("/admin/courses")}
//               className="text-white d-flex align-items-center"
//               onClick={() => navigate("/admin/courses")}
//             >
//               <FaBook style={iconStyle} />
//               Manage Courses
//             </Nav.Link>

//             <Nav.Link
//               style={linkStyle("/admin/create-instructor")}
//               className="text-white d-flex align-items-center"
//               onClick={() => navigate("/admin/create-instructor")}
//             >
//               <FaUserGraduate style={iconStyle} />
//               Create Instructor
//             </Nav.Link>

//             <Nav.Link
//               style={linkStyle("/admin/analytics")}
//               className="text-white d-flex align-items-center"
//               onClick={() => navigate("/admin/analytics")}
//             >
//               <FaChartBar style={iconStyle} />
//               Analytics
//             </Nav.Link>
//           </>
//         )}

//       </Nav>
//     </div>
//   );
// };

// export default Sidebar;
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div>
      <h5 className="fw-bold mb-4 text-white">LMS Dashboard</h5>

      <Nav className="flex-column gap-2">

        {/* ================= STUDENT ================= */}
        {user?.role === "student" && (
          <>
            <Nav.Link
              as={Link}
              to="/student/my-courses"
              className={isActive("/student/my-courses") ? "active" : ""}
            >
              📚 My Courses
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/profile"
              className={isActive("/profile") ? "active" : ""}
            >
              👤 Profile
            </Nav.Link>
          </>
        )}

        {/* ================= INSTRUCTOR ================= */}
        {user?.role === "instructor" && (
          <>
            <Nav.Link
              as={Link}
              to="/instructor/create-course"
              className={
                isActive("/instructor/create-course") ? "active" : ""
              }
            >
              ➕ Create Course
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/instructor/manage-courses"
              className={
                isActive("/instructor/manage-courses") ? "active" : ""
              }
            >
              📦 Manage Courses
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/instructor/upload-lessons"
              className={
                isActive("/instructor/upload-lessons") ? "active" : ""
              }
            >
              🎥 Upload Lessons
            </Nav.Link>
          </>
        )}

        {/* ================= ADMIN ================= */}
        {user?.role === "admin" && (
          <>
            <Nav.Link
              as={Link}
              to="/admin/users"
              className={isActive("/admin/users") ? "active" : ""}
            >
              👥 Manage Users
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/admin/courses"
              className={isActive("/admin/courses") ? "active" : ""}
            >
              📚 Manage Courses
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/admin/analytics"
              className={isActive("/admin/analytics") ? "active" : ""}
            >
              📊 Analytics
            </Nav.Link>
          </>
        )}
      </Nav>
    </div>
  );
};

export default Sidebar;

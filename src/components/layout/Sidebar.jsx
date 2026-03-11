
// import { Nav } from "react-bootstrap";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { useNavigate, useLocation } from "react-router-dom";

// const Sidebar = () => {
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();

//   if (!user) return null;

//   const isActive = (path) => location.pathname === path;

//   const linkStyle = (path) => ({
//     cursor: "pointer",
//     padding: "10px 15px",
//     borderRadius: "6px",
//     marginBottom: "5px",
//     backgroundColor: isActive(path) ? "#343a40" : "transparent",
//     fontWeight: isActive(path) ? "600" : "400"
//   });

//   return (
//     <div
//       style={{
//         width: "260px",
//         minHeight: "100vh",
//         background: "#1f1f1f",
//         padding: "20px",
//         color: "white",
//         position: "sticky",
//         top: 0
//       }}
//     >
//       {/* Logo */}
//       <h4 className="text-center mb-4">🎓 LMS Pro </h4>

//       <Nav className="flex-column">

//         {/* COMMON */}
//         <Nav.Link
//           style={linkStyle("/")}
//           className="text-white"
//           onClick={() => navigate("/")}
//         >
//           Dashboard
//         </Nav.Link>

//         <Nav.Link
//           style={linkStyle("/courses")}
//           className="text-white"
//           onClick={() => navigate("/courses")}
//         >
//           Browse Courses
//         </Nav.Link>

//         {/* ================= STUDENT ================= */}
//         {user.role === "student" && (
//           <>
//             <hr className="text-secondary" />
//             <small className="text-secondary">STUDENT</small>

//             <Nav.Link
//               style={linkStyle("/my-courses")}
//               className="text-white"
//               onClick={() => navigate("/my-courses")}
//             >
//               My Courses
//             </Nav.Link>
//           </>
//         )}

//         {/* ================= INSTRUCTOR ================= */}
//         {user.role === "instructor" && (
//           <>
//             <hr className="text-secondary" />
//             <small className="text-secondary">INSTRUCTOR</small>

//             <Nav.Link
//               style={linkStyle("/create-course")}
//               className="text-white"
//               onClick={() => navigate("/create-course")}
//             >
//               Create Course
//             </Nav.Link>

//             <Nav.Link
//               style={linkStyle("/instructor/manage-courses")}
//               className="text-white"
//               onClick={() => navigate("/instructor/manage-courses")}
//             >
//               Manage Courses
//             </Nav.Link>
//           </>
//         )}

//         {/* ================= ADMIN ================= */}
//         {user.role === "admin" && (
//           <>
//             <hr className="text-secondary" />
//             <small className="text-secondary">ADMIN PANEL</small>

//             <Nav.Link
//               style={linkStyle("/admin/dashboard")}
//               className="text-white"
//               onClick={() => navigate("/admin/dashboard")}
//             >
//               Dashboard
//             </Nav.Link>

//             <Nav.Link
//               style={linkStyle("/admin/users")}
//               className="text-white"
//               onClick={() => navigate("/admin/users")}
//             >
//               Manage Users
//             </Nav.Link>

//             <Nav.Link
//               style={linkStyle("/admin/courses")}
//               className="text-white"
//               onClick={() => navigate("/admin/courses")}
//             >
//               Manage Courses
//             </Nav.Link>

//             <Nav.Link
//               style={linkStyle("/admin/create-instructor")}
//               className="text-white"
//               onClick={() => navigate("/admin/create-instructor")}
//             >
//               Create Instructor
//             </Nav.Link>

//             <Nav.Link
//               style={linkStyle("/admin/analytics")}
//               className="text-white"
//               onClick={() => navigate("/admin/analytics")}
//             >
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
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUsers,
  FaChartBar,
  FaPlus
} from "react-icons/fa";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  if (!user) return null;

  const isActive = (path) => location.pathname === path;

  const linkStyle = (path) => ({
    cursor: "pointer",
    padding: "12px 16px",
    borderRadius: "8px",
    marginBottom: "6px",
    background: isActive(path)
      ? "linear-gradient(90deg,#0d6efd,#0a58ca)"
      : "transparent",
    fontWeight: isActive(path) ? "600" : "400",
    transition: "all 0.2s ease"
  });

  const iconStyle = { marginRight: "10px" };

  return (
    <div
      style={{
        width: "260px",
        minHeight: "100vh",
        background: "#1f1f1f",
        padding: "22px",
        color: "white",
        position: "sticky",
        top: 0,
        borderRight: "1px solid rgba(255,255,255,0.05)"
      }}
    >
      {/* Logo */}
      <h4
        className="text-center mb-4"
        style={{
          fontWeight: "700",
          letterSpacing: "1px"
        }}
      >
        🎓 <span style={{ color: "#0d6efd" }}>LMS</span> Pro
      </h4>

      <Nav className="flex-column">

        {/* COMMON */}
        <Nav.Link
          style={linkStyle("/")}
          className="text-white d-flex align-items-center"
          onClick={() => navigate("/")}
        >
          <FaHome style={iconStyle} />
          Dashboard
        </Nav.Link>

        <Nav.Link
          style={linkStyle("/courses")}
          className="text-white d-flex align-items-center"
          onClick={() => navigate("/courses")}
        >
          <FaBook style={iconStyle} />
          Browse Courses
        </Nav.Link>

        {/* ================= STUDENT ================= */}
        {user.role === "student" && (
          <>
            <hr className="text-secondary" />
            <small
              className="text-uppercase text-secondary"
              style={{ fontSize: "11px", letterSpacing: "1px" }}
            >
              Student
            </small>

            <Nav.Link
              style={linkStyle("/my-courses")}
              className="text-white d-flex align-items-center"
              onClick={() => navigate("/my-courses")}
            >
              <FaUserGraduate style={iconStyle} />
              My Courses
            </Nav.Link>
          </>
        )}

        {/* ================= INSTRUCTOR ================= */}
        {user.role === "instructor" && (
          <>
            <hr className="text-secondary" />
            <small
              className="text-uppercase text-secondary"
              style={{ fontSize: "11px", letterSpacing: "1px" }}
            >
              Instructor
            </small>

            <Nav.Link
              style={linkStyle("/create-course")}
              className="text-white d-flex align-items-center"
              onClick={() => navigate("/create-course")}
            >
              <FaPlus style={iconStyle} />
              Create Course
            </Nav.Link>

            <Nav.Link
              style={linkStyle("/instructor/manage-courses")}
              className="text-white d-flex align-items-center"
              onClick={() => navigate("/instructor/manage-courses")}
            >
              <FaChalkboardTeacher style={iconStyle} />
              Manage Courses
            </Nav.Link>
          </>
        )}

        {/* ================= ADMIN ================= */}
        {user.role === "admin" && (
          <>
            <hr className="text-secondary" />
            <small
              className="text-uppercase text-secondary"
              style={{ fontSize: "11px", letterSpacing: "1px" }}
            >
              Admin Panel
            </small>

            <Nav.Link
              style={linkStyle("/admin/dashboard")}
              className="text-white d-flex align-items-center"
              onClick={() => navigate("/admin/dashboard")}
            >
              <FaHome style={iconStyle} />
              Dashboard
            </Nav.Link>

            <Nav.Link
              style={linkStyle("/admin/users")}
              className="text-white d-flex align-items-center"
              onClick={() => navigate("/admin/users")}
            >
              <FaUsers style={iconStyle} />
              Manage Users
            </Nav.Link>

            <Nav.Link
              style={linkStyle("/admin/courses")}
              className="text-white d-flex align-items-center"
              onClick={() => navigate("/admin/courses")}
            >
              <FaBook style={iconStyle} />
              Manage Courses
            </Nav.Link>

            <Nav.Link
              style={linkStyle("/admin/create-instructor")}
              className="text-white d-flex align-items-center"
              onClick={() => navigate("/admin/create-instructor")}
            >
              <FaUserGraduate style={iconStyle} />
              Create Instructor
            </Nav.Link>

            <Nav.Link
              style={linkStyle("/admin/analytics")}
              className="text-white d-flex align-items-center"
              onClick={() => navigate("/admin/analytics")}
            >
              <FaChartBar style={iconStyle} />
              Analytics
            </Nav.Link>
          </>
        )}

      </Nav>
    </div>
  );
};

export default Sidebar;
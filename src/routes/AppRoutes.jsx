import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Layout
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Route Guards
import ProtectedRoute from "../components/common/ProtectedRoute";
import InstructorRoute from "../components/roleRoutes/InstructorRoute";
import AdminRoute from "../components/roleRoutes/AdminRoute";

// ================= PUBLIC PAGES =================
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import CourseList from "../pages/public/CourseList";
import CourseDetails from "../pages/public/CourseDetails";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";

// ================= PROFILE =================
// import UpdateProfile from "../pages/profile/UpdateProfile";
// import ChangePassword from "../pages/profile/ChangePassword";
import ChangePassword from "../pages/profile/ChangePassword";
import UpdateProfile from "../pages/profile/UpdateProfile";
// ================= STUDENT =================
import StudentDashboard from "../pages/student/StudentDashboard";
// import MyCourses from "../pages/student/MyCourses";
import MyCourses from "../pages/student/MyCourse";

import LessonDetails from "../pages/student/LessonDetails";

// ================= INSTRUCTOR =================
// import InstructorDashboard from "../pages/instructor/InstructorDashboard";
import CreateCourse from "../pages/instructor/CreateCourse";
import EditCourse from "../pages/instructor/EditCourse";
import ManageCourses from "../pages/instructor/ManageCourses";
import CreateLesson from "../pages/instructor/CreateLesson";
import ManageLessons from "../pages/instructor/ManageLessons";

// ================= ADMIN =================
import AdminDashboard from "../pages/admin/AdminDashboard";
// import ManageUsers from "../pages/admin/ManageUsers";
import ManageCoursesAdmin from "../pages/admin/ManageCourses";
import CreateInstructor from "../pages/admin/CreateInstructor";
import Analytics from "../pages/admin/Analytics";
import ManageUsers from "../pages/admin/ManageUsers";
import InstructorDashboard from "../pages/instructor/InstructorDashboard";

const AppRoutes = () => {
  return (
    <BrowserRouter>

      {/* Global Navbar */}
      <Navbar />

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
<Routes>
        {/* ================= PUBLIC ROUTES ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ================= PROFILE ================= */}
        <Route
          path="/update-user-details"
          element={
            <ProtectedRoute>
            <UpdateProfile/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/change-password"
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />

        {/* ================= STUDENT ROUTES ================= */}
        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-courses"
          element={
            <ProtectedRoute>
              <MyCourses />
            </ProtectedRoute>
          }
        />

        <Route
          path="/lesson/:id"
          element={
            <ProtectedRoute>
              <LessonDetails />
            </ProtectedRoute>
          }
        />

        {/* ================= INSTRUCTOR ROUTES ================= */}
        <Route
          path="/instructor/dashboard"
          element={
            <InstructorRoute>
              <InstructorDashboard/>
            </InstructorRoute>
          }
        />

        <Route
          path="/create-course"
          element={
            <InstructorRoute>
              <CreateCourse/>
            </InstructorRoute>
          }
        />

        <Route
          path="/instructor/manage-courses"
          element={
            <InstructorRoute>
              <ManageCourses />
            </InstructorRoute>
          }
        />

        <Route
          path="/instructor/edit-course/:id"
          element={
            <InstructorRoute>
              <EditCourse />
            </InstructorRoute>
          }
        />

        <Route
          path="/instructor/create-lesson/:courseId"
          element={
            <InstructorRoute>
              <CreateLesson />
            </InstructorRoute>
          }
        />

        <Route
          path="/instructor/manage-lessons/:courseId"
          element={
            <InstructorRoute>
              <ManageLessons />
            </InstructorRoute>
          }
        />

        {/* ================= ADMIN ROUTES ================= */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <ManageUsers />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/manage-courses"
          element={
            <AdminRoute>
              <ManageCoursesAdmin />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/create-instructor"
          element={
            <AdminRoute>
              <CreateInstructor />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/analytics"
          element={
            <AdminRoute>
              <Analytics />
            </AdminRoute>
          }
        />

      </Routes>

      {/* Global Footer */}
      <Footer />

    </BrowserRouter>
  );
};

export default AppRoutes;
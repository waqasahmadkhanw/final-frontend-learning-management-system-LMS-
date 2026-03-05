
import axiosInstance from "./axiosInstance";

// 👥 Get All Users
export const getAllUsers = () => {
  return axiosInstance.get("/admin/users");
};

// ❌ Delete User
export const deleteUser = (id) => {
  return axiosInstance.delete(`/users/${id}`);
};

// 👨‍🏫 Create Instructor
export const createInstructor = (instructorData) => {
  return axiosInstance.post("/admin/create-instructor", instructorData);
};

// 📚 Admin Manage Courses
export const adminGetCourses = () => {
  return axiosInstance.get("/courses");
};

export const adminDeleteCourse = (id) => {
  return axiosInstance.delete(`/courses/${id}`);
};

// 📊 Analytics
export const getAnalytics = () => {
  return axiosInstance.get("/admin/dashboard");
};
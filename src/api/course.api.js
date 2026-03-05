

// src/api/course.api.js
import axiosInstance from "./axiosInstance";

// 📚 Get All Courses
export const getAllCourses = () => {
  return axiosInstance.get("/courses");
};

// 📖 Get Single Course
export const getCourseById = (id) => {
  return axiosInstance.get(`/courses/${id}`);
};

// 🎓 Create Course (Instructor)
export const createCourse = (data) => {
  return axiosInstance.post("/courses", data);
};

// ✏️ Update Course
export const updateCourse = (id, data) => {
  return axiosInstance.put(`/courses/${id}`, data);
};

// ❌ Delete Course
export const deleteCourse = (id) => {
  return axiosInstance.delete(`/courses/${id}`);
};
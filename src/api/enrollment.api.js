import axiosInstance from "./axiosInstance";

// Enroll in course
export const enrollCourse = (courseId) => {
  return axiosInstance.post("/enrollments/enroll", { courseId });
};

// Get my enrolled courses
export const getMyCourses = () => {
  return axiosInstance.get("/enrollments/my-courses");
};

// Update progress
export const updateProgress = (enrollmentId) => {
  return axiosInstance.put(`/progress/${enrollmentId}`, {
    progress,
  });
};
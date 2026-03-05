import axiosInstance from "./axiosInstance";

// Get lessons by course
export const getLessonsByCourse = (courseId) => {
  return axiosInstance.get(`/lessons/course/${courseId}`);
};

// Get single lesson
export const getLessonById = (id) => {
  return axiosInstance.get(`/lessons/${id}`);
};

// Create lesson
export const createLesson = (data) => {
  return axiosInstance.post("/lessons/create-lesson", data);
};

// Update lesson
export const updateLesson = (id, data) => {
  return axiosInstance.put(`/lessons/${id}`, data);
};

// Delete lesson
export const deleteLesson = (id) => {
  return axiosInstance.delete(`/lessons/${id}`);
};
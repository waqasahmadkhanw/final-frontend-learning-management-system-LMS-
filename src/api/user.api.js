import axiosInstance from "./axiosInstance";

// Register
export const registerUser = (data) => {
  return axiosInstance.post("/users/register", data);
};

// Login
export const loginUser = (data) => {
  return axiosInstance.post("/users/login-user", data);
};

// Logout
export const logoutUser = () => {
  return axiosInstance.post("/users/logout-user");
};

// Get current logged-in user
export const getCurrentUser = () => {
  return axiosInstance.get("/users/current-user");
};

// Change password
export const changePassword = (data) => {
  return axiosInstance.patch("/users/change-password", data);
};

// Update profile
export const updateProfile = (data) => {
  return axiosInstance.patch("/users/update-user-details", data);
};

// Refresh token
export const refreshToken = () => {
  return axiosInstance.post("/users/refresh-token");
};
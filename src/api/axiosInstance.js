import axios from "axios";

// Centralized Axios Configuration
const axiosInstance = axios.create({
  baseURL: "https://mern-lms-punjab.up.railway.app/api", 
  //for localy testing use vite port 5173
  withCredentials: true, // REQUIRED for cookies (JWT)
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Global response interceptor (optional advanced)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Centralized error handling
    if (error.response?.status === 401) {
      console.log("Unauthorized. Please login again.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

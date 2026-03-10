// import axios from "axios";

// // Centralized Axios Configuration
// const axiosInstance = axios.create({
//   // baseURL: "http://localhost:8000/api", 
//   baseURL: "https://mern-lms-punjab.up.railway.app/api", 
//   //for localy testing use vite port 5173
//   withCredentials: true, // REQUIRED for cookies (JWT)
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Global response interceptor (optional advanced)
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Centralized error handling
//     if (error.response?.status === 401) {
//       console.log("Unauthorized. Please login again.");
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;
import axios from "axios";

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: "https://mern-lms-punjab.up.railway.app/api",
  // baseURL: "http://localhost:8000/api", // for local testing

  withCredentials: true, // required for cookies

  headers: {
    "Content-Type": "application/json",
  },
});


// =======================================
// REQUEST INTERCEPTOR
// Automatically attach JWT token
// =======================================
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


// =======================================
// RESPONSE INTERCEPTOR
// Handle global errors
// =======================================
axiosInstance.interceptors.response.use(
  (response) => response,

  (error) => {

    const status = error.response?.status;

    // Handle Unauthorized
    if (status === 401) {

      // Ignore auth check on page load
      if (error.config.url.includes("current-user")) {
        return Promise.reject(error);
      }

      console.warn("Session expired. Please login again.");

      // Remove invalid token
      localStorage.removeItem("token");
    }

    // Handle Server errors
    if (status === 500) {
      console.error("Server error. Please try later.");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

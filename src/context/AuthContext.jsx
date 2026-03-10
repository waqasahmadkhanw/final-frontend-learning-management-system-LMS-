// import { createContext, useEffect, useState } from "react";
// import {
//   loginUser,
//   registerUser,
//   logoutUser,
//   getCurrentUser,
// } from "../api/user.api";
// import { toast } from "react-toastify";

// // Create context
// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // ===============================
//   // Load user on page refresh
//   // ===============================
//   const loadUser = async () => {
//     try {
//       const { data } = await getCurrentUser();
//       setUser(data.data); // ApiResponse format
//     } catch (error) {
//       setUser(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadUser();
//   }, []);

//   // ===============================
//   // REGISTER
//   // ===============================
//   const handleRegister = async (formData) => {
//     try {
//       const { data } = await registerUser(formData);
//       toast.success(data.message || "Registered Successfully");
//       return true;
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Registration failed");
//       return false;
//     }
//   };

//   // ===============================
//   // LOGIN
//   // ===============================
//   const handleLogin = async (formData) => {
//     try {
//       const { data } = await loginUser(formData);

//       setUser(data.data.user); // backend returns { user: loggedInUser }
//       toast.success(data.message || "Login Successful");
//       return true;
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Login failed");
//       return false;
//     }
//   };

//   // ===============================
//   // LOGOUT
//   // ===============================
//   const handleLogout = async () => {
//     try {
//       await logoutUser();
//       setUser(null);
//       toast.success("Logged out successfully");
//     } catch (error) {
//       toast.error("Logout failed");
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         setUser,
//         loading,
//         handleLogin,
//         handleRegister,
//         handleLogout,
//       }}
//     >
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

import { createContext, useEffect, useState } from "react";
import {
  loginUser,
  registerUser,
  logoutUser,
  getCurrentUser,
} from "../api/user.api";
import { toast } from "react-toastify";

// Create Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // =====================================
  // Load user when app starts
  // =====================================
  const loadUser = async () => {

    try {

      const token = localStorage.getItem("token");

      // If no token, skip API call
      if (!token) {
        setLoading(false);
        return;
      }

      const { data } = await getCurrentUser();

      // ApiResponse format
      setUser(data?.data || null);

    } catch (error) {

      // Token invalid or expired
      localStorage.removeItem("token");
      setUser(null);

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  // =====================================
  // REGISTER
  // =====================================
  const handleRegister = async (formData) => {

    try {

      const { data } = await registerUser(formData);

      toast.success(data?.message || "Registered successfully");

      return true;

    } catch (error) {

      toast.error(
        error?.response?.data?.message || "Registration failed"
      );

      return false;
    }
  };

  // =====================================
  // LOGIN
  // =====================================
  const handleLogin = async (formData) => {

    try {

      const { data } = await loginUser(formData);

      /*
      Expected response:

      {
        success:true,
        token:"JWT",
        user:{...}
      }
      */

      const token = data?.data?.token;
      const loggedUser = data?.data?.user;

      // Save token
      if (token) {
        localStorage.setItem("token", token);
      }

      // Save user
      setUser(loggedUser);

      toast.success(data?.message || "Login successful");

      return true;

    } catch (error) {

      toast.error(
        error?.response?.data?.message || "Login failed"
      );

      return false;
    }
  };

  // =====================================
  // LOGOUT
  // =====================================
  const handleLogout = async () => {

    try {

      await logoutUser();

      // Remove token
      localStorage.removeItem("token");

      setUser(null);

      toast.success("Logged out successfully");

    } catch (error) {

      toast.error("Logout failed");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        handleLogin,
        handleRegister,
        handleLogout,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
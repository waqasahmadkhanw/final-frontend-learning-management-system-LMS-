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

// ===============================
// Create Context
// ===============================
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ===============================
  // Load current user (on refresh)
  // ===============================
  const loadUser = async () => {
    try {

      const response = await getCurrentUser();
      const data = response?.data;

      if (data?.data) {
        setUser(data.data);
      } else {
        setUser(null);
      }

    } catch (error) {

      console.log("User not authenticated");
      setUser(null);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  // ===============================
  // REGISTER
  // ===============================
  const handleRegister = async (formData) => {

    try {

      const response = await registerUser(formData);
      const data = response?.data;

      toast.success(data?.message || "Registered Successfully");

      return true;

    } catch (error) {

      toast.error(
        error?.response?.data?.message || "Registration failed"
      );

      return false;
    }
  };

  // ===============================
  // LOGIN
  // ===============================
  const handleLogin = async (formData) => {

    try {

      const response = await loginUser(formData);
      const data = response?.data;

      console.log("Login response:", data);

      // Backend structure: data.data.user
      const loggedInUser = data?.data?.user;
      const accessToken = data?.data?.accessToken;

      if (!loggedInUser) {
        throw new Error("Invalid login response");
      }

      // Save user in state
      setUser(loggedInUser);

      // Save token (optional if using cookies)
      if (accessToken) {
        localStorage.setItem("token", accessToken);
      }

      toast.success(data?.message || "Login Successful");

      return true;

    } catch (error) {

      toast.error(
        error?.response?.data?.message ||
        error?.message ||
        "Login failed"
      );

      return false;
    }
  };

  // ===============================
  // LOGOUT
  // ===============================
  const handleLogout = async () => {

    try {

      await logoutUser();

      setUser(null);

      localStorage.removeItem("token");

      toast.success("Logged out successfully");

    } catch (error) {

      toast.error(
        error?.response?.data?.message ||
        "Logout failed"
      );

    }
  };

  // ===============================
  // Loader while checking auth
  // ===============================
  if (loading) {

    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          fontWeight: "500"
        }}
      >
        Loading application...
      </div>
    );

  }

  // ===============================
  // Provider
  // ===============================
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
      {children}
    </AuthContext.Provider>
  );
};

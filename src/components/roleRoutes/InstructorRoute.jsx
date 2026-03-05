import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Loader from "../common/Loader";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  // Show loader while checking auth
  if (loading) return <Loader message="Checking permissions..." />;

  // Not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Not instructor
  if (user.role !== "instructor") {
    return <Navigate to="/" />;
  }

  return children;
};

export default InstructorRoute;
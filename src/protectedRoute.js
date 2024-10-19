import { useUserAuth } from "./context/authProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth/signup");
    }
  });

  return children;
};

export default ProtectedRoute;

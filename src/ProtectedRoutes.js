import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const user = useSelector((state) => state.user.currentUser?.payload);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;

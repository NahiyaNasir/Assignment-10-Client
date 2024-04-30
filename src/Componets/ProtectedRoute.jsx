import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";


// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({children}) => {
    const {  user, loading } = useContext(AuthContext);
  console.log(user);
  const location = useLocation();
  console.log(location.pathname);
  if (loading) {
    return <div className="flex justify-center items-center">
      <span className="loading loading-bars loading-lg"></span>;
    </div>
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default ProtectedRoute;
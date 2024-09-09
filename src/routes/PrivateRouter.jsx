import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FadeLoader } from "react-spinners";

const PrivateRouter = ({ children }) => {
    const location = useLocation();
    console.log(location);
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="flex justify-center items-center my-96">
        <FadeLoader/>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location?.pathname}></Navigate>;
};

export default PrivateRouter;

import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRouter = ({children}) => {
    const {user} = useAuth();
   if (user) {
    return children;
   }
   return <Navigate to="/login"></Navigate>
};

export default PrivateRouter;
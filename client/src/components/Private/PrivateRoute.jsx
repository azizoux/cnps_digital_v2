import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = ({ currentUser }) => {
  console.log("Private:", currentUser);
  return currentUser ? <Outlet /> : <Navigate to={"/sign-in"} />;
};

export default PrivateRoute;

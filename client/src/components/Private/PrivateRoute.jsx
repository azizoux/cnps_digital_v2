import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { UserContext } from "../../UserContext";
import { useSelector } from "react-redux";
const PrivateRoute = () => {
  // const { currentUser } = useContext(UserContext);
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log("private", currentUser);
  return currentUser ? <Outlet /> : <Navigate to={"/sign-in"} />;
};

export default PrivateRoute;

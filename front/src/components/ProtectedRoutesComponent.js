import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { getTown } from "../store/actions/townActions";

const ProtectedRoutesComponent = () => {
  let userAuth = false;

  const see = localStorage.getItem("userInfo");
  console.log(see);
  if (see) {
    console.log(see);
    userAuth = true;
  }
  return userAuth ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutesComponent;

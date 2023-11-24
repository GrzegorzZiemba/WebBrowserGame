import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { getTown } from "../store/actions/townActions";

const ProtectedRoutesComponent = () => {
  let userAuth = false;

  let tokenInfo = localStorage.getItem("userToken");
  const dispatch = useDispatch();
  const town = dispatch(getTown(tokenInfo));
  const see = useSelector((state) => state);
  console.log(see);
  if (town) {
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

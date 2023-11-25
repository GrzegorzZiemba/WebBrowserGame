import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTown } from "../store/actions/townActions";
import Building from "../components/Building";
import Army from "../components/Army";
import Logins from "../components/Logins";
import KingdomNavbar from "../components/KingdomNavbar";
import { Container } from "react-bootstrap";
import Buildings from "../components/Buildings";

const Kingdom = () => {
  const town = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userInfo");

  useEffect(() => {
    dispatch(getTown(localStorage.getItem("userInfo")));
  }, []);

  return (
    <>
      {userId !== "" ? (
        <>
          <KingdomNavbar />
          <Container>
            <Buildings />
            <br /> <h1>Build an army</h1>
            <Army />
          </Container>
        </>
      ) : (
        <Logins />
      )}
    </>
  );
};

export default Kingdom;

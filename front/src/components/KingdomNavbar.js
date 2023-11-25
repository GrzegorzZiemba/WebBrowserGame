import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { logoutAccount } from "../store/actions/userActions";
import { useNavigate } from "react-router";
const KingdomNavbar = () => {
  const town = useSelector((state) => state.town.town);
  console.log(town);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">THE NAME OF THE GAME</Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end ">
          <Navbar.Brand>Wood: {town.wood}</Navbar.Brand>
          <Navbar.Brand>Stone: {town.stone}</Navbar.Brand>
          <Navbar.Brand>IronOre: {town.ironOre}</Navbar.Brand>
          <Button
            className="main-button"
            onClick={() => {
              dispatch(logoutAccount());
              navigate("/");
            }}
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default KingdomNavbar;

import React from "react";
import { Col, Container } from "react-bootstrap";
import Login from "../Forms/Login";
import Signup from "../Forms/Signup";

const Logins = () => {
	return (
		<Container style={{ display: "flex" }}>
			<Col>
				<h2>LOGIN</h2>
				<Login />
			</Col>
			<Col className="text-center">
				<h1>OR</h1>
			</Col>
			<Col>
				<h2>CREATE ACCOUNT</h2>
				<Signup />{" "}
			</Col>
		</Container>
	);
};

export default Logins;

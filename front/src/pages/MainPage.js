import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css";
const MainPage = () => {
	return (
		<Container style={{ display: "flex" }}>
			<Col>
				<Row className="text-center">
					<h1 className="bordered">Welcome to the webBrowserPixelGame</h1>
				</Row>
				<Row className="text-center">
					<NavLink to="/kingdom">
						<Button className="button">TO ADVENNTURE</Button>
					</NavLink>
				</Row>
				<Row className="text-center">
					<h3>To create the game I used React as front and Node as back.</h3>
					<h3>
						In React application there is some React-bootstrap and Redux as
						store managment
					</h3>
					<h3>
						In Node i used mailny Express and mongoose to manage MongoDB
						Database
					</h3>
					<h3>
						Simply CLICK "TO ADVENTURE" create your account and login and enjoy
						your stay there :-)
					</h3>
				</Row>
			</Col>
		</Container>
	);
};

export default MainPage;

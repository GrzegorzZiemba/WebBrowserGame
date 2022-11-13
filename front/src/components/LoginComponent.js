import React from "react";
import { useDispatch } from "react-redux";

import {
	logoutAccount,
	
} from "../store/actions/userActions";
import {

	useNavigate
} from "react-router-dom";
import { Button,  Container } from "react-bootstrap";
import "../App.css"
import Logins from "./Logins";

const LoginComponent = () => {
	const dispatch = useDispatch();
	let tokenInfo = localStorage.getItem("userInfo");
	let navigate = useNavigate();

	return (
		<Container className="viewport-height d-flex align-items-center justify-content-center">
		{/* >#BCAA99 / #8E5572</Button> */}
   
   
			{tokenInfo ? (
				<Button className='main-button'
					onClick={() => {
						dispatch(logoutAccount());
						navigate('/')
					}}
				>
					Logout
				</Button>
			) : (
				<Logins />
			)}
		
		</Container>
	);
};

export default LoginComponent;

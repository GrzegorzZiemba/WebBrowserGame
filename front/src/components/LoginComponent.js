import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Login from "../Forms/Login";
import * as Yup from "yup";
import {
	loginAccount,
	logoutAccount,
	createAccount,
} from "../store/actions/userActions";
import {
	BrowserRouter as Router,
	Switch,
	Redirect,
	Route,
	Link,
	useNavigate,
} from "react-router-dom";
import Signup from "../Forms/Signup";

const LoginComponent = () => {
	const dispatch = useDispatch();
	let tokenInfo = localStorage.getItem("userInfo");
	let navigate = useNavigate();

	return (
		<div>
			{tokenInfo ? (
				<button
					onClick={() => {
						dispatch(logoutAccount());
					}}
				>
					Logout
				</button>
			) : (
				<div style={{ display: "flex" }}>
					<div>
						<Login />
						{/* <Formik
							initialValues={{ email: "", password: "" }}
							validationSchema={Yup.object({
								email: Yup.string(),
								password: Yup.string(),
							})}
							onSubmit={(values, { setSubmitting }) => {
								setTimeout(() => {
									setSubmitting(false);

									dispatch(
										loginAccount({
											email: values.email,
											password: values.password,
										})
									);
								}, 400);
								setTimeout(() => {
									console.log(localStorage.getItem("userInfo"));
									if (localStorage.getItem("userInfo")) {
										handleClick();
									}
								}, 500);
							}}
						>
							<Form>
								<label htmlFor="email">E-mail</label>
								<Field
									style={{ size: "200px", width: "100%" }}
									name="email"
									type="text"
								/>
								<ErrorMessage
									name="email"
									component="div"
									style={{ color: "red" }}
								/>

								<label htmlFor="password">Password</label>
								<Field
									style={{ size: "200px", width: "100%" }}
									name="password"
									type="password"
								/>
								<ErrorMessage
									name="password"
									component="div"
									style={{ color: "red" }}
								/>

								<button type="submit">Submit</button>
							</Form>
						</Formik> */}
					</div>
					<div>
						<Signup />{" "}
						{/* <Formik
							initialValues={{ email: "", password: "" }}
							validationSchema={Yup.object({
								email: Yup.string(),
								password: Yup.string(),
							})}
							onSubmit={(values, { setSubmitting }) => {
								setSubmitting(false);

								dispatch(
									createAccount({
										username: values.username,
										email: values.email,
										password: values.password,
									})
								);
							}}
						>
							<Form>
								{" "}
								<label htmlFor="username">Username</label>
								<Field
									style={{ size: "200px", width: "100%" }}
									name="username"
									type="text"
								/>
								<ErrorMessage
									name="email"
									component="div"
									style={{ color: "red" }}
								/>
								<label htmlFor="email">E-mail</label>
								<Field
									style={{ size: "200px", width: "100%" }}
									name="email"
									type="text"
								/>
								<ErrorMessage
									name="email"
									component="div"
									style={{ color: "red" }}
								/>
								<label htmlFor="password">Password</label>
								<Field
									style={{ size: "200px", width: "100%" }}
									name="password"
									type="password"
								/>
								<ErrorMessage
									name="password"
									component="div"
									style={{ color: "red" }}
								/>
								<button type="submit">Submit</button>
							</Form>
						</Formik> */}
					</div>
				</div>
			)}
		</div>
	);
};

export default LoginComponent;

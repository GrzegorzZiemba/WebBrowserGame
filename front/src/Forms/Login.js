import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
	loginAccount,
	logoutAccount,
	createAccount,
} from "../store/actions/userActions";

const Login = () => {
	const dispatch = useDispatch();
	console.log("LOGIN FORM");
	return (
		<Formik
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
				<ErrorMessage name="email" component="div" style={{ color: "red" }} />

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
		</Formik>
	);
};

export default Login;

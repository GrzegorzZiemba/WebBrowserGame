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
const Signup = () => {
	const dispatch = useDispatch();

	return (
		<Formik
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
				<ErrorMessage name="email" component="div" style={{ color: "red" }} />
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

export default Signup;

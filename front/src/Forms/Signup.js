import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";

import * as Yup from "yup";
import { createAccount } from "../store/actions/userActions";
import "../App.css";
import { Button } from "react-bootstrap";
import { Navigate } from "react-router";

const Signup = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string(),
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
      <Form as="form">
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
        <Button className="button-main" type="submit">
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default Signup;

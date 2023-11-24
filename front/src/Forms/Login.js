import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loginAccount } from "../store/actions/userActions";
import { Button } from "react-bootstrap";
import "../App.css";
import { useNavigate } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

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
          user ? navigate("/kingdom") : navigate("/login");
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

        <Button className="button-main" type="submit">
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default Login;

import { Formik } from "formik";
import React from "react";

const Login = () => {
  return (
    <div className="login-page">
      <h1>Login</h1>

      <Formik initialValues={{}} onSubmit={() => {}}></Formik>
    </div>
  );
};

export default Login;

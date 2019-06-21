import React, { Component } from "react";
import { withRouter } from "react-router";
// import axios from 'axios';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import formValidation from "./form-validation";
import validateLogin from "./validate-login";
import firebase from "../../firebase";

const INITIAL_STATE = {
  email: "",
  password: ""
};

function Login(props) {
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    isSubmitting
  } = formValidation(INITIAL_STATE, validateLogin, authenticateUser);
  const [login, setLogin] = React.useState(true);
  const [firebaseError, setFirebaseError] = React.useState(null);

  async function authenticateUser() {
    const { email, password } = values;
    try {
      const response = login ? await firebase.login(email, password) : null;
      props.history.push("/");
      console.log({ response });
    } catch (err) {
      console.error("Authentication Error", err);
      setFirebaseError(err.message);
    }
  }

  return (
    <div>
      <h1 className="login-text">LOGIN</h1>
      <form onSubmit={handleSubmit} className="auth-form-wrapper">
        <div className="form-group">
          <FontAwesomeIcon icon="envelope" />
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className={errors.email && "error-input"}
            name="email"
            type="email"
            placeholder="Your email"
            autoComplete="off"
          />
          {/* {errors.email && <p className="error-text">{errors.email}</p>} */}
        </div>

        <div className="form-group">
          <FontAwesomeIcon icon="lock" />
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            values={values.password}
            className={errors.password && "error-input"}
            name="password"
            type="password"
            placeholder="Your password"
          />
          {/* {errors.password && <p className="error-text">{errors.password}</p>} */}
          {firebaseError && <p className="error-text">{firebaseError}</p>}
        </div>

        <button className="btn" type="submit" disabled={isSubmitting}>
          Login
        </button>
      </form>
    </div>
  );
}

export default withRouter(Login);

import React, { useState } from "react";
import styles from "./Signup.module.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const ChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className={styles.mainCantainer}>
        <form className={styles.formHolder} onSubmit={formSubmitHandler}>
          <h1
            style={{ marginTop: "1rem", color: "#365314", fontSize: "2.3rem" }}
          >
            SIGN UP{" "}
          </h1>
          <div className={styles.nameInputHolder}>
            <input
              type="text"
              name="FirstName"
              value={formData.FirstName}
              placeholder="Enter First Name"
              className={styles.inputboxName}
              onChange={ChangeHandler}
            />
            <input
              type="text"
              name="LastName"
              value={formData.LastName}
              placeholder="Enter Last Name"
              className={styles.inputboxName}
              onChange={ChangeHandler}
            />
          </div>

          <input
            type="email"
            name="Email"
            value={formData.Email}
            placeholder="Enter Email"
            className={styles.inputbox}
            onChange={ChangeHandler}
          />

          <input
            type="password"
            name="Password"
            value={formData.Password}
            placeholder="Enter Password"
            className={styles.inputbox}
            onChange={ChangeHandler}
          />

          <input
            type="password"
            name="ConfirmPassword"
            value={formData.ConfirmPassword}
            placeholder="Confirm Password"
            className={styles.inputbox}
            onChange={ChangeHandler}
          />

          <div className={styles.checkBoxCase}>
            <input
              type="checkbox"
              id="checkbox"
              style={{ marginRight: "10px" }}
              onChange={ChangeHandler}
            />
            <label htmlFor="checkbox">
              I accept the Terms of Use & Privacy Policy
            </label>
          </div>

          <button className={styles.SignupBtn}>Signup</button>
          <div style={{ margin: "10px" }}>
            <p>
              Already have an Account ?
              <Link to="/" style={{ color: "#f59e0b", fontWeight: "bold" }}>
                LOGIN HERE
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;

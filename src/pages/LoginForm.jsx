import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [form, setForm] = useState({
    Email: "",
    Password: "",
  });

  const onChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <div className={styles.container}>
        <form className={styles.formCase} onSubmit={onSubmitHandler}>
          <h1
            style={{ marginTop: "1rem", color: "#365314", fontSize: "2.3rem" }}
          >
            LOGIN
          </h1>
          <input
            type="email"
            name="Email"
            value={form.Email}
            placeholder="Enter Email"
            className={styles.inputBox}
            onChange={onChangeHandler}
          />
          <input
            type="password"
            name="Password"
            value={form.Password}
            placeholder="Enter Password"
            className={styles.inputBox}
            onChange={onChangeHandler}
          />
          <button className={styles.loginBtn}>Login</button>
          <div className={styles.para}>
            <p>
              Not a member?
              <Link
                to="/Signup"
                style={{ color: "#f59e0b", fontWeight: "bold" }}
              >
                SIGNUP NOW
              </Link>
            </p>
          </div>{" "}
        </form>
      </div>
    </>
  );
};

export default LoginForm;

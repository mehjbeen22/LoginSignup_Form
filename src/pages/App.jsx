import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Signup from "./Signup";
import { Route, Routes } from "react-router-dom";

const App = () => {
  //   const [signup, setSignup] = useState("Login");

  return (
    <>
      {/** <button
        onClick={() => {
          setSignup("Login");
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          setSignup("Signup");
        }}
      >
        SignUp
      </button>
      {signup === "Login" ? <LoginForm /> : <Signup />} 
    
      
    */}

      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;

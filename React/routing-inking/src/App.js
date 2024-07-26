import React from "react";
import "./App.css";
import Homepage from "./Homepage";
import AboutLittleLemon from "./AboutLittleLemon";
import { Routes, Route, Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./animations.css";

function App() {
  return (
    <div className="app-container">
      <div className="left-section">
        <div className="logo">X</div>
      </div>
      <div className="right-section">
        <h1>Happening now</h1>
        <h2>Join today.</h2>
        <div className="auth-buttons">
          <button className="auth-button google">Sign in with Google</button>
          <button className="auth-button apple">Sign up with Apple</button>
          <div className="or-divider">or</div>
          <button className="auth-button create-account">Create account</button>
        </div>
        <div className="signin-link">
          <p>Already have an account?</p>
          <button className="auth-button signin">Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default App;
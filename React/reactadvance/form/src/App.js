import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ControlledForm from "./ControlledForm";
import { UnControlledForm } from "./UnControlledForm";
function App() {
  return (
    <div>
      <p>hh js</p>
      <ControlledForm />
      <UnControlledForm />
    </div>
  );
}
export default App;

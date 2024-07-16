// App.js
import React from "react";
import "./App.css";
import { ModeProvider, useModeContext } from "./components/Context";

function App() {
  const { darkMode, handleClick } = useModeContext();

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <header>This button changes mode</header>
      <button onClick={handleClick}>Toggle Dark Mode</button>

      {darkMode ? (
        <p style={{ backgroundColor: "black", color: "white" }}>
          This is dark mode
        </p>
      ) : (
        <p>This is light mode</p>
      )}
    </div>
  );
}

function Root() {
  return (
    <ModeProvider>
      <App />
    </ModeProvider>
  );
}

export default Root;

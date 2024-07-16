import React from "react";
import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    // Add the code for the minus function
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
    // Add the code for the plus function
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    // Add the code for the divide function
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  function resetInput(e) {
    // Add the code for the resetInput function
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.value = null;
    }
  }

  function resetResult(e) {
    // Add the code for the resetResult function
    e.preventDefault();
    if (resultRef.current) {
      resultRef.current.value = null;
      setResult(0);
    }
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result} is resu1t</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>substract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput} className="reset">
          resetInput
        </button>
        <button onClick={resetResult} className="reset">
          resetResult
        </button>
        {/* Add the subtract button */}
        {/* Add the multiply button */}
        {/* Add the divide button */}
        {/* Add the resetInput button */}
        {/* Add the resetResult button */}
      </form>
    </div>
  );
}

export default App;

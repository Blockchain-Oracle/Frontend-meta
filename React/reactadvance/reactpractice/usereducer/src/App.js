import React, { useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  if (action.type === "increase") {
    return {
      ...state,
      money: state.money + 10,
    };
  } else if (action.type === "reduce") {
    return {
      ...state,
      money: state.money - 10,
    };
  }
  return state;
};

function App() {
  const intialState = {
    money: 2,
  };

  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <div>
      <header>little lemon stock calculator </header>
      <h1>stock {state.money}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increase" });
        }}
      >
        Add to stock
      </button>

      <button
        onClick={() => {
          dispatch({ type: "reduce" });
        }}
      >
        Reduce Stock
      </button>
    </div>
  );
}

export default App;

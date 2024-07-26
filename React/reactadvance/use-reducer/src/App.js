import React, { useReducer } from "react";
import "./App.css";

// Define action types as constants
const BUY_INGREDIENTS = "buy_ingredients";
const SELL_A_MEAL = "sell_a_meal";

// Reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
    case BUY_INGREDIENTS:
      return { money: state.money - 10 };
    case SELL_A_MEAL:
      return { money: state.money + 10 };
    default:
      return state;
  }
};

function App() {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Wallet: ${state.money}</h1>
      <div>
        <button onClick={() => dispatch({ type: BUY_INGREDIENTS })}>
          Shopping for veggies!
        </button>
        <button onClick={() => dispatch({ type: SELL_A_MEAL })}>
          Serve a meal to the customer
        </button>
      </div>
    </div>
  );
}

export default App;

import React, { useReducer } from "react";
import "./App.css";
import { AlertProvider, useAlert } from "./context/alertContext";
import useSubmit from "./hooks/useSubmit";
const { isloading, response, submit } = useSubmit();
const { onopen } = useAlert();
function App() {
  <AlertProvider>
    
  </AlertProvider>;
}

export default App;

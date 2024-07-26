import React from "react";
import "./App.css";
import FeedbackForm from "./FeedbackForm";

function App() {
  const handleSubmit = (props) => {
    console.log("Form submitted!", props.score, props.comment);
  };

  return (
    <div className="App">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;

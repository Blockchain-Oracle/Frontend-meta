import React, { useState } from "react";
import { RadioGroup } from "./componets/RadioGroup";
import RadioOptions from "./componets/RadioOptions";
import "./App.css";
function App() {
  const [selected, setSelected] = useState("");
  const handleChange = (e) => {
    setSelected(e.target.value);
  };
  return (
    <div>
      <p>selected tag is {selected}</p>
      <RadioGroup selected={selected} onChange={handleChange} name="socials">
        <RadioOptions value={"FaceBook"}>FaceBook</RadioOptions>
        <RadioOptions value={"Twitter"}>Twitter</RadioOptions>
        <RadioOptions value={"InstaGram"}>InstaGram</RadioOptions>
      </RadioGroup>
    </div>
  );
}
export default App;

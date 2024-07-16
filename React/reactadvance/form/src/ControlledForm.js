import React, { useState } from "react";
const ControlledForm = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form>
      <p>c0ntr011ed f0rm</p>
      <input value={value} onChange={handleChange} type="text" />
    </form>
  );
};

export default ControlledForm;

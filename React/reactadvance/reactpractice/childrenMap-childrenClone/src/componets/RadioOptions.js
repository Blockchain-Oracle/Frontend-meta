import React from "react";

const RadioOptions = ({ children, onChange, value, name }) => {
  return (
    <div className="radio-option">
      <input
        type="radio"
        id={children}
        value={value}
        onChange={onChange}
        name={name}
      />
      <label htmlFor={children}>{children}</label>
    </div>
  );
};

export default RadioOptions;

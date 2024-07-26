import React, { Children, cloneElement } from "react";

export const RadioGroup = ({ children, selected, onChange, name }) => {
  const radioOptions = Children.map(children, (child) =>
    cloneElement(child, {
      ...child.props,
      checked: child.props.value === selected,
      name: name,
      onChange: onChange,
    })
  );

  return <div className="radio-group">{radioOptions}</div>; // Adding a class for styling
};

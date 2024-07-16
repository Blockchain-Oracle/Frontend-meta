import React, { useRef } from "react";
const UnControlledForm = () => {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    const inputValue = inputRef.current.value;
    // Do something with the value
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>unc0ntr011ed f0rm</p>
      <input ref={inputRef} type="text" />
    </form>
  );
};

export { UnControlledForm };

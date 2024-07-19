import React, { Children, createContext, useContext, useState } from "react";

const alertContext = createContext(undefined);
export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isopen: false,
    type: "",
    message: "",
  });

  return (
    <alertContext.Provider
      value={{
        ...state,
        onopen: (type, message) => {
          setState({
            isopen: true,
            type: type,
            message: message,
          });
        },
        onClose: () =>
          setState({
            isopen: false,
            type: "",
            message: "",
          }),
      }}
    >
      {children}
    </alertContext.Provider>
  );
};
export const useAlert = () => useContext(alertContext);

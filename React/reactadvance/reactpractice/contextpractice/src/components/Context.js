import React, { createContext, useContext, useEffect, useState } from "react";

const Modecontext = createContext(undefined);

export const ModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    console.log("toolge button clicked");
  }, [darkMode]);

  return (
    <Modecontext.Provider value={{ darkMode, handleClick }}>
      {children}
    </Modecontext.Provider>
  );
};
export const useModeContext = () => useContext(Modecontext);

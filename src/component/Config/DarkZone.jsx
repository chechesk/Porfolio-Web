// DarkModeContext.js
import React, { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
    </div>
  );
};

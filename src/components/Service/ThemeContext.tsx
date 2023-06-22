import React, { createContext, useState, Dispatch, SetStateAction } from 'react';

interface ThemeContextProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}


const ThemeContext = createContext<ThemeContextProps>({
  darkMode: false,
  setDarkMode: () => {},
});

export const ThemeProvider = ({ children }:any) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
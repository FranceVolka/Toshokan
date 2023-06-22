import { createContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }:any) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
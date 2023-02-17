import React, { useContext, useState } from "react";

// Create a new context object
export const ThemeContext = React.createContext();

// Create a custom hook to get the current color theme
export function useTheme() {
  return useContext(ThemeContext);
}

// Create a custom hook to update the color theme
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

// Create a new context object for updating the color theme
export const ThemeUpdateContext = React.createContext();

export function ThemeProvider(props) {
  const [colorTheme, setColorTheme] = useState(false);

  function toggleTheme() {
    setColorTheme((prevColorTheme) => !prevColorTheme);
  }

  return (
    <ThemeContext.Provider value={colorTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {props.children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

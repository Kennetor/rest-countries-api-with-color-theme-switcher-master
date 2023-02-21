import React, { useContext, useState, useEffect } from "react";

// Create a new context object
export const ThemeContext = React.createContext();

// Create a custom hook to get the current color theme
export function useTheme() {
  return useContext(ThemeContext);
}

// Create a custom hook to update the color theme
export function useThemeUpdate() {
  const toggleTheme = useContext(ThemeUpdateContext);

  function handleClick() {
    console.log("Toggling theme");
    toggleTheme();
  }
  return handleClick;
}

// Create a new context object for updating the color theme
export const ThemeUpdateContext = React.createContext();

export function ThemeProvider(props) {
  const [colorTheme, setColorTheme] = useState(true);

  useEffect(() => {
    console.log("Theme updated:", colorTheme);
  }, [colorTheme]);

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

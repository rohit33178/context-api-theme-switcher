import React, { createContext, useContext } from "react";

export const ThemeContext = createContext({
    currentTheme: 'dark', 
    setDarkTheme: () => {},
    setLightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext);
}


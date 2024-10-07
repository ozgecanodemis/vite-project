import { createContext, useContext } from "react";

export const DarkModeContext
  = createContext({
    themeMode: "light",
    lightMode: () => { },
    darkMode: () => { },
  });

export const ThemeProvider = DarkModeContext
  .Provider;

export default function useMode() {
  return useContext(DarkModeContext

  );
}
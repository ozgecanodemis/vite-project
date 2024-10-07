import { createContext, useContext } from "react";

export const DarkModeBtn
  = createContext({
    themeMode: "light",
    lightTheme: () => { },
    darkTheme: () => { },
  });

export const ThemeProvider = DarkModeBtn
  .Provider;

export default function useTheme() {
  return useContext(DarkModeBtn

  );
}
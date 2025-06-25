"use client";
import { createContext, ReactNode, useState } from "react";

interface IThemeContext {
  modeContext: string;
  setModeContext: (mode: string) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  modeContext: "light",
  setModeContext: () => {},
});

interface IThemeProvider {
  children: ReactNode;
}

function ThemeProvider(props: IThemeProvider) {
  const [mode, setMode] = useState<string>("light");

  return (
    <ThemeContext value={{ modeContext: mode, setModeContext: setMode }}>
      {props.children}
    </ThemeContext>
  );
}
export default ThemeProvider;

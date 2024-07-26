import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container);

const Main = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

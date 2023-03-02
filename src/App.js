import React from "react";

import { theme } from './global/theme';
import { GlobalStyle } from "./global/globalCssConfig";
import { ThemeProvider } from "styled-components";

import { Home } from './pages/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
        <div className="App">
            <GlobalStyle />
            <Home />
        </div>
    </ThemeProvider>
  );
}

export default App;

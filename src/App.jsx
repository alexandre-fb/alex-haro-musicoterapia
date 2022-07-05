import { AppRoutes } from "./assets/pages/routes";
import { GlobalStyle } from "./styles/global-styles";
import { ThemeProvider } from "styled-components";
import { themeData } from "./styles/theme-data";

function App() {

  return (
    <ThemeProvider theme={ themeData }>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;

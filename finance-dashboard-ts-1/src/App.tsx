import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";


function App() {

  const theme = useMemo(() => createTheme(themeSettings), []);
  
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <h1>Hello</h1>
        </ThemeProvider>
      
    </div>
  );
}

export default App;

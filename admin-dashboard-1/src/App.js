import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme/theme';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {

  const router = createBrowserRouter([
    {path: '/',},
    {}
  ]);

  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div>
      <ThemeProvider theme={theme}> 
        <CssBaseline /> 
        <h1>Hello</h1>
        <HomePage/>
      </ThemeProvider>
    </div>
  );
}

export default App;

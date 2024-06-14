import { CssBaseline, ThemeProvider, Box } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme/theme';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayoutPage from './pages/layout/LayoutPage';
import ErrorPage from './pages/error/ErrorPage';
import Dashboard from './pages/dashboard/Dashboard';

function App() {

  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LayoutPage />,
      errorElement: <ErrorPage />, 
      children: [
        {
          path: '/dashboard',
          element: <Dashboard/>,
        },
        {
          path: '/products',
          element: null
        }
      ]
    },
  ]);

  return (
    <Box>
      <ThemeProvider theme={theme}> 
        <CssBaseline />
        <RouterProvider router={router}/>
        <h1>Hello</h1>
      </ThemeProvider>
    </Box>
  )
};

export default App;
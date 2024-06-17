import { Box, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme/theme';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootPage from './pages/layout/RootPage';
import ErrorPage from './pages/error/ErrorPage';
import Dashboard from './pages/dashboard/Dashboard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductsPage from './pages/products/ProductsPage';
import CustomersPage from './pages/customers/CustomersPage';
import TransactionsPage from './pages/transactions/TransactionsPage';
import GeographyPage from './pages/geography/GeographyPage';
import OverviewPage from './pages/overview/OverviewPage';
import DailyDataPage from './pages/daily/DailyDataPage';
import MonthlyDataPage from './pages/monthly/MonthlyDataPage';

function App() {
  
  // const mode = useSelector((state: any) => state.global.mode);
  // const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const queryClient = new QueryClient();

  const mode = useSelector((state: { 
    global: {
      mode: PaletteMode;
    };
  }) => state.global.mode);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage/>,
      errorElement: <ErrorPage />, 
      children: [
        {
          path: '/dashboard',
          element: <Dashboard/>
        },
        {
          path: '/products',
          element: <ProductsPage/>
        },
        {
          path: '/customers',
          element: <CustomersPage/>
        },
        {
          path: '/transactions',
          element: <TransactionsPage/>
        },
        {
          path: '/geography',
          element: <GeographyPage/>
        },
        {
          path: '/overview',
          element: <OverviewPage/>
        },
        {
          path: '/daily',
          element: <DailyDataPage/>
        },
        {
          path: '/monthly',
          element: <MonthlyDataPage/>
        }
      ]
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <Box>
        <ThemeProvider theme={theme}> 
          <CssBaseline /> 
          <RouterProvider router={router}/>
        </ThemeProvider>
      </Box>
    </QueryClientProvider>
  );
};

export default App;

import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { Box, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { useQuery } from '@tanstack/react-query';
import { getUserById } from '../../api/http';

type Props = {};

const RootPage = (props: Props) => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUserById('63701cc1f03239c72c00017f'),
  });

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="300px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  )
};

export default RootPage;
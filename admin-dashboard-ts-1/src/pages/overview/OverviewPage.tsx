import { Box, FormControl, InputLabel, MenuItem, Select, useMediaQuery } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getSales } from '../../api/http';
import Header from '../../components/header/Header';
import OverviewChart from '../../components/overviewchart/OverviewChart';
import { useState } from 'react';

type Props = {}

const OverviewPage = (props: Props) => {

    const isNonMobile = useMediaQuery("(min-width: 600px)");
    // const { data, isLoading } = useQuery({
    //     queryKey: ['products'],
    //     queryFn: () => getSales(),
    // });

    const [view, setView] = useState("sales");

    // const dataArray = Array.isArray(data) ? data : [];

    // if (!Array.isArray(data)) {
    //     console.error("Expected data to be an array, but got:", data);
    //     return <p>Error: Invalid data format</p>;
    // }

  return (
    <Box m="1.5rem 2.5rem">
        <Header title={'OVERVIEW'} subtitle={'Overview of general revenue and profit.'}/>
        <Box height="75vh">
            <FormControl sx={{ mt: "1rem" }}>
                <InputLabel>View</InputLabel>
                <Select value={view} onChange={(e) => setView(e.target.value)}>
                    <MenuItem value="sales">Sales</MenuItem>
                    <MenuItem value="units">Units</MenuItem>
                </Select>
            </FormControl>
            <OverviewChart view={view}/>
        </Box>
    </Box>
  )
};

export default OverviewPage;
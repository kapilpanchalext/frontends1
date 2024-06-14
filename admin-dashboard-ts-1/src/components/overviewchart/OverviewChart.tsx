import { Box, useTheme } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getSales } from '../../api/http';
import { useMemo } from 'react';
import { OverViewData } from '../../model/OverviewData';

type Props = {
    isDashboard?: boolean
    view: string
}

const OverviewChart = ({isDashboard = false , view}: Props) => {

    const theme = useTheme();
    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => getSales(),
    });

    const dataArray: OverViewData[] = Array.isArray(data) ? data : [];

    if (!Array.isArray(data)) {
        console.error("Expected data to be an array, but got:", data);
        return <p>Error: Invalid data format</p>;
    }

    // const [totalSalesLine, totalUnitsLine] = useMemo(() => {
    //     if(!data){
    //         return Array.of();
    //     }

    //     const { monthlyData } = data.month;

    // }, [data]);

  return (
    <Box>{JSON.stringify(dataArray[0].dailyData)}</Box>
  )
}

export default OverviewChart;
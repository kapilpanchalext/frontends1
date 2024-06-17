import { Box, useTheme } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
// import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { getSales, getSalesPlotDaily, getUnitsPlotDaily } from '../../api/http';
import { PlotMonthlyData } from '../../model/PlotMonthlyData';
import Header from '../../components/header/Header';

type Props = {}

const DailyDataPage = (props: Props) => {

    const [startDate, setStartDate] = React.useState(new Date("2021-02-01"));
    const [endDate, setEndDate] = React.useState(new Date("2021-03-01"));
    const theme = useTheme();

    const { data, isLoading } = useQuery({
        queryKey: ['sales'],
        queryFn: () => getSales(),
    });

    const { data: salesDataDaily, isLoading: isSalesLoading } = useQuery({
        queryKey: ['sales-plot-monthly'],
        queryFn: () => getSalesPlotDaily(),
    });

    const { data: unitsDataDaily, isLoading: isUnitsLoading } = useQuery({
        queryKey: ['units-plot-monthly'],
        queryFn: () => getUnitsPlotDaily(),
    });
    const salesDataDailyArray: PlotMonthlyData = salesDataDaily;
    const unitsDataDailyArray: PlotMonthlyData = unitsDataDaily;

    if (!Array.isArray(salesDataDaily.data) || !Array.isArray(unitsDataDaily.data)) {
        console.error("Expected data to be an array, but got:", salesDataDaily || unitsDataDaily);
        return <p>Error: Invalid data format</p>;
    }

  return (
    <Box m="1.5rem 2.5rem">
        <Header title={'DAILY DATA'} subtitle={'Overview of general revenue and profit.'}/>   
    </Box>

  )
}

export default DailyDataPage;
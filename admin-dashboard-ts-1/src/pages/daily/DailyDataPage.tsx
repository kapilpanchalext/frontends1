import { Box, useTheme } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { getSalesPlotDaily, getUnitsPlotDaily } from '../../api/http';
import { PlotMonthlyData } from '../../model/PlotMonthlyData';
import Header from '../../components/header/Header';
import { ResponsiveLine, Serie } from '@nivo/line';

type Props = {}

const DailyDataPage = (props: Props) => {

    const [startDate, setStartDate] = useState(new Date("2021-02-01"));
    const [endDate, setEndDate] = useState(new Date("2021-03-01"));
    const theme = useTheme();
    
    const { data: salesDataDaily, isLoading: isSalesLoading } = useQuery({
        queryKey: ['sales-plot-monthly'],
        queryFn: () => getSalesPlotDaily(startDate.getTime(), endDate.getTime()),
    });

    const { data: unitsDataDaily, isLoading: isUnitsLoading } = useQuery({
        queryKey: ['units-plot-monthly'],
        queryFn: () => getUnitsPlotDaily(startDate.getTime(), endDate.getTime()),
    });

    const salesDataDailyArray: PlotMonthlyData = salesDataDaily;
    const unitsDataDailyArray: PlotMonthlyData = unitsDataDaily;
    let totalDataPlot: Serie[] = [];

    if(!isSalesLoading || !isUnitsLoading) {
        if (!Array.isArray(salesDataDaily.data) || !Array.isArray(unitsDataDaily.data)) {
            console.error("Expected data to be an array, but got:", salesDataDaily.data || unitsDataDaily.data);
            return <p>Error: Invalid data format</p>;
        }

        totalDataPlot = [
            {
                id: 'Sales Data',
                data: salesDataDailyArray.data.map((data) => ({
                    x: data.x,
                    y: data.y,
                })),
            },
            {
                id: 'Units Data',
                data: unitsDataDailyArray.data.map((data) => ({
                    x: data.x,
                    y: data.y,
                })),
            },
        ];

        console.log(totalDataPlot);
    }

  return (
    <Box m="1.5rem 2.5rem">
        <Header title={'DAILY DATA'} subtitle={'Chart of Daily Sales.'}/>
        <Box height="75vh">
            {/* <Box justifyContent="flex-end" >*/}
                <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                />
                <DatePicker
                    selected={endDate}
                    onChange={(date: Date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                />
                
                <ResponsiveLine
                    data={ totalDataPlot.slice(0, 5) }
                    theme={{
                    axis: {
                        domain:{
                            line: {
                                stroke: theme.palette.secondary[200]
                            }
                        },
                        legend: {
                            text: {
                                fill: theme.palette.secondary[200]
                            },                                
                        },
                        ticks : {
                            line: {
                                stroke: theme.palette.secondary[200],
                                strokeWidth: 1
                            },
                            text: {
                                fill: theme.palette.secondary[200]
                            }
                        }
                    },
                    legends: {
                        text: {
                            fill: theme.palette.secondary[200]
                        },
                    },
                    tooltip: {
                        container: {
                            color: theme.palette.primary.main
                        }
                    }
                }}
                    margin={{ top: 50, right: 50, bottom: 70, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{
                        type: 'linear',
                        min: 'auto',
                        max: 'auto',
                        stacked: false,
                        reverse: false
                    }}
                    yFormat=" >-.2f"
                    curve="catmullRom"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 90,
                        legend: 'Month',
                        legendOffset: 60,
                        legendPosition: 'middle',
                        truncateTickAt: 0
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Total',
                        legendOffset: -50,
                        legendPosition: 'middle',
                        truncateTickAt: 0
                    }}
                    enableGridX={false}
                    enableGridY={false}
                    lineWidth={1}
                    pointSize={5}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={1}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabel="data.yFormatted"
                    pointLabelYOffset={-12}
                    enableTouchCrosshair={true}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'top-right',
                            direction: 'column',
                            justify: false,
                            translateX: 50,
                            translateY: 0,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
            {/* </Box> */}
        </Box>
    </Box>
  )
};

export default DailyDataPage;
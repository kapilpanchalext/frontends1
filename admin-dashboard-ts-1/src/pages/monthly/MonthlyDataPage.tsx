import { Box, useTheme } from '@mui/material';
import Header from '../../components/header/Header';
import { ResponsiveLine, Serie } from '@nivo/line';
import { useQuery } from '@tanstack/react-query';
import { getSalesPlotMonthly, getUnitsPlotMonthly } from '../../api/http';
import { PlotMonthlyData } from '../../model/PlotMonthlyData';
import { MonthsUtil } from '../../util/MonthsUtil';

type Props = {}

const MonthlyDataPage = (props: Props) => {
    const theme = useTheme();

    const { data: salesDataMonthly, isLoading: isSalesLoading } = useQuery({
        queryKey: ['sales-plot-monthly'],
        queryFn: () => getSalesPlotMonthly(),
        enabled: true
    });

    const { data: unitsDataMonthly, isLoading: isUnitsLoading } = useQuery({
        queryKey: ['units-plot-monthly'],
        queryFn: () => getUnitsPlotMonthly(),
        enabled: true
    });

    const salesDataArray: PlotMonthlyData = salesDataMonthly;
    const unitsDataArray: PlotMonthlyData = unitsDataMonthly;

    let totalDataPlot: Serie[] = [];

    if(!isSalesLoading && !isUnitsLoading) {
        if (!Array.isArray(salesDataMonthly.data) || !Array.isArray(unitsDataMonthly.data)) {
            console.error("Expected data to be an array, but got:", salesDataMonthly.data || unitsDataMonthly.data);
            return <p>Error: Invalid data format</p>;
        }

        totalDataPlot = [
            {
                id: 'Sales Data',
                data: salesDataArray.data.map((data) => ({
                    x: MonthsUtil.get(Number(data.x)),
                    y: data.y === null ? 0 : data.y,
                })),
            },
            {
                id: 'Units Data',
                data: unitsDataArray.data.map((data) => ({
                    x: MonthsUtil.get(Number(data.x)),
                    y: data.y === null ? 0: data.y,
                })),
            },
        ];
    }
    
  return (
    <Box m="1.5rem 2.5rem">
        <Header title={'MONTHLY DATA'} subtitle={'Chart of Monthly Sales.'}/>
        <Box height="75vh">
            <ResponsiveLine
                data={ totalDataPlot }
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
        </Box>
    </Box>
  )
}

export default MonthlyDataPage;
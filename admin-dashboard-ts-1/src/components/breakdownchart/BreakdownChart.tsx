import { Box, Typography, useTheme } from '@mui/material'
import { getSalesByCategory } from '../../api/http'
import { useQuery } from '@tanstack/react-query'
import { ResponsivePie } from '@nivo/pie'
import { SalesByCategory } from '../../model/SalesByCategoryData'

type Props = {
    isDashboard?: boolean
    view: string
}

type FormattedData = {
    id: string;
    label: string;
    value: number;
    colours: string;
};

const BreakdownChart = ({isDashboard = false , view}: Props) => {

    const theme = useTheme();

    const { data, isLoading } = useQuery({
        queryKey: ['sales-by-category'],
        queryFn: () => getSalesByCategory(),
    });

    const colours = [
        theme.palette.secondary[500],
        theme.palette.secondary[300],
        theme.palette.secondary[300],
        theme.palette.secondary[500],
    ];

    const salesByCategoryDataArray: SalesByCategory[] = data;
    let formattedData: FormattedData[]  = [];
    let yearlySalesTotal = 0;

    if(!isLoading) {
        if (!Array.isArray(data)) {
            console.error("Expected data to be an array, but got:", data);
            return <p>Error: Invalid data format</p>;
        }
        formattedData = Object.entries(salesByCategoryDataArray[0]).map(
            ([category, sales], i) => ({
                id: category,
                label: category,
                value: sales,
                colours: colours[i],
            })
        );
        yearlySalesTotal = Object.values(salesByCategoryDataArray[0]).reduce(
            (acc, curr) => acc + curr,
            0
        );

    }

return (
    <Box height={isDashboard ? '400px' : '100%'} 
        width='undefined'
        minHeight= {isDashboard ?"325px" : undefined}
        minWidth= {isDashboard ?"325px" : undefined}
        position="relative"
        >
        <ResponsivePie
            data={formattedData}
            margin={isDashboard ? { top: 40, right: 80, bottom: 100, left: 50 } : 
                                  { top: 40, right: 80, bottom: 80, left: 80 }}
            sortByValue={true}
            innerRadius={0.45}
            activeOuterRadiusOffset={8}
            enableArcLinkLabels={!isDashboard}
            borderWidth={1}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.2
                    ]
                ]
            }}
            arcLinkLabelsTextColor={theme.palette.secondary[200]}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        2
                    ]
                ]
            }}
            theme={{
                axis: {
                    domain: {
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
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: isDashboard ? 20 : 0,
                    translateY: isDashboard ? 50 : 56,
                    itemsSpacing: 0,
                    itemWidth: 85,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: theme.palette.primary[500]
                            }
                        }
                    ]
                }
            ]}
        />
        <Box position="absolute" 
            top="50%" 
            left="50%"
            color={theme.palette.secondary[400]}
            textAlign="center"
            sx={{
                transform: isDashboard ? "translate(-75%, -170%)" : "translate(-50%, -100%)"
            }}>
            <Typography variant='h4'>
                { !isDashboard && "Total: " } ${ yearlySalesTotal }
            </Typography>
        </Box>
    </Box>
  )
}

export default BreakdownChart;
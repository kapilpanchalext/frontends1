import { useTheme } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getSales, getSalesPlotOverview, getUnitsPlotOverview } from '../../api/http';
import { PlotMonthlyData } from '../../model/PlotMonthlyData';
import { ResponsiveLine, Serie } from '@nivo/line';
import { MonthsUtil } from '../../util/MonthsUtil';

type Props = {
    isDashboard?: boolean
    view: string
}

const OverviewChart = ({isDashboard = false , view}: Props) => {
    const theme = useTheme();
    const { data, isLoading } = useQuery({
        queryKey: ['sales'],
        queryFn: () => getSales(),
    });

    const { data: salesData, isLoading: isSalesLoading } = useQuery({
      queryKey: ['sales-plot-overview'],
      queryFn: () => getSalesPlotOverview(),
    });

    const { data: unitsData, isLoading: isUnitsLoading } = useQuery({
      queryKey: ['units-plot-overview'],
      queryFn: () => getUnitsPlotOverview(),
    });

    const salesDataArray: PlotMonthlyData = salesData;
    const unitsDataArray: PlotMonthlyData = unitsData;
    let salesDataPlot: Serie[] = [];
    let unitsDataPlot: Serie[] = [];
    if(!isLoading || !isSalesLoading || !isUnitsLoading) {
        if (!Array.isArray(data) || !Array.isArray(salesData.data) || !Array.isArray(unitsData.data)) {
            console.error("Expected data to be an array, but got:", data);
            return <p>Error: Invalid data format</p>;
        }
        salesDataPlot = [
            {
              id: 'Sales Data',
              data: salesDataArray.data.map((data) => ({
                    x: MonthsUtil.get(Number(data.x)),
                    y: data.y,
              })),
            },
        ];
      
        unitsDataPlot = [
            {
                id: 'Units Data',
                data: unitsDataArray.data.map((data) => ({
                    x: MonthsUtil.get(Number(data.x)),
                    y: data.y,
                })),
            },
        ];
    }

  return (
      <ResponsiveLine
        data={ view === "sales" ? salesDataPlot : unitsDataPlot }
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
        margin={{ top: 20, right: 50, bottom: 50, left: 70 }}
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
            format: (v) => {
                if (isDashboard) return v.slice(0, 3);
                return v;
            },
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard? '': 'Month',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickValues: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard? '': `${view === 'sales' ? 'Revenue' : 'Units'} for Year`,
            legendOffset: -60,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        enableGridX={false}
        enableGridY={false}
        lineWidth={1}
        pointSize={5}
        enableArea={isDashboard}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={1}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={ !isDashboard ? [
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 30,
                translateY: -40,
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
        ] : undefined }
    />
  )
};

export default OverviewChart;
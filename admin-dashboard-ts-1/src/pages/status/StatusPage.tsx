import { Box, LinearProgress, Rating, useMediaQuery, useTheme } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getProductsStats } from '../../api/http';
import { ProductStatData } from '../../model/ProductStatData';
import Header from '../../components/header/Header';
import { DataGrid, GRID_STRING_COL_DEF, GridColDef, GridColTypeDef, GridRenderCellParams, GridSlots } from '@mui/x-data-grid';
import { SparkLineChart } from '@mui/x-charts';

type Props = {}

const StatusPage = (props: Props) => {
    
    const theme = useTheme();
    const COLUMN_WIDTH = 200;
    const isNonMobile = useMediaQuery("(min-width: 600px)");

    const { data: productStatData, isLoading } = useQuery({
        queryKey: ['product-stat-data'],
        queryFn: () => getProductsStats(),
    });

    const dataArray: ProductStatData[] = Array.isArray(productStatData) ? productStatData : [];

    type SparkLineChartProps = React.ComponentProps<typeof SparkLineChart>;

    function GridSparklineCell(props: GridRenderCellParams & {plotType?: SparkLineChartProps['plotType'];},) {
        if (props.value == null) {
            return null;
        }
        return (
            <SparkLineChart
                data={props.value}
                width={props.colDef.computedWidth}
                plotType={props.plotType}
            />
        );
    }

    const sparklineColumnType: GridColTypeDef<number[]> = {
        ...GRID_STRING_COL_DEF,
        type: 'custom',
        resizable: false,
        filterable: false,
        sortable: false,
        editable: false,
        groupable: false,
        display: 'flex',
        renderCell: (params) => <GridSparklineCell {...params} />,
    };

    const columns: GridColDef<(typeof rows)[number]>[] = [
        { 
          field: 'id', 
          headerName: 'Product Id', 
          width: COLUMN_WIDTH + COLUMN_WIDTH
        },
        {
          field: 'sales',
          ...sparklineColumnType,
          headerName: 'Sales per Month',
          renderCell: (params) => <GridSparklineCell {...params} plotType="line" />,
          width: COLUMN_WIDTH,
          valueGetter: (value, row) => row.monthlySales,
        },
        {
            field: 'cumulativeSales',
            ...sparklineColumnType,
            headerName: 'Cumulative Sales per Month',
            renderCell: (params) => <GridSparklineCell {...params} plotType="line" />,
            width: COLUMN_WIDTH,
            valueGetter: (value, row) => row.cumulativeSales,
          },
        {
          field: 'units',
          ...sparklineColumnType,
          headerName: 'Units per Month',
          renderCell: (params) => <GridSparklineCell {...params} plotType="bar" />,
          width: COLUMN_WIDTH,
          valueGetter: (value, row) => row.monthlyUnits,
        },
        {
          field: 'rating',
          headerName: 'Rating',
          type: 'number',
          renderCell: (params) => <Rating value={params.row.rating} readOnly/>,
          width: COLUMN_WIDTH,
        },
        {
          field: 'total',
          headerName: 'Total Sales per Month',
          type: 'number',
          valueGetter: (value, row) =>
            row.monthlySales[row.monthlySales.length - 1] * 
            row.monthlyUnits[row.monthlyUnits.length - 1],
            width: COLUMN_WIDTH,
        },
    ];
    let runningTotal = 0;
    const rows = dataArray.map((data, index) => ({
        name: data.id,
        monthlySales: data.monthlyData.map((value) => value.totalSales),
        monthlyUnits: data.monthlyData.map((value) => value.totalUnits),
        cumulativeSales: data.monthlyData.map((value) => {
            runningTotal += value.totalSales;
            return runningTotal;
        }),
        rating: Math.floor(Math.random() * 5) + 1,
        id: data.id,
    }));

  return (
    <Box m="1.5rem 2.5rem">
        <Header title={'STATUS'} subtitle={'Track your Affiliate Sales performance here.'}/>
        <Box mt="40px" 
            height="75vh" 
            sx={{
                "& .MuiDataGrid-root": {
                    border: "none",
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: theme.palette.background.alt,
                    color: theme.palette.secondary[100],
                    borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: theme.palette.primary[1000],
                },
                "& .MuiDataGrid-footerContainer": {
                    backgroundColor: theme.palette.primary[1000],
                    color: theme.palette.secondary[100],
                    borderTop: "none",
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {                    
                    color: `${theme.palette.secondary[100]} !important`,
                    borderTop: "none",
                },
            }}>
            <DataGrid slots={{
                    loadingOverlay: LinearProgress as GridSlots['loadingOverlay'],
                    }} 
                    rows={rows} 
                    columns={columns} />
        </Box>
    </Box>
  )
}

export default StatusPage;
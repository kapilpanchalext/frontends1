import { Box, Button, CircularProgress, LinearProgress, Rating, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getProductsStats, getUserById } from '../../api/http';
import Header from '../../components/header/Header';
import { DownloadOutlined, Email, PersonAdd, PointOfSale, Traffic } from '@mui/icons-material';
import StatBox from '../../components/statbox/StatBox';
import OverviewChart from '../../components/overviewchart/OverviewChart';
import { DataGrid, GRID_STRING_COL_DEF, GridColDef, GridColTypeDef, GridRenderCellParams, GridSlots } from '@mui/x-data-grid';
import { ProductStatData } from '../../model/ProductStatData';
import { SparkLineChart } from '@mui/x-charts';
import BreakdownChart from '../../components/breakdownchart/BreakdownChart';

type Props = {}

const Dashboard = ({}: Props) => {
    
   const theme = useTheme();
   const isNonMobile = useMediaQuery("(min-width: 600px)");
   const { data, isPending, isError, error } = useQuery({
      queryKey: ['user'],
      queryFn: () => getUserById('63701cc1f03239c72c00017f'),
   });

   if(isPending){
      const content = <CircularProgress />;
      // alert('Data fetch is Pending...');
   }

   const COLUMN_WIDTH = 200;

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
         width: COLUMN_WIDTH
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
         width: COLUMN_WIDTH/2,
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
   const rows = dataArray.map((data, index) => ({
       name: data.id,
       monthlySales: data.monthlyData.map((value) => value.totalSales),
       monthlyUnits: data.monthlyData.map((value) => value.totalUnits),
       rating: Math.floor(Math.random() * 5) + 1,
       id: data.id,
   }));

  return (
    <Box m="1.5rem 2.5rem">
      <Header title={'DASHBOARD'} subtitle={'Welcome To The Dashboard.'}/>
      <Box>
        <Button sx={{ 
            backgroundColor: theme.palette.primary.light, 
            color: theme.palette.grey[100], 
            fontSize: "14px", 
            fontWeight: "bold", 
            padding: "10px 20px"
          }}>
            <DownloadOutlined sx={{mr: "10px"}}/>Download Reports</Button>
      </Box>
      <Box mt="20px" 
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="160px"
          gap="20px"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 12" },
          }}
          >

        {/* ROW 1 */}
        <StatBox title="Total Customers" value={300} increase={"+14%"} icon={<Email sx={{color: theme.palette.secondary[300], fontSize:"26px"}}/>} description="Since last month"/>
        <StatBox title="Sales Today" value={123} increase={"+21%"} icon={<PointOfSale sx={{color: theme.palette.secondary[300], fontSize:"26px"}}/>} description="Since last month"/>
        <Box gridColumn={"span 8"} 
            gridRow={"span 2"} 
            bgcolor={theme.palette.background.alt}
            p={"1rem 2rem"}
            borderRadius={"0.55rem"}>
              <OverviewChart view="sales" isDashboard={true}/>
            </Box>
        
        <StatBox title="Monthly Sales" value={456} increase={"+5%"} icon={<PersonAdd sx={{color: theme.palette.secondary[300], fontSize:"26px"}}/>} description="Since last month"/>
        <StatBox title="Yearly Sales" value={789} increase={"+43%"} icon={<Traffic sx={{color: theme.palette.secondary[300], fontSize:"26px"}}/>} description="Since last month"/>

        {/* ROW 2 */}
        <Box gridColumn={"span 8"} 
             gridRow={"span 3"} 
             sx={{
                "& .MuiDataGrid-root": {
                    border: "none",
                    borderRadius: "5rem",
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
                    backgroundColor: theme.palette.background.alt,
                },
                "& .MuiDataGrid-footerContainer": {
                    backgroundColor: theme.palette.background.alt,
                    color: theme.palette.secondary[100],
                    borderTop: "none",
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {                    
                    color: `${theme.palette.secondary[100]} !important`,
                    borderTop: "none",
                },
            }} >
             <DataGrid slots={{
                    loadingOverlay: LinearProgress as GridSlots['loadingOverlay'],
                    }} 
                    rows={rows} 
                    columns={columns} />
        </Box>
        <Box gridColumn={"span 4"} 
            gridRow={"span 3"} 
            bgcolor={theme.palette.background.alt} 
            p={"1.5rem"}
            borderRadius={"0.55rem"}
            >
              <Typography variant="h6" sx={{color: theme.palette.secondary[100]}} >
                Sales By Category
              </Typography>
              <BreakdownChart isDashboard={true} view={"Dashboard"}/>
              <Typography p={"0 0.6rem"} fontSize={"0.8rem"} color={theme.palette.secondary[200]}>
                Breakdown of real states and information via category for revenue made for this year and total sales. 
              </Typography>
        </Box>
      </Box>
    </Box>
  )
};

export default Dashboard;
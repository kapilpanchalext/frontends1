import { Box, useTheme } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getAffiliateSales } from '../../api/http';
import Header from '../../components/header/Header';
import { DataGrid } from '@mui/x-data-grid';
import { AffiliateSales } from '../../model/AffiliateSalesData';

type Props = {}

const AffiliateSalesPage = (props: Props) => {

    const theme = useTheme();
    const { data, isLoading } = useQuery({
        queryKey: ['affiliate-sales'],
        queryFn: () => getAffiliateSales(),
    });

    let dataArray: AffiliateSales[] = [];

    console.log(JSON.stringify(dataArray));
    
    if (!Array.isArray(data)) {
        console.error("Expected data to be an array, but got: ", data);
        return <p>Error: Invalid data format</p>;
    }

    if(!isLoading){
        dataArray = Array.isArray(data) ? data : [];
    }

    const columns = [
        {
            field: "id",
            headerName: "Id",
            flex: 0.5,
        },
        {
            field: "userId",
            headerName: "User Id",
            flex: 0.5,
        },
        {
            field: "productId",
            headerName: "ProductId",
            flex: 0.5,
        },
        {
            field: "name",
            headerName: "Product Name",
            flex: 0.5,
        },
        {
            field: "description",
            headerName: "Description",
            flex: 1,
        },
        {
            field: "category",
            headerName: "Category",
            flex: 0.4,
        },
        {
            field: "quantity",
            headerName: "Quantity",
            flex: 0.4,
        },
        {
            field: "price",
            headerName: "Price",
            flex: 0.4,
        },
    ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title={'AFFILIATE SALES'} subtitle={'List of users with affiliate sales Products.'}/>
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
                  backgroundColor: theme.palette.primary.light,
              },
              "& .MuiDataGrid-footerContainer": {
                  backgroundColor: theme.palette.primary[700],
                  color: theme.palette.secondary[100],
                  borderTop: "none",
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {                    
                  color: `${theme.palette.secondary[100]} !important`,
                  borderTop: "none",
              },
            }}>
            <DataGrid 
              loading={isLoading || !dataArray} 
              rows={dataArray || []} 
              columns={columns}
            //   getRowId={(row) => row.userId}
            />
        </Box>
    </Box>
  )
}

export default AffiliateSalesPage;
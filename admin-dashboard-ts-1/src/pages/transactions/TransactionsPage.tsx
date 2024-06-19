import { Box, useMediaQuery, useTheme } from '@mui/material';
import { getTransactionsPagination } from '../../api/http';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Header from '../../components/header/Header';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { PaginationData } from '../../model/PaginationData';
import DatagridCustomToolbar from '../../components/customtoolbar/DatagridCustomToolbar';


type Props = {}

const TransactionsPage = (props: Props) => {

    const theme = useTheme();
    const isNonMobile = useMediaQuery("(min-width: 600px)");

    // const [page, setPage] = useState(0);
    // const [pageSize, setPageSize] = useState(20);

    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 20,
      });

    const { data, isLoading } = useQuery({
        queryKey: ['pagination', paginationModel.page, paginationModel.pageSize],
        queryFn: () => getTransactionsPagination(paginationModel.page, paginationModel.pageSize),
    });
    
    const dataArray: PaginationData = data;

    if (!Array.isArray(data?.content)) {
        console.error("Expected data to be an array, but got:", data);
        return <p>Error: Invalid data format</p>;
    }

    const columns = [
        {
            field: "id",
            headerName: "Id",
            flex: 1,
        },
        {
            field: "userId",
            headerName: "UserId",
            flex: 1,
        },
        {
            field: "createdDate",
            headerName: "Created At",
            flex: 1,
        },
        {
            field: "products",
            headerName: "No of Products",
            flex: 0.5,
            sortable: false,
            renderCell: ((params: any) => params.value.length),
        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: ((params: any) => `$${Number(params.value).toFixed(2)}`),
        },
    ];

  return (
    <Box m="1.5rem 2.5rem">
        <Header title="TRANSACTIONS" subtitle="Entire list of transactions" />
        <Box
            height="80vh"
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
                slots={{ toolbar: DatagridCustomToolbar }}
                rows={(dataArray.content) || []}
                columns={columns}
                rowCount={dataArray.totalElements}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: paginationModel.pageSize, page: paginationModel.page 
                        },
                    },                    
                }}
                pageSizeOptions={[5, 10, 20, 25, 50, 100]}
                disableRowSelectionOnClick
                paginationMode="server"
                paginationModel={paginationModel}                
                onPaginationModelChange={(model) => setPaginationModel(model)}
            />
        </Box>
    </Box>
  )
};

export default TransactionsPage;
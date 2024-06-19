import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../api/http';
import Header from '../../components/header/Header';
import { DataGrid } from '@mui/x-data-grid';
import { UserData } from '../../model/UserData';

type Props = {}

const CustomersPage = (props: Props) => {

    const theme = useTheme();
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const { data, isLoading } = useQuery({
        queryKey: ['customers'],
        queryFn: () => getUsers(),
    });
    
    const dataArray: UserData[] = Array.isArray(data) ? data : [];
    
    if (!Array.isArray(data)) {
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
            field: "name",
            headerName: "Name",
            flex: 0.5,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "phoneNumber",
            headerName: "Phone Number",
            flex: 0.5,
            renderCell: ((params: any) => {
                return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
            })
        },
        {
            field: "country",
            headerName: "Country",
            flex: 0.4,
        },
        {
            field: "occupation",
            headerName: "Occupation",
            flex: 1,
        },
        {
            field: "role",
            headerName: "Role",
            flex: 0.5,
        },
    ];

    return (
        <Box m="1.5rem 2.5rem">
            <Header title={'CUSTOMERS'} subtitle={'List of Customers.'}/>
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
                    getRowId={(row) => row.id}
                />
            </Box>
        </Box>
    )
};

export default CustomersPage;

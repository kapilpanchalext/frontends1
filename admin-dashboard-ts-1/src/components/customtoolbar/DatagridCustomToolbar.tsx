import { GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport } from '@mui/x-data-grid';
import React from 'react';
import FlexBetween from '../flexbetween/FlexBetween';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';

type Props = {}

const DatagridCustomToolbar = (props: Props) => {
  return (
    <GridToolbarContainer> 
        <FlexBetween width="100%">
            <FlexBetween>
                <GridToolbarColumnsButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport />                
            </FlexBetween>
            <TextField 
                label="Search..."
                sx={{mb: "0.5rem", width: "15rem"}}
                InputProps={{
                    endAdornment: 
                    <InputAdornment position="end">
                        <IconButton onClick={() => console.log("search")}>
                            <Search />
                        </IconButton>
                    </InputAdornment>
                }}
            />
        </FlexBetween>
    </GridToolbarContainer>
  )
}

export default DatagridCustomToolbar;
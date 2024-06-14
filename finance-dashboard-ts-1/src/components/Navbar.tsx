import { Box, useTheme } from "@mui/material";


type Props = {}

const Navbar = (props: Props) => {

    const theme = useTheme();

  return (
    <Box sx={{"& .hover: hover": {color: theme.palette.primary[100]}}}
    > </Box>
  )
}

export default Navbar;
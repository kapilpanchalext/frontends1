import { Box, BoxProps, styled } from "@mui/material";

const FlexBetween = styled(Box)<BoxProps>(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }));

export default FlexBetween;
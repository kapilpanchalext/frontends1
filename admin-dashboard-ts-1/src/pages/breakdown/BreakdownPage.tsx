import { Box, useTheme } from '@mui/material';
import Header from '../../components/header/Header';
import BreakdownChart from '../../components/breakdownchart/BreakdownChart';

type Props = {}

const BreakdownPage = (props: Props) => {

    const theme = useTheme();

  return (
    <Box m="1.5rem 2.5rem">
        <Header title={'BREAKDOWN CHART'} subtitle={'BreakDown of sales by category.'}/>
        <Box mt="40px" height="75vh">
            <BreakdownChart view={'misc'} />
        </Box>
    </Box>
  )
}

export default BreakdownPage;
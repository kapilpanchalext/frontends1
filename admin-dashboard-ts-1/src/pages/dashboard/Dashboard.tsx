import { Box, CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getUserById } from '../../api/http';

type Props = {}

const Dashboard = ({}: Props) => {

   const { data, isPending, isError, error } = useQuery({
      queryKey: ['user'],
      queryFn: () => getUserById('63701cc1f03239c72c00017f'),
   });

   if(isPending){
      const content = <CircularProgress />;
      // alert('Data fetch is Pending...');
   }

  //  if(data) {
  //   alert(JSON.stringify(data));
  //  }

  //  if(isError){
  //   alert(JSON.stringify(error));
  //  }

  return (
    <Box>
      <h5>{JSON.stringify(data)}</h5>
    </Box>
  )
};

export default Dashboard;
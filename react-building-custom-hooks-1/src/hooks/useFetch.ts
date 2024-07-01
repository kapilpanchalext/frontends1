import { useEffect, useState } from 'react'
import { Place } from '../model/DataFiles';

type Props = {
    fetchFn: () => Promise<Place[]>
}

const useFetch = ({fetchFn}: Props) => {

    const[isFetching, setIsFetching] = useState<boolean>(false);
    const[error, setError] = useState<any>();
    const[fetchData, setFetchData] = useState<Place[]>([]);

    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const data = await fetchFn();
            setFetchData(data);
          } catch (error: any) {
            setError({ message: error.message || 'Failed to fetch data.' });
          }
          setIsFetching(false);
        }
        fetchData();
    }, [fetchFn]);

    return {isFetching,error,fetchData}
}

export default useFetch;
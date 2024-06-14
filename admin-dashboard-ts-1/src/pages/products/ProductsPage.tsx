import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../../api/http';
import { Box, useMediaQuery } from '@mui/material';
import Header from '../../components/header/Header';
import Product from '../../components/product/Product';
import { ProductData } from '../../model/ProductData';

type Props = {}

const ProductsPage = (props: Props) => {

    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => getProducts(),
    });

    const dataArray: ProductData[] = Array.isArray(data) ? data : [];

    if (!Array.isArray(data)) {
        console.error("Expected data to be an array, but got:", data);
        return <p>Error: Invalid data format</p>;
    }

    return (
        <Box m="1.5rem 2.5rem">
            <Header title={'PRODUCTS'} subtitle={'See your list of products.'}/>
            {data || !isLoading ? (
                <Box mt="20px" 
                    display="grid" 
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))" 
                    justifyContent="space-between"
                    rowGap="20px"
                    columnGap="1.33%"
                    sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }}}>
                       {dataArray.map(({id, name, description, price, rating, category, supply, stat}: ProductData) => (
                            <Product 
                                key={id} 
                                id={id} 
                                name={name} 
                                description={description} 
                                price={price} 
                                rating={rating} 
                                category={category} 
                                supply={supply} 
                                stat={stat}/>
                       ))} 
                </Box>
            ) : (<>Loading...</>)}
        </Box>
    )
};

export default ProductsPage;
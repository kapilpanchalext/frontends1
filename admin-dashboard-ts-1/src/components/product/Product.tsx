import { Button, Card, CardActions, CardContent, Collapse, Rating, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { ProductData } from '../../model/ProductData';

const Product = ({id, name, description, price, rating, category, supply, stat}: ProductData) => {

    const theme = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Card sx={{
            backgroundImage: "none",
            backgroundColor: theme.palette.background.alt,
            borderRadius: "0.55rem",
        }}>
            <CardContent>
                <Typography sx={{ fontSize: "14px", color: theme.palette.secondary[700] }} gutterBottom>{category}</Typography>
                <Typography variant="h5" component="div">{name}</Typography>
                <Typography sx={{ mb: "1.5rem", color: theme.palette.secondary[400]}}>${Number(price).toFixed(2)}</Typography>
                <Rating value={rating} readOnly></Rating>
                <Typography variant="body2">{description}</Typography>
            </CardContent>
            <CardActions>
                <Button variant='outlined' size='small' onClick={() => setIsExpanded(!isExpanded)}>See More</Button>
            </CardActions>
            <Collapse in={isExpanded} timeout="auto" unmountOnExit sx={{ color: theme.palette.neutral[300] }}>
                <CardContent>
                    <Typography>id: {id}</Typography>
                    <Typography>Supply Left: {supply}</Typography>
                    <Typography>Yearly sales this year: {Number(supply)*150}</Typography>
                    <Typography>Yearly units sold this year: {Number(supply)*10}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
};

export default Product;
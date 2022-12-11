import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from "@mui/material";
import { fetchProduct } from '../../store/product';

const TitleDiv = styled('a')(({ theme, color = "#6065D8" }) => ({
    textAlign: 'left',
    fontFamily: 'Oswald, sans-serif',
    fontSize: '25px',
    fontWeight: 500
}));


const Product = ({ product: { image, name, price, description, id }, index }) => {

    console.log(name, image, price, description)

    const navigate = useNavigate();

    return (
        <Card sx={{ maxWidth: 369, marginRight: '16px', marginBottom: '16px' }}>
            <CardActionArea onClick={() => { navigate(`detail/${id}`) }}>
                <CardMedia
                    component="img"
                    height="461.25"
                    src={image}
                    alt="green iguana"
                    sx={{ borderRadius: '5px' }}
                />
                <CardContent sx={{ borderBottom: 'transparent', borderColor: 'white', boxShadow: 0 }}>
                    <TitleDiv>
                        <Typography gutterBottom variant="a" component="div">
                            {name}
                        </Typography>
                    </TitleDiv>
                    <Typography color="#1E9C99" sx={{ textAlign: 'left', fontWeigth: 800, fontSise: '1.6rem', letterSpacing: '0.1rem' }}>
                        From ₹ {Math.floor(price)}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Product;
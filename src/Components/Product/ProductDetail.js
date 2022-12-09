import * as React from 'react';
import { styled } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProduct } from '../../store/product';
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { maxWidth } from '@mui/system';


const DetailImg = styled('img')(() => ({
    height: '800px',
    width: '700px',
    borderRadius: '10px'
}));

const ProductNameStyle = styled('h1')(() => ({
    textAlign: 'left',
    fontFamily: 'Oswald, sans-serif',
    fontSize: '35px',
    fontWeight: 500,
    color: '#212529',
    lineHeight: '1.2',
    letterSpacing: '0.7px'
}));

const DetailText = styled('div')(() => ({
    marginLeft: '80px',
    maxWidth: '600px'
}));

const PriceStyle = styled('div')(() => ({
    fontSize: '25px',
    color: '#1E9C99',
    fontWeight: 700,
    textAlign: 'left',
    letterSpacing: '.13rem'
}));

const DimensionDiv = styled('div')(() => ({
    textAlign: 'left',
    fontSize: '18px',
    color: '#212529',
    fontWeight: 'bolder',
    marginTop: '18px',
    letterSpacing: '0.4px'
}));

const ValueDiv = styled('div')(() => ({
    textAlign: 'left',
    fontSize: '16px',
    color: '#212529',
    fontWeight: '400',
    marginTop: '10px',
}));

const CartButton = styled('button')(() => ({
    textAlign: 'start',
    fontSize: '15px',
    padding: '15px 210px',
    backgroundColor: 'white',
    borderWidth: '2px !important',
    boxShadow: 'none',
    borderColor: '#212529',
    borderRadius: '2px',
    marginTop: '40px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'start',
    cursor: 'pointer'

}));

const BuyButton = styled('button')(() => ({
    textAlign: 'left',
    fontSize: '15px',
    padding: '15px 213px',
    backgroundColor: '#1E9C99',
    borderWidth: '2px !important',
    boxShadow: 'none',
    borderColor: 'transparent',
    marginTop: '10px',
    borderRadius: '10px',
    color: 'white',
    display: 'flex',
    alignItems: 'start',
    cursor: 'pointer'


}));

const ProductDetails = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct(id))
    }, [id])

    const { product } = useSelector(state => state.product)

    return (
        <div style={{ marginTop: '50px', display: 'flex', marginLeft: '180px' }}>
            <DetailImg src={product?.image} />
            <DetailText>
                <ProductNameStyle>{product?.name}</ProductNameStyle>
                <PriceStyle> ₹ {product?.price}</PriceStyle>
                <DimensionDiv>Dimensions: </DimensionDiv>
                <ValueDiv>Planter Size: {product?.planter_size}</ValueDiv>
                <ValueDiv>Height Upto: {product?.height}</ValueDiv>
                <CartButton>Add to cart</CartButton>
                <BuyButton>But it Now</BuyButton>
                <ValueDiv style={{ lineHeight: '1.6', marginTop: '30px', letterSpacing: '0.5px' }}>{product?.description}</ValueDiv>
            </DetailText>
        </div>
    )
}

export default ProductDetails;
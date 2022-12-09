import React, { useEffect } from 'react';
import Product from './Product';
import { fetchProductList } from '../../store/product';
import { useSelector, useDispatch } from "react-redux"

const renderProductList = (productList) => {
    return (
        <>
            {productList.map((product, index) => (
                <Product key={product.id} index={index} product={product} />
            ))}
        </>
    )
}

const Products = () => {
    const dispatch = useDispatch()
    const { productList, isLoading } = useSelector(state => state.product)

    useEffect(() => {
        dispatch(fetchProductList())
    }, [])

    return (
        <div style={{ marginLeft: '150px', marginTop: '100px', display: 'flex', flexWrap: 'wrap' }}>
            {isLoading ? <h1>Loading</h1> : (
                renderProductList(productList)
            )}
        </div>
    )
}

export default Products;
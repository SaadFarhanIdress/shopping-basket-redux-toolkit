import React from 'react'
import { useSelector } from 'react-redux';
import ProductContainer from '.';
import { ProductItem } from '../../types';

const Product = () => {
    
    const products = useSelector((state: ProductItem[]) => state);

    return <ProductContainer products={products} />
}

export default Product

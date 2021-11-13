
import React from 'react';
import { useSelector } from 'react-redux';
import BasketContainer from '.';
import { ProductItem } from '../../types';

const Basket = () => {

    const products = useSelector((state: ProductItem[]) => state);

    return <BasketContainer products={products} />
}

export default Basket;

import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        setBestSeller(products.filter((item) => (item.bestseller)).slice(0, 5));
    }, [products]);

    return (
        <div className='my-16'>
            <div className='text-center py-8'>
                <Title text1={'BEST'} text2={'SELLERS'}/>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-yellow-700'>
                    Explore our bestselling fashion essentials.
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-8'>
                {bestSeller.map((item, index) => (
                    <div key={index} className='product-card bounce-in'>
                        <ProductItem
                            id={item._id}
                            image={item.images}
                            name={item.name}
                            price={item.price}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BestSeller;

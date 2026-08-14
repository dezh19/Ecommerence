import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]); 

  useEffect(() => {
    
      setLatestProducts(products.slice(0, 10)); 
    
  }, [products]); 

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-yellow-700'>
          Discover our latest collection of premium fashion pieces.
        </p>
      </div>
      {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-8'>
        {latestProducts.map((item, index) => (
          <div
            key={index}
            className='product-card fade-in hover:transform hover:scale-105 transition-all duration-300'
            style={{ animationDelay: `${index * 0.1}s` }}
          >
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
};

export default LatestCollection;

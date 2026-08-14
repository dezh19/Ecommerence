import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';


const ProductItem = ({id,image,name,price}) => {
    const{currency} = useContext(ShopContext);
    const [hovered, setHovered] = React.useState(false);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
        <div className='overflow-hidden relative'>
            <img
              className={`transition-transform duration-500 ease-in-out ${hovered ? 'scale-110' : 'scale-100'}`}
              src={Array.isArray(image) && image[0] ? image[0] : ''}
              alt={name || 'Product image'}
              loading="lazy"
            />
            {hovered && Array.isArray(image) && image[1] && (
              <img
                className='absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100'
                src={image[1]}
                alt={`${name} alternate`}
                loading="lazy"
              />
            )}
        </div>
        <p className='pt-3 pb-1 text-sm font-semibold'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem;

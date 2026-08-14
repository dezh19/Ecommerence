import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';


const ProductItem = ({id,image,name,price}) => {
    const{currency} = useContext(ShopContext);
    const [hovered, setHovered] = React.useState(false);
    const [wished, setWished] = useState(false);

  return (
    <Link
      className='group luxury-card block rounded-2xl overflow-hidden text-luxury-ivory cursor-pointer'
      to={`/product/${id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
        <div className='overflow-hidden relative aspect-[3/4] bg-luxury-bg2'>
            <img
              className={`w-full h-full object-cover transition-transform duration-700 ease-out ${hovered ? 'scale-110' : 'scale-100'}`}
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
            <div className='absolute inset-0 bg-gradient-to-t from-luxury-bg/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

            <button
              type='button'
              onClick={(e) => {
                e.preventDefault();
                setWished((w) => !w);
              }}
              aria-label='Wishlist'
              className={`absolute top-3 right-3 w-8 h-8 rounded-full glass flex items-center justify-center transition-colors ${
                wished ? 'text-luxury-gold' : 'text-luxury-ivory/70 hover:text-luxury-gold'
              }`}
            >
              <svg width='15' height='15' viewBox='0 0 24 24' fill={wished ? 'currentColor' : 'none'} stroke='currentColor' strokeWidth='1.5'>
                <path d='M12 20.5s-7.5-4.6-9.8-9.1C.6 8 2 4.5 5.4 3.7c2-.5 4 .3 5.1 2 .3.5 1 .5 1.3 0 1.1-1.7 3.1-2.5 5.1-2C20.3 4.5 21.7 8 19.8 11.4 17.5 15.9 12 20.5 12 20.5Z' />
              </svg>
            </button>
        </div>
        <div className='p-4'>
          <p className='text-sm font-medium text-luxury-ivory/90 truncate'>{name}</p>
          <p className='text-sm text-luxury-gold mt-1 font-serif'>{currency}{price}</p>
        </div>
    </Link>
  )
}

export default ProductItem;

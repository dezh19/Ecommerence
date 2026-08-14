import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const CATEGORY_LIST = ['Women', 'Men', 'Kids'];

const Categories = () => {
  const { products } = useContext(ShopContext);

  const categories = useMemo(
    () =>
      CATEGORY_LIST.map((name) => {
        const match = products.find((item) => item.category === name);
        return { name, image: match?.images?.[0] };
      }),
    [products]
  );

  return (
    <div className='my-16'>
      <div className='text-center mb-10'>
        <p className='luxury-eyebrow text-luxury-gold text-sm tracking-[0.3em]'>✦ SHOP CATEGORIES ✦</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/collection?category=${cat.name}`}
            className='luxury-card group relative overflow-hidden rounded-2xl aspect-[4/5] block'
          >
            {cat.image && (
              <img
                src={cat.image}
                alt={cat.name}
                className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110'
              />
            )}
            <div className='absolute inset-0 bg-gradient-to-t from-luxury-bg via-luxury-bg/30 to-transparent group-hover:from-luxury-bg/90 transition-colors duration-500' />
            <div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-luxury-gold/0 group-hover:ring-luxury-gold/40 transition-all duration-500' />

            <div className='absolute bottom-0 left-0 right-0 p-6'>
              <p className='font-serif text-2xl text-luxury-ivory mb-1'>{cat.name}</p>
              <p className='text-xs tracking-[0.2em] text-luxury-gold/80 group-hover:text-luxury-gold transition-colors flex items-center gap-2'>
                EXPLORE
                <span className='inline-block transition-transform duration-300 group-hover:translate-x-1'>→</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;

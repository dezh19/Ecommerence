import React, { useContext, useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const ProductImages = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [images, setImage] = useState('');
  const [size, setSize] = useState('');

const fetchProductData = useCallback(() => {
  products.map((item) => {
    if (item._id === productId) {
      setProductData(item);
      setImage(item.images[0]);
      return null;
    }
  });
}, [productId]);

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex flex-col gap-12 sm:gap-12 sm:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-hidden justify-between sm:justify-normal sm:w-[18.7%]'>
            {productData.images && productData.images.map((item, index) => (
              <img onClick={() => setImage(item)} src={item} key={index} alt="" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={images} alt="" className='w-full h-auto' />
          </div>
        </div>
        {/* Product Info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_icon} className='w-3 5' alt="" />
            <img src={assets.star_dull_icon} className='w-3 5' alt="" />
            <p className='p1-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-serif text-luxury-gold'>{currency}{productData.price}</p>
          <p className='mt-5 text-luxury-ivory/60 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p className='text-luxury-ivory/70'>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes && productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`border py-2 px-4 rounded-lg transition-colors ${item === size ? 'border-luxury-gold bg-luxury-gold/10 text-luxury-gold' : 'border-luxury-gold/15 bg-luxury-bg2 text-luxury-ivory/70'}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='btn-gold'>ADD TO CART</button>
          <hr className='mt-8 sm:4/5' />
          <div className='text-sm text-gray-500 mt-5 flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 3 days.</p>
          </div>
        </div>
      </div>
      {/* -------------Description & Review Section------------ */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border border-luxury-gold/20 bg-luxury-bg2 text-luxury-ivory px-5 py-3 text-sm font-medium'>Description</b>
          <p className='border border-luxury-gold/10 text-luxury-ivory/50 px-5 py-3 text-sm'>Review(122)</p>
        </div>
        <div className='flex flex-col gap-4 border-x border-b border-luxury-gold/10 px-6 py-6 text-sm text-luxury-ivory/50'>
          <p>***********************************************************</p>
          <p>***********************************************************</p>
        </div>
      </div>

      {/* -------------Display related Product---------------- */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className='opacity-0'>Loading...</div>
  );
};

export default ProductImages;
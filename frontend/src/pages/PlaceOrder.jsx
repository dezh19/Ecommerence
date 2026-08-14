import { useContext, useState } from 'react';
import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const [submitting, setSubmitting] = useState(false);

  const {
    navigate, token, backendUrl, cartItems, setCartItems,
    products, getCartAmount, delivery_fee,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    street: '', region: '', zipcode: '', country: '',
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!token) {
      toast.error('Please login to place an order');
      navigate('/login');
      return;
    }

    if (method !== 'cod') {
      toast.error('This payment method is not available yet. Please use Cash on Delivery.');
      return;
    }

    const orderItems = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          const itemInfo = products.find((p) => p._id === itemId);
          if (itemInfo) {
            orderItems.push({
              _id: itemInfo._id,
              name: itemInfo.name,
              price: itemInfo.price,
              image: itemInfo.images,
              size,
              quantity: cartItems[itemId][size],
            });
          }
        }
      }
    }

    if (orderItems.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    try {
      setSubmitting(true);
      const response = await axios.post(
        `${backendUrl}/api/order/place`,
        {
          address: formData,
          items: orderItems,
          amount: getCartAmount() + delivery_fee,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        setCartItems({});
        toast.success('Order placed successfully');
        navigate('/orders');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-luxury-gold/10'>
      {/* ----------left side ------------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'Delivery'} text2={'Information'} />
        </div>
        <div className='flex gap-3'>
          <input required name='firstName' value={formData.firstName} onChange={onChangeHandler} className='border border-luxury-gold/20 bg-transparent text-luxury-ivory placeholder:text-luxury-ivory/40 rounded-lg py-2 px-3.5 w-full focus:outline-none focus:border-luxury-gold/60' type="text" placeholder='First Name' />
          <input required name='lastName' value={formData.lastName} onChange={onChangeHandler} className='border border-luxury-gold/20 bg-transparent text-luxury-ivory placeholder:text-luxury-ivory/40 rounded-lg py-2 px-3.5 w-full focus:outline-none focus:border-luxury-gold/60' type="text" placeholder='Last Name' />
        </div>
        <input required name='email' value={formData.email} onChange={onChangeHandler} className='border border-luxury-gold/20 bg-transparent text-luxury-ivory placeholder:text-luxury-ivory/40 rounded-lg py-2 px-3.5 w-full focus:outline-none focus:border-luxury-gold/60' type="email" placeholder='Email' />
        <input required name='phone' value={formData.phone} onChange={onChangeHandler} className='border border-luxury-gold/20 bg-transparent text-luxury-ivory placeholder:text-luxury-ivory/40 rounded-lg py-2 px-3.5 w-full focus:outline-none focus:border-luxury-gold/60' type="text" placeholder='Phone' />
        <div className='flex gap-3'>
          <input required name='street' value={formData.street} onChange={onChangeHandler} className='border border-luxury-gold/20 bg-transparent text-luxury-ivory placeholder:text-luxury-ivory/40 rounded-lg py-2 px-3.5 w-full focus:outline-none focus:border-luxury-gold/60' type="text" placeholder='Address' />
          <input required name='region' value={formData.region} onChange={onChangeHandler} className='border border-luxury-gold/20 bg-transparent text-luxury-ivory placeholder:text-luxury-ivory/40 rounded-lg py-2 px-3.5 w-full focus:outline-none focus:border-luxury-gold/60' type="text" placeholder='Region' />
        </div>
        <div className='flex gap-3'>
          <input required name='zipcode' value={formData.zipcode} onChange={onChangeHandler} className='border border-luxury-gold/20 bg-transparent text-luxury-ivory placeholder:text-luxury-ivory/40 rounded-lg py-2 px-3.5 w-full focus:outline-none focus:border-luxury-gold/60' type="text" placeholder='Zipcode' />
          <input required name='country' value={formData.country} onChange={onChangeHandler} className='border border-luxury-gold/20 bg-transparent text-luxury-ivory placeholder:text-luxury-ivory/40 rounded-lg py-2 px-3.5 w-full focus:outline-none focus:border-luxury-gold/60' type="text" placeholder='Country' />
        </div>
      </div>
      {/* ----------Right side ------------- */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={'Payment'} text2={'Method'} />
          {/* ---------- Change Payment Method Selection ------------- */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setMethod('stripe')} className={`flex items-center gap-3 rounded-xl border p-2 px-3 cursor-pointer transition-colors ${method === 'stripe' ? 'border-luxury-gold' : 'border-luxury-gold/15'}`}>
              <p className={`min-w-3.5 h-3.5 border border-luxury-gold rounded-full ${method === 'stripe' ? 'bg-luxury-gold' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={() => setMethod('razorpay')} className={`flex items-center gap-3 rounded-xl border p-2 px-3 cursor-pointer transition-colors ${method === 'razorpay' ? 'border-luxury-gold' : 'border-luxury-gold/15'}`}>
              <p className={`min-w-3.5 h-3.5 border border-luxury-gold rounded-full ${method === 'razorpay' ? 'bg-luxury-gold' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={() => setMethod('cod')} className={`flex items-center gap-3 rounded-xl border p-2 px-3 cursor-pointer transition-colors ${method === 'cod' ? 'border-luxury-gold' : 'border-luxury-gold/15'}`}>
              <p className={`min-w-3.5 h-3.5 border border-luxury-gold rounded-full ${method === 'cod' ? 'bg-luxury-gold' : ''}`}></p>
              <p className='text-luxury-ivory/70 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button type='submit' disabled={submitting} className='btn-gold px-16 disabled:opacity-60'>
              {submitting ? 'Placing Order...' : 'PLACE ORDER'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;

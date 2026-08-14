import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';

const Orders = () => {
  const { currency, token, backendUrl } = useContext(ShopContext);
  const [orderItems, setOrderItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadOrderData = async () => {
    if (!token) {
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/userorders`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.data.success) {
        const flattened = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            flattened.push({
              ...item,
              status: order.status,
              paymentMethod: order.paymentMethod,
              payment: order.payment,
              date: order.date,
            });
          });
        });
        setOrderItems(flattened.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className='border-t border-luxury-gold/10 pt-16'>
      <div className='text-2xl'>
        <Title text1={'My'} text2={'Orders'} />
      </div>
      <div>
        {!token && (
          <p className='text-luxury-ivory/50 py-8'>Please log in to view your orders.</p>
        )}
        {token && !loading && orderItems.length === 0 && (
          <p className='text-luxury-ivory/50 py-8'>You haven't placed any orders yet.</p>
        )}
        {orderItems.map((item, index) => (
          <div key={index} className='py-4 border-t border-b border-luxury-gold/10 text-luxury-ivory/80 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
            <div className='flex items-start gap-6 text-sm'>
              <img className='w-16 sm:w-20 rounded-lg' src={Array.isArray(item.image) ? item.image[0] : item.image} alt="" />
              <div>
                <p className='sm:text-base font-medium text-luxury-ivory'>{item.name}</p>
                <div className='flex items-center gap-3 mt-2 text-base text-luxury-ivory/70'>
                  <p className='text-lg font-serif text-luxury-gold'>{currency}{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>
                <p className='mt-2 text-sm'>Date: <span className='text-luxury-ivory/50'>{new Date(item.date).toDateString()}</span></p>
                <p className='text-sm'>Payment: <span className='text-luxury-ivory/50'>{item.paymentMethod} · {item.payment ? 'Paid' : 'Pending'}</span></p>
              </div>
            </div>
            <div className='md:w-1/2 flex justify-between'>
              <div className='flex items-center gap-2'>
                <p className='min-w-2 h-2 rounded-full bg-luxury-gold'></p>
                <p className='text-sm md:text-base'>{item.status}</p>
              </div>
              <button onClick={loadOrderData} className='border border-luxury-gold/20 px-4 py-2 text-sm font-medium rounded-lg text-luxury-ivory/70 hover:border-luxury-gold hover:text-luxury-gold transition-colors'>Track Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;

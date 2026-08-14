import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const STATUS_OPTIONS = ['Order Placed', 'Packing', 'Shipped', 'Out for delivery', 'Delivered'];

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/list`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
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

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/status`,
        { orderId, status: event.target.value },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.data.success) {
        await fetchAllOrders();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className='animate-fade-in'>
      <p className='luxury-heading text-2xl text-luxury-ivory mb-1'>Orders</p>
      <p className='text-sm text-luxury-muted mb-6'>{orders.length} order{orders.length === 1 ? '' : 's'} placed.</p>

      {!loading && orders.length === 0 && (
        <div className='luxe-card luxe-card-glow rounded-2xl p-12 text-center'>
          <p className='text-sm text-luxury-muted'>No orders yet.</p>
        </div>
      )}

      <div className='flex flex-col gap-3'>
        {orders.map((order) => (
          <div
            key={order._id}
            className='luxe-card rounded-2xl grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-4 items-start p-5 md:p-6 text-xs sm:text-sm hover:border-luxury-gold/30 transition-colors'
          >
            <img className='w-10 opacity-70' src={assets.parcel_icon} alt='' />

            <div>
              {order.items.map((item, i) => (
                <p className='py-0.5 text-luxury-ivory/80' key={i}>
                  {item.name} x {item.quantity} <span className='text-luxury-muted'>{item.size}</span>
                  {i !== order.items.length - 1 ? ',' : ''}
                </p>
              ))}
              <p className='mt-3 mb-1 text-luxury-ivory'>
                {order.address?.firstName} {order.address?.lastName}
              </p>
              <p className='text-luxury-muted'>{order.address?.street}</p>
              <p className='text-luxury-muted'>
                {[order.address?.region, order.address?.country, order.address?.zipcode]
                  .filter(Boolean)
                  .join(', ')}
              </p>
              <p className='text-luxury-muted'>{order.address?.phone}</p>
            </div>

            <div className='text-luxury-ivory/70'>
              <p>Items: {order.items.length}</p>
              <p className='mt-2'>Method: {order.paymentMethod}</p>
              <p>Payment: <span className={order.payment ? 'text-luxury-gold' : 'text-luxury-rose'}>{order.payment ? 'Done' : 'Pending'}</span></p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            </div>

            <p className='text-luxury-gold'>{currency}{order.amount}</p>

            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
              className='luxe-input px-3 py-2 text-sm'
            >
              {STATUS_OPTIONS.map((status) => (
                <option key={status} value={status} className='bg-luxury-surface text-luxury-ivory'>
                  {status}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;

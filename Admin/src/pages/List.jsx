import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';

const List = ({token}) => {

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
     if (response.data.success) {
      setList(response.data.products)
     }
     else{
      toast.error(response.data.message)
     }
    } catch (error) {
       console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

const removeProduct = async (id) => {
  try {
    const response = await axios.delete(`${backendUrl}/api/product/remove/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.data.success) {
      toast.success(response.data.message);
      await fetchList();
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

  return (
<div className='animate-fade-in'>
  <p className='luxury-heading text-2xl text-luxury-ivory mb-1'>All Products</p>
  <p className='text-sm text-luxury-muted mb-6'>{list.length} item{list.length === 1 ? '' : 's'} in your catalog.</p>

  <div className='luxe-card luxe-card-glow rounded-2xl overflow-hidden'>
    <div className='hidden md:grid grid-cols-[0.8fr_3fr_1fr_1fr_0.6fr] px-6 py-4 text-xs tracking-wide text-luxury-muted border-b border-luxury-gold/10'>
      <p>IMAGE</p>
      <p>NAME</p>
      <p>CATEGORY</p>
      <p>PRICE</p>
      <p className='text-center'>ACTION</p>
    </div>

    {!loading && list.length === 0 && (
      <p className='px-6 py-8 text-sm text-luxury-muted'>No products yet — add your first one from Add Items.</p>
    )}

    {list.map((item, index) => (
      <div key={index} className="grid grid-cols-[0.8fr_3fr_1fr_1fr_0.6fr] items-center px-6 py-3 border-b border-luxury-gold/5 last:border-0 hover:bg-white/[0.02] transition-colors">
        <img
          src={item.images?.[0] ? `${item.images[0]}` : 'https://placehold.co/150x150'}
          alt={item.name}
          className="w-14 h-14 rounded-lg object-cover border border-luxury-gold/10"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/150x150';
          }}
        />
        <p className='text-sm text-luxury-ivory truncate pr-4'>{item.name}</p>
        <p className='text-sm text-luxury-muted'>{item.category}</p>
        <p className='text-sm text-luxury-gold'>{currency}{item.price}</p>
        <button
          onClick={()=>removeProduct(item._id)}
          aria-label='Remove product'
          className="w-8 h-8 rounded-lg border border-luxury-rose/25 text-luxury-rose hover:bg-luxury-rose/10 transition-colors justify-self-center flex items-center justify-center"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    ))}
  </div>
</div>
  )

}

export default List;

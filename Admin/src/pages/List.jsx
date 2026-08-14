import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';

const List = ({token}) => {

  const [list, setList] = useState([]);
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
    }
  }

  useEffect(() => {
    fetchList();
  }, []); 

  /*--------------- Function to remove a product not working----------------- */

const removeProduct = async (id) => {
  try {
    const response = await axios.delete(`${backendUrl}/api/product/remove/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.data.success) {
      toast.success(response.data.message);
      await fetchList(); // Refresh the list after deletion
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

  return (
<>  
<p className='mb-2'>All Products List</p>
<div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] bg-gray-100 p-2 items-center py-1'>
  <b>Image</b>
  <b>Name</b>
  <b>Category</b>
  <b>Price</b>
  <b className='text-center'>Action</b>
</div>

{/* ---------Products List------------ */}
{
list.map((item, index) => (
  <div key={index} className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 border-b">
   
    {/* -----------------!!!!!Image not rendering!!!!!!--------------- */}
    <img
  src={item.images?.[0] ? `${item.images[0]}` : 'https://placehold.co/150x150'}
  alt={item.name}
  className="w-16 h-16 object-cover"
  onError={(e) => {
    e.target.onerror = null; // Prevent infinite loop if fallback image also fails
    e.target.src = 'https://placehold.co/150x150'; // Fallback image
  }}
/>

    <p>{item.name}</p>
    <p>{item.category}</p>
    <p>{currency}{item.price}</p>
    <button onClick={()=>removeProduct(item._id)} className="text-red-500">X</button>
  </div>
))
}
</>
  )

}

export default List;

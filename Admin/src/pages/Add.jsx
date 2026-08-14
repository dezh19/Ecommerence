import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';

const SIZES = ['S', 'M', 'L', 'XL', 'XXL'];

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Men');
  const [subCategory, setSubCategory] = useState('Topwear');
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);
  const [submitting, setSubmitting] = useState(false);

  const images = [image1, image2, image3, image4];
  const previewImage = images.find(Boolean);

  const toggleSize = (size) => {
    setSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('bestSeller', bestSeller);
      formData.append('sizes', JSON.stringify(sizes));

      image1 && formData.append('image1', image1);
      image2 && formData.append('image2', image2);
      image3 && formData.append('image3', image3);
      image4 && formData.append('image4', image4);

      const response = await axios.post(`${backendUrl}/api/product/add`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        toast.success('Product added successfully!');
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setName('');
        setDescription('');
        setPrice('');
        setSizes([]);
        setBestSeller(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || 'An error occurred while adding the product.');
    } finally {
      setSubmitting(false);
    }
  };

  const uploadSlots = [
    { key: 'image1', value: image1, set: setImage1 },
    { key: 'image2', value: image2, set: setImage2 },
    { key: 'image3', value: image3, set: setImage3 },
    { key: 'image4', value: image4, set: setImage4 },
  ];

  return (
    <div className='animate-fade-in grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6'>
      <form onSubmit={onSubmitHandler} className='luxe-card luxe-card-glow rounded-2xl p-6 sm:p-10 flex flex-col gap-7'>
        <div>
          <p className='luxury-heading text-2xl sm:text-3xl text-luxury-ivory'>Add New Product</p>
          <p className='text-sm text-luxury-muted mt-1'>Create and manage your products with ease.</p>
        </div>

        <div>
          <p className='text-xs tracking-wide text-luxury-muted mb-3'>UPLOAD IMAGES</p>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
            {uploadSlots.map((slot) => (
              <label
                key={slot.key}
                htmlFor={slot.key}
                className='aspect-square rounded-xl border border-dashed border-luxury-gold/30 bg-white/[0.02] flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-luxury-gold/60 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden'
              >
                {slot.value ? (
                  <img className='w-full h-full object-cover' src={URL.createObjectURL(slot.value)} alt='' />
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className='text-luxury-gold'>
                      <path d="M12 16V4M12 4l-4 4M12 4l4 4" />
                      <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                    </svg>
                    <span className='text-xs text-luxury-gold'>Upload</span>
                  </>
                )}
                <input onChange={(e) => slot.set(e.target.files[0])} type="file" id={slot.key} hidden />
              </label>
            ))}
          </div>
          <p className='text-xs text-luxury-muted mt-3'>You can upload up to 4 images</p>
        </div>

        <div>
          <p className='text-xs tracking-wide text-luxury-muted mb-2'>PRODUCT NAME</p>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className='luxe-input w-full px-4 py-3 text-sm'
            type="text"
            placeholder='Enter product name'
            required
          />
        </div>

        <div>
          <p className='text-xs tracking-wide text-luxury-muted mb-2'>PRODUCT DESCRIPTION</p>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Write product description here..."
            rows={4}
            className='luxe-input w-full px-4 py-3 text-sm resize-none'
            required
          />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          <div>
            <p className='text-xs tracking-wide text-luxury-muted mb-2'>PRODUCT CATEGORY</p>
            <select onChange={(e) => setCategory(e.target.value)} value={category} className='luxe-input w-full px-4 py-3 text-sm'>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
          <div>
            <p className='text-xs tracking-wide text-luxury-muted mb-2'>SUB CATEGORY</p>
            <select onChange={(e) => setSubCategory(e.target.value)} value={subCategory} className='luxe-input w-full px-4 py-3 text-sm'>
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>
          <div>
            <p className='text-xs tracking-wide text-luxury-muted mb-2'>PRODUCT PRICE</p>
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              className='luxe-input w-full px-4 py-3 text-sm'
              placeholder="300"
              type="number"
              required
            />
          </div>
        </div>

        <div>
          <p className='text-xs tracking-wide text-luxury-muted mb-3'>PRODUCT SIZES</p>
          <div className='flex flex-wrap gap-2'>
            {SIZES.map((s) => (
              <button
                type='button'
                key={s}
                onClick={() => toggleSize(s)}
                className={`w-12 h-10 rounded-lg text-sm border transition-all duration-300 ${
                  sizes.includes(s)
                    ? 'border-luxury-gold bg-luxury-gold/15 text-luxury-goldBright'
                    : 'border-luxury-gold/15 bg-white/[0.02] text-luxury-muted hover:border-luxury-gold/40'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <label className='flex items-center gap-3 cursor-pointer w-fit'>
          <input
            onChange={() => setBestSeller((prev) => !prev)}
            checked={bestSeller}
            type="checkbox"
            className='luxe-checkbox'
          />
          <span className='text-sm text-luxury-ivory/80'>Add to the bestseller</span>
        </label>

        <button type="submit" disabled={submitting} className='luxe-btn-gold w-fit px-8'>
          {submitting ? 'Adding...' : 'ADD PRODUCT'}
          {!submitting && (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          )}
        </button>
      </form>

      <div className='flex flex-col gap-6'>
        <div className='luxe-card luxe-card-glow rounded-2xl p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className='text-luxury-gold'>
              <path d="M12 2l1.6 4.9L18 8l-4.4 1.1L12 14l-1.6-4.9L6 8l4.4-1.1L12 2Z" />
              <path d="M5 18l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />
            </svg>
            <p className='text-sm text-luxury-ivory'>Quick Tips</p>
          </div>
          <ul className='space-y-2.5'>
            {['Use high quality images', 'Write clear product descriptions', 'Set competitive prices', 'Choose the right categories'].map((tip) => (
              <li key={tip} className='flex items-start gap-2.5 text-sm text-luxury-ivory/60'>
                <span className='mt-1.5 w-1.5 h-1.5 rounded-full bg-luxury-rose shrink-0' />
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <div className='luxe-card luxe-card-glow rounded-2xl p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className='text-luxury-gold'>
              <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
              <circle cx="12" cy="12" r="2.5" />
            </svg>
            <p className='text-sm text-luxury-ivory'>Product Preview</p>
          </div>

          {previewImage || name || price ? (
            <div className='rounded-xl overflow-hidden border border-luxury-gold/15'>
              <div className='aspect-square bg-luxury-bg flex items-center justify-center'>
                {previewImage ? (
                  <img src={URL.createObjectURL(previewImage)} alt='' className='w-full h-full object-cover' />
                ) : (
                  <img src={assets.upload_area} alt='' className='w-16 opacity-30' />
                )}
              </div>
              <div className='p-4'>
                <p className='text-sm text-luxury-ivory truncate'>{name || 'Untitled product'}</p>
                <div className='flex items-center justify-between mt-1'>
                  <p className='text-luxury-gold text-sm'>{price ? `${currency}${price}` : '—'}</p>
                  <p className='text-xs text-luxury-muted'>{category} · {subCategory}</p>
                </div>
                {sizes.length > 0 && (
                  <div className='flex gap-1.5 mt-3'>
                    {sizes.map((s) => (
                      <span key={s} className='text-[11px] px-2 py-0.5 rounded-md border border-luxury-gold/25 text-luxury-gold/80'>{s}</span>
                    ))}
                  </div>
                )}
                {bestSeller && (
                  <p className='text-[11px] text-luxury-rose mt-2'>★ Bestseller</p>
                )}
              </div>
            </div>
          ) : (
            <div className='rounded-xl border border-dashed border-luxury-gold/15 aspect-square flex flex-col items-center justify-center gap-3 text-center px-6'>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className='text-luxury-muted'>
                <path d="M6 7h12l1 13H5L6 7Z" />
                <path d="M9 7V5a3 3 0 0 1 6 0v2" />
              </svg>
              <p className='text-xs text-luxury-muted'>Preview will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;

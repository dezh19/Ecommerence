import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center mt-10'>
        <Title text1='CONTACT ' text2='US'/>
      </div>
      <div className='my-10 flex justify-center md:flex-row gap-10 mb-28'> 
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Address</p>
          <p className=' text-gray-500'>Tel: 444-9082 || (592) 655-3698 <br/>Email:DeshawnMitchellross@gmail.com</p>
          <p></p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact

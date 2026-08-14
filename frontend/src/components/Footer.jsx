import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-white py-12 px-4 mt-20 min-h-[200px]'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-12 my-8 text-base'>
            <div>
                <img src={assets.logo} className='mb-6 w-36 filter drop-shadow-lg' alt="" />
                <p className='w-full md:w-2/3 text-yellow-100 text-base leading-relaxed'>
                    Discover the latest in fashion with our premium collection. Elevate your style with timeless pieces crafted for the modern individual.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-6 luxury-heading animate-fade-in'>COMPANY</p>
                <ul className='flex flex-col gap-3 text-yellow-100 text-base'>
                    <li className='hover:text-yellow-200 transition duration-300 cursor-pointer hover:translate-x-2 transform'>Home</li>
                    <li className='hover:text-yellow-200 transition duration-300 cursor-pointer hover:translate-x-2 transform'>About Us</li>
                    <li className='hover:text-yellow-200 transition duration-300 cursor-pointer hover:translate-x-2 transform'>Delivery</li>
                    <li className='hover:text-yellow-200 transition duration-300 cursor-pointer hover:translate-x-2 transform'>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-6 luxury-heading animate-fade-in'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-3 text-yellow-100 text-base'>
                    <li className='hover:text-yellow-300 transition duration-300 cursor-pointer'>655-3698 / 659-2344</li>
                    <li className='hover:text-yellow-300 transition duration-300 cursor-pointer'>CompaniesEmail@gmail.com</li>
                </ul>
            </div>
        </div>
        <div className='border-t border-yellow-300 pt-6'>
               <p className='text-base text-center text-yellow-100'>Copyright 2025 company.com. All rights reserved</p>
            </div>
    </div>
  )
}

export default Footer

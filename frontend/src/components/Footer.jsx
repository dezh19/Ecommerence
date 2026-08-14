import React from 'react'

const Footer = () => {
  return (
    <div className='mt-24 pt-16 pb-10 border-t border-luxury-gold/15'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-12 mb-12'>
            <div>
                <p className='font-serif text-3xl text-luxury-gold mb-5 drop-shadow-[0_0_18px_rgba(214,179,106,0.25)]'>
                  FOREVER<span className='text-luxury-goldLight'>.</span>
                </p>
                <p className='w-full md:w-2/3 text-luxury-ivory/50 text-sm leading-relaxed'>
                    Discover the latest in fashion with our premium collection. Elevate your style with timeless pieces crafted for the modern individual.
                </p>
            </div>

            <div>
                <p className='luxury-eyebrow text-luxury-gold text-xs tracking-[0.25em] mb-6'>COMPANY</p>
                <ul className='flex flex-col gap-3 text-luxury-ivory/60 text-sm'>
                    <li className='hover:text-luxury-gold transition duration-300 cursor-pointer'>Home</li>
                    <li className='hover:text-luxury-gold transition duration-300 cursor-pointer'>About Us</li>
                    <li className='hover:text-luxury-gold transition duration-300 cursor-pointer'>Delivery</li>
                    <li className='hover:text-luxury-gold transition duration-300 cursor-pointer'>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='luxury-eyebrow text-luxury-gold text-xs tracking-[0.25em] mb-6'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-3 text-luxury-ivory/60 text-sm'>
                    <li className='hover:text-luxury-gold transition duration-300 cursor-pointer'>655-3698 / 659-2344</li>
                    <li className='hover:text-luxury-gold transition duration-300 cursor-pointer'>CompaniesEmail@gmail.com</li>
                </ul>
            </div>
        </div>
        <div className='border-t border-luxury-gold/10 pt-6'>
               <p className='text-xs text-center tracking-[0.2em] text-luxury-ivory/30'>COPYRIGHT 2025 COMPANY.COM — ALL RIGHTS RESERVED</p>
            </div>
    </div>
  )
}

export default Footer

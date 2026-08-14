import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Latest Arrivals';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[index]);
        setIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
<div className='relative flex flex-col sm:flex-row border border-yellow-300 overflow-hidden'>
      {/* hero left side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 relative z-10'>
        <div className='text-white hero-overlay p-8 rounded-2xl'>
            <div className='flex items-center gap-2 mb-4'>
                <p className='w-8 md:w-11 h-[2px] bg-yellow-400 animate-pulse'></p>
                <p className='font-medium text-sm md:text-base text-yellow-200 animate-fade-in'>OUR BESTSELLER</p>
            </div>
            <h1 className='hero-text text-4xl sm:py-3 lg:text-6xl leading-relaxed mb-6'>
              {displayText}
              <span className='animate-blink'>|</span>
            </h1>
            <div className='flex items-center gap-2'>
                <button className='font-semibold text-sm md:text-base bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'>SHOP NOW</button>
                <p className='w-8 md:w-11 h-[2px] bg-yellow-400 animate-pulse'></p>
            </div>
        </div>
      </div>
      {/* hero right side */}
      <div className='w-full sm:w-1/2 relative'>
        <img src={assets.hero_img} className='w-full h-full object-cover transition-transform duration-700 hover:scale-105' alt="" />
        <div className='absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20'></div>
      </div>
      {/* Decorative elements */}
      <div className='absolute top-10 right-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse'></div>
      <div className='absolute bottom-10 left-10 w-16 h-16 bg-yellow-300 rounded-full opacity-30 animate-bounce'></div>
      <div className='absolute top-1/2 left-1/2 w-32 h-32 bg-yellow-500 rounded-full opacity-10 animate-ping'></div>
    </div>
  )
}

export default Hero

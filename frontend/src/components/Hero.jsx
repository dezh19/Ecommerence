import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

function Hero() {
  return (
    <div className='relative flex flex-col sm:flex-row overflow-hidden rounded-3xl border border-luxury-gold/15 bg-luxury-bg2 animate-fade-in'>
      {/* subtle satin light leaks */}
      <div className='pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-luxury-gold/10 rounded-full blur-3xl' />
      <div className='pointer-events-none absolute bottom-0 right-1/3 w-96 h-40 bg-luxury-goldLight/5 rounded-full blur-3xl' />

      {/* left */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-16 sm:py-0 relative z-10'>
        <div className='text-luxury-ivory px-8 sm:px-12 max-w-md'>
          <div className='flex items-center gap-3 mb-6'>
            <span className='w-10 h-px bg-luxury-gold' />
            <p className='luxury-eyebrow text-xs text-luxury-gold uppercase'>Our Bestseller</p>
          </div>

          <h1 className='font-serif text-5xl sm:text-6xl leading-[1.05] mb-6'>
            <span className='block text-luxury-ivory'>Timeless</span>
            <span className='block text-shimmer'>Elegance</span>
          </h1>

          <p className='text-sm sm:text-base text-luxury-ivory/60 leading-relaxed mb-8'>
            Discover premium fashion curated for the modern, confident you.
          </p>

          <div className='flex items-center gap-4'>
            <Link to='/collection' className='btn-gold'>
              Shop Now
              <span aria-hidden>→</span>
            </Link>
            <span className='w-10 h-px bg-luxury-gold/50' />
          </div>
        </div>
      </div>

      {/* right */}
      <div className='w-full sm:w-1/2 relative min-h-[320px] sm:min-h-[520px]'>
        <img src={assets.hero_img} className='absolute inset-0 w-full h-full object-cover' alt='' />
        <div className='absolute inset-0 bg-gradient-to-l from-luxury-bg2/10 via-transparent to-luxury-bg2/40' />
        <div className='absolute inset-0 bg-gradient-to-t from-luxury-bg2 via-transparent to-transparent' />

        {/* decorative carousel controls */}
        <div className='absolute bottom-6 right-6 flex items-center gap-3'>
          <span className='w-2 h-2 rounded-full bg-luxury-gold' />
          <span className='w-2 h-2 rounded-full bg-luxury-ivory/30' />
        </div>
      </div>
    </div>
  );
}

export default Hero;

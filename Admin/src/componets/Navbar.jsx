import React, { useState } from 'react';

const Navbar = ({ setToken, adminEmail, onMenuClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const initials = adminEmail ? adminEmail.charAt(0).toUpperCase() : 'A';

  return (
    <div className='flex items-center justify-between px-5 sm:px-8 py-4 luxe-card border-x-0 border-t-0 rounded-none'>
      <button
        type='button'
        onClick={onMenuClick}
        aria-label='Menu'
        className='lg:hidden text-luxury-gold'
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <div className='hidden lg:block' />

      <div className='flex items-center gap-5'>
        <button type='button' aria-label='Notifications' className='relative text-luxury-muted hover:text-luxury-gold transition-colors'>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 8a6 6 0 0 0-12 0c0 5-2 6-2 6h16s-2-1-2-6" />
            <path d="M10 21a2 2 0 0 0 4 0" />
          </svg>
          <span className='absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-luxury-rose' />
        </button>

        <div className='relative'>
          <button
            type='button'
            onClick={() => setMenuOpen((o) => !o)}
            className='flex items-center gap-3 group'
          >
            <span className='w-9 h-9 rounded-full border border-luxury-gold/40 bg-gradient-to-br from-luxury-rose/20 to-luxury-gold/20 flex items-center justify-center text-luxury-goldBright text-sm font-medium'>
              {initials}
            </span>
            <span className='hidden sm:block text-left'>
              <span className='block text-sm text-luxury-ivory'>Admin User</span>
              <span className='block text-xs text-luxury-muted'>{adminEmail || 'admin@forever.com'}</span>
            </span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className='text-luxury-muted group-hover:text-luxury-gold transition-colors'>
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          {menuOpen && (
            <div className='absolute right-0 mt-3 w-40 luxe-card rounded-xl py-2 z-20'>
              <button
                type='button'
                onClick={() => setToken('')}
                className='w-full text-left px-4 py-2 text-sm text-luxury-ivory/80 hover:text-luxury-gold transition-colors'
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Navbar;

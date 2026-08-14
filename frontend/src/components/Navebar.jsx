import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const IconButton = ({ children, onClick, label }) => (
  <button
    type='button'
    onClick={onClick}
    aria-label={label}
    className='text-luxury-gold/90 hover:text-luxury-goldLight transition-colors duration-300'
  >
    {children}
  </button>
);

const Navebar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    setToken('');
    localStorage.removeItem('token');
  };

  const navLinkClass = ({ isActive }) =>
    `gold-underline pb-1 transition-colors duration-300 ${
      isActive ? 'active text-luxury-gold' : 'text-luxury-ivory/80 hover:text-luxury-gold'
    }`;

  const links = [
    { to: '/', label: 'HOME' },
    { to: '/collection', label: 'COLLECTION' },
    { to: '/about', label: 'ABOUT' },
    { to: '/contact', label: 'CONTACT' },
  ];

  return (
    <>
      <header className='fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-[1400px] glass rounded-2xl px-5 sm:px-8 py-3.5 flex items-center justify-between shadow-[0_20px_60px_-30px_rgba(214,179,106,0.45)]'>
        <Link to='/' className='font-serif text-2xl sm:text-3xl tracking-wide text-luxury-gold drop-shadow-[0_0_18px_rgba(214,179,106,0.35)]'>
          FOREVER<span className='text-luxury-goldLight'>.</span>
        </Link>

        <nav className='hidden md:flex items-center gap-10 text-xs font-medium tracking-[0.22em]'>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className='flex items-center gap-5 sm:gap-6'>
          <IconButton label='Search' onClick={() => setShowSearch(true)}>
            <svg width='19' height='19' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
              <circle cx='11' cy='11' r='7' />
              <line x1='21' y1='21' x2='16.65' y2='16.65' />
            </svg>
          </IconButton>

          <div className='hidden sm:block relative group'>
            <IconButton label='Account' onClick={() => (token ? null : navigate('/login'))}>
              <svg width='19' height='19' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
                <circle cx='12' cy='8' r='4' />
                <path d='M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7' />
              </svg>
            </IconButton>
            {token && (
              <div className='hidden group-hover:block absolute right-0 pt-4'>
                <div className='glass rounded-xl flex flex-col gap-3 w-44 py-4 px-5 text-luxury-ivory/80'>
                  <p className='cursor-pointer hover:text-luxury-gold text-sm tracking-wide transition-colors'>My Profile</p>
                  <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-luxury-gold text-sm tracking-wide transition-colors'>
                    Orders
                  </p>
                  <p onClick={logout} className='cursor-pointer hover:text-luxury-gold text-sm tracking-wide transition-colors'>
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>

          <IconButton label='Wishlist'>
            <svg width='19' height='19' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
              <path d='M12 20.5s-7.5-4.6-9.8-9.1C.6 8 2 4.5 5.4 3.7c2-.5 4 .3 5.1 2 .3.5 1 .5 1.3 0 1.1-1.7 3.1-2.5 5.1-2C20.3 4.5 21.7 8 19.8 11.4 17.5 15.9 12 20.5 12 20.5Z' />
            </svg>
          </IconButton>

          <Link to='/cart' className='relative text-luxury-gold/90 hover:text-luxury-goldLight transition-colors duration-300'>
            <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
              <path d='M6 8h12l-1 12H7L6 8Z' />
              <path d='M9 8V6a3 3 0 0 1 6 0v2' />
            </svg>
            <span className='absolute -right-2 -bottom-2 w-4 h-4 rounded-full bg-luxury-gold text-luxury-bg text-[10px] font-bold flex items-center justify-center'>
              {getCartCount()}
            </span>
          </Link>

          <button type='button' aria-label='Menu' onClick={() => setVisible(true)} className='md:hidden text-luxury-gold'>
            <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
              <line x1='3' y1='6' x2='21' y2='6' />
              <line x1='3' y1='12' x2='21' y2='12' />
              <line x1='3' y1='18' x2='21' y2='18' />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] bg-luxury-bg/98 backdrop-blur-xl transition-transform duration-500 md:hidden ${
          visible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex flex-col h-full text-luxury-ivory'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-3 p-6 text-luxury-gold cursor-pointer'>
            <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
              <line x1='18' y1='6' x2='6' y2='18' />
              <line x1='6' y1='6' x2='18' y2='18' />
            </svg>
            <p className='text-sm tracking-[0.2em]'>CLOSE</p>
          </div>
          {links.map((link) => (
            <NavLink
              key={link.to}
              onClick={() => setVisible(false)}
              className='py-5 px-8 border-b border-luxury-gold/10 text-lg font-serif tracking-wide hover:text-luxury-gold transition-colors'
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navebar;

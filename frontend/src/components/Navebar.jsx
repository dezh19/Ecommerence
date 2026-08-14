import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext'; 
import ThemeToggle from './ThemeToggle'; // Import the ThemeToggle component

const Navebar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext); // Use the correct context
    const logout = () => {
        navigate('/login');
        setToken('');
        localStorage.removeItem('token');
        // setCartItems({});
    }
    
    return (
<div className='flex items-center justify-between py-6 px-4 font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 shadow-xl w-full backdrop-filter backdrop-blur-lg bg-opacity-30 glass min-h-[60px]'>
            <div>
                <Link to='/'> <img src={assets.logo} className='w-44 filter drop-shadow-lg dark:invert animate-float' alt=''/> </Link>
                <ul className='hidden sm:flex gap-10 text-base text-white font-semibold tracking-wider'>
                <NavLink to='/' className='flex flex-col items-center gap-2 hover:text-yellow-600 transition duration-300 relative group'>
                    <p className='luxury-heading text-lg'>HOME</p>
                    <hr className='w-3/4 border-none h-[3px] bg-yellow-600 opacity-0 group-hover:opacity-100 transition duration-300'></hr>
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-2 hover:text-yellow-600 transition duration-300 relative group'>
                    <p className='luxury-heading text-lg'>COLLECTION</p>
                    <hr className='w-3/4 border-none h-[3px] bg-yellow-600 opacity-0 group-hover:opacity-100 transition duration-300'></hr>
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-2 hover:text-yellow-600 transition duration-300 relative group'>
                    <p className='luxury-heading text-lg'>ABOUT</p>
                    <hr className='w-3/4 border-none h-[3px] bg-yellow-600 opacity-0 group-hover:opacity-100 transition duration-300'></hr>
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-2 hover:text-yellow-600 transition duration-300 relative group'>
                    <p className='luxury-heading text-lg'>CONTACT</p>
                    <hr className='w-3/4 border-none h-[3px] bg-yellow-600 opacity-0 group-hover:opacity-100 transition duration-300'></hr>
                </NavLink>
            </ul>
            </div>
            <div className='flex items-center gap-8'>
                <ThemeToggle />
                <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-7 cursor-pointer filter drop-shadow-lg' alt='' />
                <div className='group relative'>
                    <img onClick={()=>token ? null : navigate('/login')} src={assets.profile_icon} className='w-7 cursor-pointer filter drop-shadow-lg' alt='' />
                    {token &&
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-3 w-40 py-4 px-6 bg-yellow-50 text-yellow-900 rounded-lg shadow-xl'>
                            <p className='cursor-pointer hover:text-yellow-700 text-base'>My Profile</p>
                            <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-yellow-700 text-base'>Orders</p>
                            <p onClick={logout} className='cursor-pointer hover:text-yellow-700 text-base'>Logout</p>
                        </div>
                    </div>}
                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-7 min-w-7 filter drop-shadow-lg' alt=''/>
                    <p className='absolute right-[-6px] bottom-[-6px] w-6 text-center leading-5 bg-yellow-600 text-white aspect-square rounded-full text-sm font-bold'>{getCartCount()}</p>
                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-7 cursor-pointer sm:hidden filter drop-shadow-lg' alt='' />
            </div>
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-yellow-50 transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-yellow-900'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-4'>
                        <img className='h-5 rotate-180' src={assets.dropdown_icon} alt=''/>
                        <p className='text-lg'>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-3 p-8 border border-yellow-200 text-lg' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-3 p-8 border border-yellow-200 text-lg' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-3 p-8 border border-yellow-200 text-lg' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-3 p-8 border border-yellow-200 text-lg' to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navebar;

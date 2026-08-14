import React, {useState, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
    const [visible, setVisible] = useState(false)
    const location = useLocation();

    useEffect(() => {
        if(location.pathname.includes ('collection')){
        setVisible(true)
        }
        else{
            setVisible(false)
        }
    }, [location])

    console.log('showSearch:', showSearch)
    console.log('search:', search)

    return showSearch && visible ? (
        <div className='text-center py-4'>
            <div className='glass inline-flex items-center justify-center px-6 py-3 my-2 mx-3 rounded-full w-3/4 sm:w-1/2'>
                <input value={search} onChange={(e) => setSearch(e.target.value)} className='flex-1 outline-none bg-transparent text-sm text-luxury-ivory placeholder:text-luxury-ivory/40' type="text" placeholder="Search" id="" />
                <img className='w-4 opacity-70' src={assets.search_icon} alt="" />
            </div>
            <img onClick={() => setShowSearch(false)} className='inline w-3 cursor-pointer opacity-70 hover:opacity-100' src={assets.cross_icon} alt="" />
        </div>
    ) : null
}

export default SearchBar
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './componets/Navbar';
import Sidebar from './componets/Sidebar';
import Login from './componets/Login';
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';
import Users from './pages/Users';
import Categories from './pages/Categories';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

export const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';
export const currency = '$';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [adminEmail, setAdminEmail] = useState(localStorage.getItem('adminEmail') || '');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  useEffect(() => {
    localStorage.setItem('adminEmail', adminEmail);
  }, [adminEmail]);

  if (token === '') {
    return (
      <div className='min-h-screen bg-luxury-bg text-luxury-ivory'>
        <ToastContainer theme='dark' />
        <Login setToken={setToken} setAdminEmail={setAdminEmail} />
      </div>
    );
  }

  return (
    <div className='h-screen bg-luxury-bg text-luxury-ivory flex overflow-hidden'>
      <ToastContainer theme='dark' />

      {/* Desktop sidebar */}
      <div className='hidden lg:block w-72 shrink-0'>
        <Sidebar />
      </div>

      {/* Mobile sidebar drawer */}
      {mobileNavOpen && (
        <div className='fixed inset-0 z-50 lg:hidden'>
          <div className='absolute inset-0 bg-black/70' onClick={() => setMobileNavOpen(false)} />
          <div className='absolute inset-y-0 left-0 w-72'>
            <Sidebar onNavigate={() => setMobileNavOpen(false)} />
          </div>
        </div>
      )}

      <div className='flex-1 flex flex-col min-w-0'>
        <Navbar setToken={setToken} adminEmail={adminEmail} onMenuClick={() => setMobileNavOpen(true)} />
        <div className='flex-1 overflow-y-auto luxe-scrollbar p-5 sm:p-8'>
          <Routes>
            <Route path='/' element={<Add token={token} />} />
            <Route path='/add' element={<Add token={token} />} />
            <Route path='/list' element={<List token={token} />} />
            <Route path='/orders' element={<Orders token={token} />} />
            <Route path='/users' element={<Users token={token} />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;

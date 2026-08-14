import React from 'react'
import { NavLink } from 'react-router-dom'

const icons = {
  add: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  ),
  list: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="4" rx="1" />
      <rect x="3" y="10" width="18" height="4" rx="1" />
      <rect x="3" y="16" width="18" height="4" rx="1" />
    </svg>
  ),
  orders: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 8l8-4 8 4-8 4-8-4Z" />
      <path d="M4 8v8l8 4 8-4V8" />
      <path d="M12 12v8" />
    </svg>
  ),
  categories: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
    </svg>
  ),
  users: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.6 3-6 7-6s7 2.4 7 6" />
    </svg>
  ),
  reports: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 20V10M12 20V4M20 20v-7" />
    </svg>
  ),
  settings: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 13a7.9 7.9 0 0 0 0-2l2-1.4-2-3.4-2.3.7a7.7 7.7 0 0 0-1.7-1L15 3h-4l-.4 2.9a7.7 7.7 0 0 0-1.7 1l-2.3-.7-2 3.4L6.6 11a7.9 7.9 0 0 0 0 2l-2 1.4 2 3.4 2.3-.7a7.7 7.7 0 0 0 1.7 1L11 21h4l.4-2.9a7.7 7.7 0 0 0 1.7-1l2.3.7 2-3.4-2-1.4Z" />
    </svg>
  ),
}

const NAV_ITEMS = [
  { to: '/add', label: 'Add Items', icon: 'add' },
  { to: '/list', label: 'List Items', icon: 'list' },
  { to: '/orders', label: 'Orders', icon: 'orders' },
  { to: '/categories', label: 'Categories', icon: 'categories' },
  { to: '/users', label: 'Users', icon: 'users' },
  { to: '/reports', label: 'Reports', icon: 'reports' },
  { to: '/settings', label: 'Settings', icon: 'settings' },
]

function Sidebar({ onNavigate }) {
  return (
    <div className='flex flex-col h-full bg-luxury-surface/60 border-r border-luxury-gold/10'>
      <div className='px-6 pt-8 pb-6'>
        <p className='luxury-heading text-2xl text-luxury-gold tracking-wide drop-shadow-[0_0_16px_rgba(216,180,106,0.3)]'>
          FOREVER<span className='text-luxury-goldBright'>.</span>
        </p>
        <p className='luxury-eyebrow text-[11px] text-luxury-rose mt-1'>ADMIN PANEL</p>
      </div>

      <nav className='flex-1 px-4 flex flex-col gap-1.5 overflow-y-auto luxe-scrollbar'>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-luxury-rose/15 to-luxury-bg border border-luxury-gold/40 text-luxury-ivory shadow-[0_0_20px_-6px_rgba(216,180,106,0.5)]'
                  : 'text-luxury-muted border border-transparent hover:border-luxury-gold/15 hover:text-luxury-ivory'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className={isActive ? 'text-luxury-gold' : 'text-luxury-muted'}>{icons[item.icon]}</span>
                <span>{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className='p-4 mt-4'>
        <div className='luxe-card rounded-2xl p-5 relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-luxury-rose/10 via-transparent to-luxury-gold/10' />
          <div className='absolute -top-10 -right-10 w-28 h-28 rounded-full bg-luxury-gold/10 blur-2xl' />
          <div className='relative'>
            <p className='luxury-heading text-lg text-luxury-gold'>FOREVER.</p>
            <p className='text-xs text-luxury-ivory/70 mt-1 leading-relaxed'>Premium Fashion Collection</p>
            <p className='text-[11px] text-luxury-muted mt-3'>Manage every detail with quiet precision.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

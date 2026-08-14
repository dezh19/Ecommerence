import React from 'react'

const Categories = () => {
  return (
    <div className='animate-fade-in'>
      <p className='luxury-heading text-2xl text-luxury-ivory mb-1'>Categories</p>
      <p className='text-sm text-luxury-muted mb-6'>Organize your collection into elegant, browsable groupings.</p>

      <div className='luxe-card luxe-card-glow rounded-2xl p-12 text-center'>
        <div className='w-14 h-14 rounded-2xl border border-luxury-gold/25 bg-luxury-gold/5 flex items-center justify-center mx-auto mb-5'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className='text-luxury-gold'>
            <rect x="3" y="3" width="8" height="8" rx="1.5" />
            <rect x="13" y="3" width="8" height="8" rx="1.5" />
            <rect x="3" y="13" width="8" height="8" rx="1.5" />
            <rect x="13" y="13" width="8" height="8" rx="1.5" />
          </svg>
        </div>
        <p className='luxury-eyebrow text-luxury-rose text-xs mb-2'>COMING SOON</p>
        <p className='text-luxury-ivory/80 max-w-md mx-auto'>
          Category management — creating, editing, and reordering collection groups — isn&apos;t built yet.
          Products currently use the fixed Men / Women / Kids taxonomy set on the Add Items page.
        </p>
      </div>
    </div>
  )
}

export default Categories

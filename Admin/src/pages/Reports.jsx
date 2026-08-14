import React from 'react'

const Reports = () => {
  return (
    <div className='animate-fade-in'>
      <p className='luxury-heading text-2xl text-luxury-ivory mb-1'>Reports</p>
      <p className='text-sm text-luxury-muted mb-6'>Sales, revenue, and performance at a glance.</p>

      <div className='luxe-card luxe-card-glow rounded-2xl p-12 text-center'>
        <div className='w-14 h-14 rounded-2xl border border-luxury-gold/25 bg-luxury-gold/5 flex items-center justify-center mx-auto mb-5'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className='text-luxury-gold'>
            <path d="M4 20V10M12 20V4M20 20v-7" />
          </svg>
        </div>
        <p className='luxury-eyebrow text-luxury-rose text-xs mb-2'>COMING SOON</p>
        <p className='text-luxury-ivory/80 max-w-md mx-auto'>
          Analytics and revenue reporting aren't built yet. Once there's real order history to draw
          from, this is where you'll see sales trends, top products, and customer growth.
        </p>
      </div>
    </div>
  )
}

export default Reports

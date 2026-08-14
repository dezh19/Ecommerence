import React from 'react'

const Settings = () => {
  return (
    <div className='animate-fade-in'>
      <p className='luxury-heading text-2xl text-luxury-ivory mb-1'>Settings</p>
      <p className='text-sm text-luxury-muted mb-6'>Store configuration and admin preferences.</p>

      <div className='luxe-card luxe-card-glow rounded-2xl p-12 text-center'>
        <div className='w-14 h-14 rounded-2xl border border-luxury-gold/25 bg-luxury-gold/5 flex items-center justify-center mx-auto mb-5'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className='text-luxury-gold'>
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 13a7.9 7.9 0 0 0 0-2l2-1.4-2-3.4-2.3.7a7.7 7.7 0 0 0-1.7-1L15 3h-4l-.4 2.9a7.7 7.7 0 0 0-1.7 1l-2.3-.7-2 3.4L6.6 11a7.9 7.9 0 0 0 0 2l-2 1.4 2 3.4 2.3-.7a7.7 7.7 0 0 0 1.7 1L11 21h4l.4-2.9a7.7 7.7 0 0 0 1.7-1l2.3.7 2-3.4-2-1.4Z" />
          </svg>
        </div>
        <p className='luxury-eyebrow text-luxury-rose text-xs mb-2'>COMING SOON</p>
        <p className='text-luxury-ivory/80 max-w-md mx-auto'>
          Store-wide settings — admin credentials, payment provider keys, shipping rules — aren&apos;t
          editable from here yet. For now, those live directly in <code className='text-luxury-gold/80'>Backend/.env</code>.
        </p>
      </div>
    </div>
  )
}

export default Settings

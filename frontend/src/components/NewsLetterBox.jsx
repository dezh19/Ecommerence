import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event)=>{
        event.preventDefault();
    }

  return (
    <div className='text-center py-16'>
      <p className='font-serif text-3xl text-luxury-ivory'>Subscribe now & get 20% off</p>
      <p className='text-luxury-ivory/50 mt-3 text-sm'>Be first to hear about new arrivals and private sales.</p>

      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto mt-8 glass rounded-full pl-6 pr-2 py-2' action="">
        <input className='w-full sm:flex-1 outline-none bg-transparent text-sm text-luxury-ivory placeholder:text-luxury-ivory/40' type="email" placeholder='Enter your email' required />
        <button type='submit' className='btn-gold whitespace-nowrap' >SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetterBox

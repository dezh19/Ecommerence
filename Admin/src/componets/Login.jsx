import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Login = ({ setToken, setAdminEmail }) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [submitting, setSubmitting] = useState(false)

    const onSubmitHandler = async(e)=>{
        try{
            e.preventDefault();
            setSubmitting(true)
            const response = await axios.post(backendUrl + '/api/user/adminlogin',{email,password})
            if (response.data.success){
                setAdminEmail(email)
                setToken(response.data.token)
            }else{
                toast.error(response.data.message)
            }
        }catch(error){
            console.log(error);
            toast.error(error.message)
        } finally {
            setSubmitting(false)
        }
    }

  return (
    <div className='min-h-screen flex items-center justify-center w-full relative overflow-hidden'>
        <div className='pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-luxury-gold/10 rounded-full blur-3xl' />
        <div className='pointer-events-none absolute bottom-0 right-1/4 w-96 h-56 bg-luxury-rose/10 rounded-full blur-3xl' />

        <div className='luxe-card luxe-card-glow rounded-2xl px-10 py-10 max-w-md w-[90%] relative animate-fade-in'>
            <p className='luxury-heading text-3xl text-luxury-gold text-center mb-1'>
              FOREVER<span className='text-luxury-goldBright'>.</span>
            </p>
            <p className='luxury-eyebrow text-[11px] text-luxury-rose text-center mb-8'>ADMIN PANEL</p>

            <form onSubmit={onSubmitHandler} action="">
                <div className='mb-4'>
                    <p className='text-xs tracking-wide text-luxury-muted mb-2'>EMAIL ADDRESS</p>
                    <input onChange={(e)=>setEmail(e.target.value) } value={email} className='luxe-input w-full px-4 py-3 text-sm' type="email" placeholder='your@email.com' required />
                </div>
                <div className='mb-6'>
                    <p className='text-xs tracking-wide text-luxury-muted mb-2'>PASSWORD</p>
                    <input onChange={(e)=>setPassword(e.target.value)  } value={password} className='luxe-input w-full px-4 py-3 text-sm' type="password" placeholder='Enter password here' />
                </div>
                <button disabled={submitting} className='luxe-btn-gold w-full' type='submit'>
                  {submitting ? 'Signing In...' : 'Login'}
                </button>
            </form>
        </div>

    </div>
  )
}

export default Login

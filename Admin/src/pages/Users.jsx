import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Users = ({ token }) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchUsers = async () => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/user/list`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      if (response.data.success) {
        setUsers(response.data.users)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [token])

  return (
    <div className='animate-fade-in'>
      <p className='luxury-heading text-2xl text-luxury-ivory mb-1'>Users</p>
      <p className='text-sm text-luxury-muted mb-6'>Everyone who has created an account on the storefront.</p>

      <div className='luxe-card luxe-card-glow rounded-2xl overflow-hidden'>
        <div className='grid grid-cols-[2fr_2fr_1fr] px-6 py-4 text-xs tracking-wide text-luxury-muted border-b border-luxury-gold/10'>
          <p>NAME</p>
          <p>EMAIL</p>
          <p>JOINED</p>
        </div>

        {!loading && users.length === 0 && (
          <p className='px-6 py-8 text-sm text-luxury-muted'>No customers have registered yet.</p>
        )}

        {users.map((user) => (
          <div key={user._id} className='grid grid-cols-[2fr_2fr_1fr] px-6 py-4 text-sm border-b border-luxury-gold/5 last:border-0 hover:bg-white/[0.02] transition-colors'>
            <div className='flex items-center gap-3'>
              <span className='w-8 h-8 rounded-full border border-luxury-gold/30 bg-gradient-to-br from-luxury-rose/15 to-luxury-gold/15 flex items-center justify-center text-luxury-goldBright text-xs'>
                {user.name?.charAt(0).toUpperCase() || '?'}
              </span>
              <p className='text-luxury-ivory'>{user.name}</p>
            </div>
            <p className='text-luxury-ivory/70 self-center'>{user.email}</p>
            <p className='text-luxury-muted self-center'>
              {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : '—'}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users

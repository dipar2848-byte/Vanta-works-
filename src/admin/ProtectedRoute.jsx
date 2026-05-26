import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const check = async () => {
      const { data } = await supabase.auth.getUser()
      setUser(data?.user || null)
      setLoading(false)
    }

    check()
  }, [])

  if (loading) return <div style={{ color: 'white', padding: 20 }}>Loading...</div>

  if (!user) return <Navigate to="/admin/login" />

  return children
}

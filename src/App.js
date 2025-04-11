import './index.css'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import { Routes, Route } from 'react-router-dom'
import Home from './Routes/Home'
import Auth from './Routes/Auth'
import Profile from './Routes/Profile'

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Profile key={session.user.id} session={session} />} />
        </Routes>
      )}
    </div>
  )
}

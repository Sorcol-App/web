import './index.css'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import { Routes, Route } from 'react-router-dom'
import Auth from './Auth'
import Account from './Account'

export default function Home() {
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
          <Route path="/" element={<Auth />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Account key={session.user.id} session={session} />} />
        </Routes>
      )}
    </div>
  )
}

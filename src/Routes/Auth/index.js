import { useState } from 'react'
import { supabase } from '../../supabaseClient'

import Footer from '../../components/Footer'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (email) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: process.env.REACT_APP_SITE_URL,
        },
      })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="container">
        <div className="row flex flex-center">
          <form className="col-8 form-widget">
            <h1 className="text-5xl">Register or login</h1>
            <div>
              <label htmlFor="email">Sign in via magic link with your email below</label>
              <input
                id="email"
                className="inputField"
                type="email"
                placeholder="Write your email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  handleLogin(email)
                }}
                className={'button primary text-white block'}
                disabled={loading}
              >
                {loading ? <span>Loading</span> : <span>Send magic link</span>}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

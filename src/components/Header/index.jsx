import { useState, useEffect } from 'react'
import Hand from '../../assets/sorcol-brand-hand.png'
import Brand from '../../assets/sorcol-brand.png'

export default function Header() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <header className="header flex justify-between items-center">
      <section className="brand flex items-center">
        <img src={Hand} alt="Sorcol" className="w-16" />
        <img src={Brand} alt="Sorcol" className="h-8" />
      </section>
      <section>
        <button
          className="bg-blue-500 dark:bg-gray-500 text-white px-4 py-2 rounded-md border-none"
          onClick={handleThemeChange}
        >
          {theme === 'light' ? '☾' : '☼'}
        </button>
      </section>
    </header>
  )
}

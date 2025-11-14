import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState('system')

  // Apply theme to html element
  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'system'
    setTheme(stored)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const isDark = theme === 'dark' || (theme === 'system' && prefersDark)
    root.classList.toggle('dark', isDark)

    localStorage.setItem('theme', theme)
  }, [theme])

  const cycleTheme = () => {
    setTheme((t) => (t === 'light' ? 'dark' : t === 'dark' ? 'system' : 'light'))
  }

  const label = theme === 'light' ? 'Light' : theme === 'dark' ? 'Dark' : 'System'

  return (
    <button
      onClick={cycleTheme}
      aria-label={`Toggle theme (current: ${label})`}
      title={`Theme: ${label} (click to change)`}
      className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ring-1 ring-inset ring-black/5 hover:bg-black/5 dark:hover:bg-white/10 ${className}`}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="h-4 w-4 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="ml-5 hidden sm:inline text-gray-700 dark:text-gray-200">{label}</span>
    </button>
  )
}

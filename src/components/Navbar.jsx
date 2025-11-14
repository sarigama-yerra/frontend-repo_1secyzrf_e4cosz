import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#hobbies', label: 'Hobbies' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl shadow-lg ring-1 ring-black/5 dark:ring-white/10">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#top" className="font-semibold tracking-tight text-gray-800 dark:text-gray-100">
              <span className="text-blue-600 dark:text-sky-400">Satyam</span> Portfolio
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-sky-400 transition-colors">
                  {l.label}
                </a>
              ))}
              <ThemeToggle />
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10"
                aria-label="Toggle menu"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {open && (
            <div className="md:hidden border-t border-gray-200 dark:border-white/10 px-4 py-3 space-y-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10"
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

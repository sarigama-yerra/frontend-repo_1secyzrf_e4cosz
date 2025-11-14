import { Menu, X } from 'lucide-react'
import { useState } from 'react'

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
        <div className="mt-4 rounded-2xl bg-white/60 backdrop-blur-xl shadow-lg ring-1 ring-black/5">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#top" className="font-semibold tracking-tight text-gray-800">
              <span className="text-blue-600">Satyam</span> Portfolio
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-gray-700 hover:text-blue-600 transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-gray-200 px-4 py-3 space-y-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100"
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

import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const buildMailto = () => {
    const to = '' // add your email here if you want: e.g., 'you@example.com'
    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    return `mailto:${to}?subject=${subject}&body=${body}`
  }

  return (
    <form className="space-y-4" onSubmit={(e)=>e.preventDefault()}>
      <div className="grid sm:grid-cols-2 gap-4">
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" className="w-full rounded-lg border border-gray-300 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" required />
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="w-full rounded-lg border border-gray-300 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" required />
      </div>
      <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Message" rows="4" className="w-full rounded-lg border border-gray-300 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" required />
      <a href={buildMailto()} className="inline-flex items-center rounded-lg bg-gradient-to-r from-rose-500 to-orange-500 text-white px-4 py-2 font-semibold hover:from-rose-600 hover:to-orange-600">
        Open email client
      </a>
      <p className="text-xs text-gray-500 dark:text-gray-400">Tip: add your email to the button link in this section to receive messages.</p>
    </form>
  )
}

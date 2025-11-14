const certificates = [
  'Python for Computer Vision with OpenCV and Deep Learning',
  'LLMs with Google Cloud and Python',
]

export default function Certificates() {
  return (
    <ul className="space-y-3">
      {certificates.map((c) => (
        <li key={c} className="rounded-xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-4 shadow ring-1 ring-black/5 dark:ring-white/10 text-gray-800 dark:text-gray-100">
          {c}
        </li>
      ))}
    </ul>
  )
}

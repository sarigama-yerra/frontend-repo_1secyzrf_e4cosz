const certificates = [
  'Python for Computer Vision with OpenCV and Deep Learning',
  'LLMs with Google Cloud and Python',
]

export default function Certificates() {
  return (
    <ul className="space-y-3">
      {certificates.map((c) => (
        <li key={c} className="rounded-xl bg-white p-4 shadow ring-1 ring-black/5 text-gray-800">
          {c}
        </li>
      ))}
    </ul>
  )
}

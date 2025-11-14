import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[80vh] sm:min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32">
        <div className="max-w-2xl bg-white/60 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-lg ring-1 ring-black/5 pointer-events-auto">
          <p className="text-xs uppercase tracking-widest text-blue-600 font-semibold">Portfolio</p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
            Satyam Kumar Jha
          </h1>
          <p className="mt-2 text-gray-700 text-sm sm:text-base">
            3rd year, Global Academy of Technology
          </p>
          <p className="mt-4 text-gray-700">
            Building things with Python, Java, and C. Passionate about machine learning, computer vision, and full‑stack development.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-lg bg-blue-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-blue-700 transition-colors">View Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-lg bg-gray-900 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-gray-800 transition-colors">Contact</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white" />
    </section>
  )
}

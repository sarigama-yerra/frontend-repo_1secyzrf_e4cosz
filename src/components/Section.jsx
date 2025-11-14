export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h2>
          {subtitle && <p className="mt-2 text-gray-600 dark:text-gray-300">{subtitle}</p>}
        </div>
        {children}
      </div>

      {/* decorative blobs */}
      <div className="pointer-events-none absolute -z-10 inset-x-0 -top-20 flex justify-center opacity-40 dark:opacity-30">
        <div className="h-40 w-40 sm:h-56 sm:w-56 rounded-full bg-gradient-to-br from-rose-400/30 to-sky-400/30 blur-3xl"></div>
      </div>
    </section>
  )
}

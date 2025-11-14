const skills = ['Python', 'Java', 'C']

export default function Skills() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
      {skills.map((s) => (
        <div key={s} className="rounded-xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl shadow ring-1 ring-black/5 dark:ring-white/10 p-4 text-center text-sm font-semibold text-gray-800 dark:text-gray-100">
          {s}
        </div>
      ))}
    </div>
  )
}

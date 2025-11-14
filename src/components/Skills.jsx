const skills = ['Python', 'Java', 'C']

export default function Skills() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
      {skills.map((s) => (
        <div key={s} className="rounded-xl bg-white shadow ring-1 ring-black/5 p-4 text-center text-sm font-semibold text-gray-800">
          {s}
        </div>
      ))}
    </div>
  )
}

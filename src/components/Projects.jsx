const projects = [
  {
    title: 'Hospital Management System',
    stack: ['MySQL', 'Java', 'JDBC'],
    desc: 'Desktop application to manage patients, doctors, appointments, and billing with persistent MySQL storage.',
  },
  {
    title: 'REALYTICS',
    stack: ['Flask', 'TensorFlow', 'SQLite', 'ResNet50'],
    desc: 'Computer-vision powered analytics tool using deep learning for image insights.',
  },
  {
    title: 'SIH Project',
    stack: ['OpenCV', 'Python', 'Flask'],
    desc: 'Smart India Hackathon project leveraging classical and deep CV pipelines to solve real-world problems.',
  },
  {
    title: 'Campus Cart',
    stack: ['React', 'Express.js', 'Node.js', 'MongoDB'],
    desc: 'Full-stack e-commerce platform for campus goods with authentication and cart/checkout flow.',
  },
]

export default function Projects() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((p) => (
        <div key={p.title} className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl p-6 shadow ring-1 ring-black/5 dark:ring-white/10">
          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-rose-400/40 to-amber-400/40 blur-2xl transition-all group-hover:scale-125" />
          <div className="flex items-center justify-between relative">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.title}</h3>
            <div className="flex flex-wrap gap-1 justify-end max-w-[60%]">
              {p.stack.map((t) => (
                <span key={t} className="text-[10px] rounded-full bg-sky-50 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300 px-2 py-1 font-semibold ring-1 ring-sky-200 dark:ring-sky-700/40">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
        </div>
      ))}
    </div>
  )
}

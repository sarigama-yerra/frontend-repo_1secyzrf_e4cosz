const hobbies = ['Playing games', 'Exploring', 'Cooking']

export default function Hobbies() {
  return (
    <div className="flex flex-wrap gap-3">
      {hobbies.map((h) => (
        <span key={h} className="rounded-full bg-gray-100/80 dark:bg-white/10 text-gray-800 dark:text-gray-100 px-4 py-2 text-sm font-medium ring-1 ring-black/5 dark:ring-white/10">
          {h}
        </span>
      ))}
    </div>
  )
}

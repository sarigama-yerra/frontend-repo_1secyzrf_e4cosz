const hobbies = ['Playing games', 'Exploring', 'Cooking']

export default function Hobbies() {
  return (
    <div className="flex flex-wrap gap-3">
      {hobbies.map((h) => (
        <span key={h} className="rounded-full bg-gray-100 text-gray-800 px-4 py-2 text-sm font-medium ring-1 ring-black/5">
          {h}
        </span>
      ))}
    </div>
  )
}

export default function Filter({ skills, setFilter }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {skills.map((skill, i) => (
        <button
          key={i}
          className="px-3 py-1 bg-gray-200 rounded-xl hover:bg-blue-400 hover:text-white transition"
          onClick={() => setFilter(skill)}
        >
          {skill}
        </button>
      ))}
      <button
        className="px-3 py-1 bg-red-200 rounded-xl hover:bg-red-400 hover:text-white transition"
        onClick={() => setFilter("")}
      >
        Clear
      </button>
    </div>
  );
}
